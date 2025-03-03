"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RazorpayButton({ amount, activityId, phone, numPersons, userEmail, userName }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => console.error("Failed to load Razorpay SDK");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!session) {
      alert("Please log in to book an activity.");
      router.push("/login");
      return;
    }

    if (!razorpayLoaded) {
      console.error("Razorpay SDK not loaded yet.");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Create an order with Razorpay
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      if (!data.success) throw new Error("Payment initiation failed");

      const bookingDate = new Date().toISOString(); // ✅ Ensure booking date is captured

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: data.order.amount,
        currency: "INR",
        name: "Drifter",
        description: "Activity Booking",
        order_id: data.order.id,
        handler: async (paymentResponse) => {
          console.log("Payment Successful:", paymentResponse);

          const paymentData = {
            orderId: data.order.id, // ✅ Store Order ID
            paymentId: paymentResponse.razorpay_payment_id, // ✅ Store Payment ID
            activityId,
            userEmail,
            userName: userName || "Guest",
            phone: phone || "N/A",
            numPersons: numPersons || 1,
            amount,
            bookingDate, // ✅ Store formatted booking date
          };

          // Step 2: Save booking details in Strapi
          const paymentResult = await fetch("/api/payment-success", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
          });

          const resultData = await paymentResult.json();
          if (resultData.success && resultData.bookingId) {
            router.push(`/success?bookingId=${resultData.bookingId}`);
          } else {
            router.push("/failure");
          }
        },
        prefill: { name: userName, email: userEmail, contact: phone },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      router.push("/failure");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      disabled={!razorpayLoaded || loading}
    >
      {loading ? "Processing..." : `Pay ₹${amount}`}
    </button>
  );
}
