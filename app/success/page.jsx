"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  const params = useSearchParams();
  const bookingId = params.get("bookingId");

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooking() {
      if (!bookingId) return;

      try {
        const res = await fetch(
          `http://localhost:1337/api/bookings/${bookingId}?populate=activity`
        );
        const data = await res.json();
        setBooking(data.data);
      } catch (err) {
        console.error("Failed to fetch booking details:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBooking();
  }, [bookingId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-lg w-full"
      >
        <div className="text-green-500 text-6xl mb-4 flex justify-center">
          <FaCheckCircle />
        </div>

        <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="mt-2 text-gray-700">Your booking has been confirmed.</p>

        {bookingId && (
          <p className="mt-1 text-sm text-gray-500">
            Booking ID: <span className="font-mono">{bookingId}</span>
          </p>
        )}

        <p className="mt-1 text-sm text-gray-600">A confirmation email has been sent to your inbox.</p>

        <div className="mt-6 text-left">
          {loading ? (
            <p className="text-center text-gray-500">Loading booking details...</p>
          ) : booking ? (
            <div className="space-y-3 text-sm text-gray-800">
              <div>
                <span className="font-semibold">Activity:</span>{" "}
                {booking.attributes.activity?.data?.attributes?.name || "N/A"}
              </div>
              <div>
                <span className="font-semibold">Booking Date:</span>{" "}
                {new Date(booking.attributes.booking_date).toLocaleDateString()}
              </div>
              <div>
                <span className="font-semibold">Persons:</span> {booking.attributes.num_persons}
              </div>
              <div>
                <span className="font-semibold">Total Paid:</span> ₹{booking.attributes.total_amount}
              </div>
              <div>
                <span className="font-semibold">Name:</span> {booking.attributes.user_name}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {booking.attributes.user_email}
              </div>
            </div>
          ) : (
            <p className="text-red-500 text-sm">Booking not found.</p>
          )}
        </div>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
