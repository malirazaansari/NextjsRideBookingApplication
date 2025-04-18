import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import InputField from "./InputField";

const PaymentForm = ({ amount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    setIsProcessing(true);
    const cardElement = elements.getElement(CardElement);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stripe/create-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "usd" }),
         mode: 'cors',
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await response.json();

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        alert("Payment failed: " + error.message);
      } else if (paymentIntent.status === "succeeded") {
        onPaymentSuccess(paymentIntent.id);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (

    <div>
  <CardElement className="bg-[var(--color-background)] p-2 border border-[var(--color-primary)] rounded-lg text-[var(--color-foreground)]" />
  <button
    className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] mt-4 px-6 py-2 rounded text-white"
    onClick={handlePayment}
    disabled={isProcessing}
  >
    {isProcessing ? "Processing..." : "Pay And Book Now"}
  </button>
</div>

  );
};

export default PaymentForm;
