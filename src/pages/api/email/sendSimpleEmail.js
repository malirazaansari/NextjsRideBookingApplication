import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { bookingSummary } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail for simplicity
      auth: {
        user: process.env.SIMPLE_EMAIL_USER, // Sender email
        pass: process.env.SIMPLE_EMAIL_PASS, // Sender email password
      },
    });

    const mailOptions = {
      from: process.env.SIMPLE_EMAIL_USER,
      to: process.env.SIMPLE_EMAIL_RECIPIENT, // Recipient email
      subject: "Booking Summary",
      text: `
        Booking Summary:
        Pickup Place: ${bookingSummary.pickupPlace?.formatted_address || "N/A"}
        Dropoff Place: ${bookingSummary.dropoffPlace?.formatted_address || "N/A"}
        Via Places: ${bookingSummary.viaPlaces?.map((place) => place?.formatted_address).join(", ") || "None"}
        Distance: ${bookingSummary.distance?.toFixed(2)} km
        Name: ${bookingSummary.tripDetails.name}
        Email: ${bookingSummary.tripDetails.email}
        Phone: ${bookingSummary.tripDetails.phone}
        Notes: ${bookingSummary.tripDetails.notes || "None"}
        Selected Vehicle: ${bookingSummary.selectedVehicle?.name || "N/A"}
        Extras: ${bookingSummary.extras.meetAndGreet ? "Meet and Greet" : "None"} ${
        bookingSummary.extras.waitAndReturn ? ", Wait and Return" : ""
      }
        Payment Method: ${bookingSummary.paymentMethod}
        Date and Time: ${bookingSummary.selectedDateTime || "N/A"}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: "Simple email sent successfully!" });
  } catch (error) {
    console.error("Error sending simple email:", error);
    return res.status(500).json({ error: "Failed to send simple email" });
  }
}
