"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; // ✅ Import NextAuth for session check

export default function RazorpayButton({ amount, activityId, phone, numPersons, userEmail, userName }) {
  const router = useRouter();
  const { data: session } = useSession(); // ✅ Get session data
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => console.error("Failed to load Razorpay SDK");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    // ✅ Prevent booking if user is not logged in
    if (!session) {
      alert("Please log in to book an activity."); // ✅ Show alert
      router.push("/login"); // ✅ Redirect to login page
      return;
    }

    if (!razorpayLoaded) {
      console.error("Razorpay SDK not loaded yet.");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Create Order in Backend
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      if (!data.success) throw new Error("Payment initiation failed");

      // Step 2: Open Razorpay Payment UI
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: data.order.amount,
        currency: "INR",
        name: "Drifter",
        description: "Activity Booking",
        order_id: data.order.id,
        handler: async (paymentResponse) => {
          console.log("Payment Successful:", paymentResponse);

          // Step 3: Save Successful Payment in Strapi
          const bookingDate = new Date().toISOString(); // Store current timestamp
          const paymentData = {
            orderId: data.order.id,
            paymentId: paymentResponse.razorpay_payment_id,
            activityId,
            userEmail,
            phone,
            numPersons,
            amount,
            bookingDate, // ✅ Add booking date
          };

          const paymentResult = await fetch("/api/payment-success", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
          });

          const resultData = await paymentResult.json();
          console.log("Payment Success Response:", resultData);

          if (resultData.success && resultData.bookingId) {
            router.push(`/success?bookingId=${resultData.bookingId}`); // ✅ Redirect to success page with booking ID
          } else {
            router.push("/failure"); // ✅ Redirect to failure page if error occurs
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
