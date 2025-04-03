import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    pickupPlace,
    dropoffPlace,
    viaPlaces,
    isWaitAndReturn,
    distance,
    tripDetails,
    selectedVehicle,
    extras,
    paymentMethod,
    selectedDateTime,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "ture",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Booking Service" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Booking Confirmation",
      html: `
        <h2>New Booking Details</h2>
        <p><strong>Pickup:</strong> ${pickupPlace?.formatted_address || "N/A"}</p>
        <p><strong>Dropoff:</strong> ${dropoffPlace?.formatted_address || "N/A"}</p>
        <p><strong>Via Places:</strong> ${viaPlaces.map((p) => p?.formatted_address).join(", ") || "None"}</p>
        <p><strong>Wait and Return:</strong> ${isWaitAndReturn ? "Yes" : "No"}</p>
        <p><strong>Distance:</strong> ${distance} km</p>
        <h3>Passenger Details</h3>
        <p><strong>Name:</strong> ${tripDetails.name}</p>
        <p><strong>Email:</strong> ${tripDetails.email}</p>
        <p><strong>Phone:</strong> ${tripDetails.phone}</p>
        <p><strong>Notes:</strong> ${tripDetails.notes || "None"}</p>
        <h3>Vehicle Details</h3>
        <p><strong>Vehicle:</strong> ${selectedVehicle?.name || "Not Selected"}</p>
        <p><strong>Extras:</strong> Meet & Greet: ${extras.meetAndGreet ? "Yes" : "No"}, Wait & Return: ${extras.waitAndReturn ? "Yes" : "No"}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod || "Not Specified"}</p>
        <p><strong>Selected Date & Time:</strong> ${selectedDateTime || "Not Set"}</p>
        <p><strong>UTC Offset (Minutes):</strong> ${new Date().getTimezoneOffset() * -1}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
