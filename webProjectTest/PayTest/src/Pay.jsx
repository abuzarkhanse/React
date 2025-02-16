import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key");

const PayCard = () => {
  const handlePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: "product-id", name: "Premium Service", quantity: 1, price: 1000 },
        ],
      }),
    });

    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Product"
          className="w-full"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Premium Service
          </h2>
          <p className="text-gray-600">
            Experience our top-notch premium service tailored to meet your needs.
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-semibold text-gray-800">$10.00</span>
            <button
              onClick={handlePayment}
              className="px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-500"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
