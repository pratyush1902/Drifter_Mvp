"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function BookingHistoryPage() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchBookings() {
      if (!session?.user?.email) return;
      try {
        const res = await fetch(
          `http://localhost:1337/api/bookings?filters[user_email][$eq]=${session.user.email}&filters[payment_status][$eq]=success&populate=activity`
        );
        const data = await res.json();
        setBookings(data.data || []);
      } catch (err) {
        console.error("Error fetching bookings", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [session]);

  const downloadInvoice = async (booking) => {
    try {
      const res = await fetch("/api/generate-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking.id }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("❌ Invoice error response:", errorText);
        throw new Error("Failed to download");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Drifter-Invoice-${booking.id}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download invoice failed", err);
      toast.error("Failed to download invoice");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">📅 Your Upcoming Bookings</h1>

      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500">No upcoming bookings found.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => {
            const activity = booking.attributes.activity?.data?.attributes;
            const activityName = activity?.name || "Activity";
            const bookingId = booking.id;

            return (
              <div
                key={bookingId}
                className="border rounded-xl p-6 shadow bg-white space-y-2"
              >
                <h2 className="text-xl font-semibold text-blue-600">{activityName}</h2>
                <p>Date: {new Date(booking.attributes.booking_date).toLocaleDateString()}</p>
                <p>Persons: {booking.attributes.num_persons}</p>
                <p>Amount Paid: ₹{booking.attributes.total_amount}</p>
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=Hi, I’d like to cancel my booking ID: ${bookingId} for ${activityName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Request Cancellation via WhatsApp
                </a>
               
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
