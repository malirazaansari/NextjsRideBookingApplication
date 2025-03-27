import Stripe from "stripe";
import mongoose from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Define a Mongoose schema for storing payment details
const PaymentSchema = new mongoose.Schema({
  paymentIntentId: String,
  amount: Number,
  currency: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

// Create a Mongoose model
const Payment = mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

// Connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to smallest currency unit
      currency,
    });

    // Connect to the database
    await connectToDatabase();

    // Store payment details in the database
    const payment = new Payment({
      paymentIntentId: paymentIntent.id,
      amount,
      currency,
      status: paymentIntent.status,
    });
    await payment.save();

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
