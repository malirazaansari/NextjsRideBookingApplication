import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { clientSecret } = req.body;

    if (!clientSecret) {
      return res.status(400).json({ error: "Missing client secret" });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(clientSecret);

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error("Error confirming payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
