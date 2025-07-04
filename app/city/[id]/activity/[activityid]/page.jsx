"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import RazorpayButton from "@/components/RazorpayButton";
import { useSession } from "next-auth/react";
import { toast, Toaster } from "react-hot-toast";
export default function ActivityPage() {
  const { activityid } = useParams();
  const { data: session } = useSession();

  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [numPersons, setNumPersons] = useState(1);
  const [phone, setPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const [faqOpen, setFaqOpen] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const res = await fetch(
          `http://localhost:1337/api/activities/${activityid}?populate=*`
        );
        if (!res.ok) throw new Error("Failed to fetch activity");
        const data = await res.json();
        setActivity(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchReviews() {
      try {
        const res = await fetch(
          `http://localhost:1337/api/reviews?filters[activity][id][$eq]=${activityid}`
        );
        const data = await res.json();
        const reviews = data?.data || [];
        setReviews(reviews);

        // Calculate average rating
        const total = reviews.reduce((acc, r) => acc + r.attributes.rating, 0);
        const avg = reviews.length ? (total / reviews.length).toFixed(1) : 0;
        setAverageRating(avg);
      } catch (err) {
        console.error("Failed to fetch reviews", err);
        setReviews([]);
      }
    }

    if (activityid) {
      fetchActivity();
      fetchReviews();
    }
  }, [activityid]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText || userRating === 0) return alert("Give rating & comment");

    try {
      const res = await fetch("http://localhost:1337/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            rating: userRating,
            comment: reviewText,
            user: session?.user?.name || "Anonymous",
            activity: parseInt(activityid),
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to submit review");
         toast.success("Review submitted!");
      setUserRating(0);
      setReviewText("");

      const updated = await fetch(
        `http://localhost:1337/api/reviews?filters[activity][id][$eq]=${activityid}`
      );
      const updatedData = await updated.json();
      setReviews(updatedData.data);

      const total = updatedData.data.reduce((acc, r) => acc + r.attributes.rating, 0);
      const avg = updatedData.data.length ? (total / updatedData.data.length).toFixed(1) : 0;
      setAverageRating(avg);
    } catch (err) {
      console.error(err);
       toast.error("Error submitting review.")
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!activity) return <p className="text-center">No activity found.</p>;

  const { attributes } = activity;
  const activityName = attributes?.Name || attributes?.name || "Activity";
  const activityPrice = attributes?.price || 0;
   const inclusions = attributes?.inclusions?.length ? attributes.inclusions : ["Guide fees", "Equipment rental", "Lunch included"];
  const exclusions = attributes?.exclusions?.length ? attributes.exclusions : ["Travel to location", "Personal expenses"];
  const faqs = attributes?.faq || [];
  const locationEmbedUrl = attributes?.location || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.442732451842!2d77.3121872748427!3d32.00949877463447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904578f19c11f61%3A0x3ecbe8c5b2f947db!2sKasol%2C%20Himachal%20Pradesh%20175105!5e0!3m2!1sen!2sin!4v1720013569041!5m2!1sen!2sin";
  const images = attributes?.images?.data?.map((img) => img.attributes.url) || [
    " https://unsplash.com/photos/body-of-water-and-snow-covered-mountains-during-daytime-YFFGkE3y4F8",
    "https://source.unsplash.com/random/800x600/?camping",
    "https://source.unsplash.com/random/800x600/?adventure"
  ];

  

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-14">
      {/* Gallery */}
 <Toaster position="top-center" />

      {/* Gallery */}
       <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Activity ${idx + 1}`} className="rounded-xl object-cover w-full h-64" />
        ))}
      </motion.div>


      {/* Details */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{activityName}</h1>
        <p className="text-xl text-blue-600">Cost: ₹{activityPrice}</p>
        <p className="text-yellow-500 font-medium">⭐ Average Rating: {averageRating} / 5</p>
        <p className="text-gray-600 mt-2">{attributes?.description}</p>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 text-gray-700 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 p-6 bg-green-50 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-green-700">✅ Inclusions</h3>
          <ul className="list-disc list-inside space-y-2">
            {inclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-6 bg-red-50 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-red-700">❌ Exclusions</h3>
          <ul className="list-disc list-inside space-y-2">
            {exclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Booking Form */}
      <motion.div className="p-6 bg-white rounded-xl shadow max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-center mb-6">📅 Book This Activity</h2>
        <form className="space-y-6">
          <input type="text" value={session?.user?.name || ""} placeholder="Your Name" className="w-full p-4 border rounded-lg" readOnly />
          <input type="email" value={session?.user?.email || ""} placeholder="Your Email" className="w-full p-4 border rounded-lg" readOnly />
          <input type="tel" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-4 border rounded-lg" />
          <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} className="w-full p-4 border rounded-lg" />
          <div className="flex items-center justify-between">
            <label className="text-lg font-semibold">Number of Persons:</label>
            <div className="flex items-center space-x-4">
              <button type="button" onClick={() => setNumPersons(numPersons > 1 ? numPersons - 1 : 1)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">-</button>
              <span className="text-lg font-semibold">{numPersons}</span>
              <button type="button" onClick={() => setNumPersons(numPersons + 1)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">+</button>
            </div>
          </div>
          <RazorpayButton amount={activityPrice * numPersons} activityId={activityid} activityName={activityName} phone={phone} numPersons={numPersons} bookingDate={bookingDate} userEmail={session?.user?.email} userName={session?.user?.name} />
        </form>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-4">❓ FAQ</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="w-full text-left font-semibold bg-gray-100 px-4 py-3 rounded shadow"
              >
                {faq.question}
              </button>
              {faqOpen === index && (
                <div className="bg-white p-4 border-l-4 border-blue-500 rounded-b text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      {locationEmbedUrl && (
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">📍 Location</h3>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
            <iframe
              src={locationEmbedUrl}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Ratings & Reviews */}
      <div className="max-w-4xl mx-auto space-y-6 mt-16">
        <h3 className="text-2xl font-bold text-gray-800 text-center">🌟 Ratings & Reviews</h3>
        {session ? (
          <div className="border rounded-xl p-6 bg-white shadow">
            <h4 className="text-xl font-semibold mb-3">Leave a Review</h4>
            <form className="space-y-4" onSubmit={handleReviewSubmit}>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserRating(star)}
                    className={`text-2xl ${userRating >= star ? "text-yellow-500" : "text-gray-300"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <textarea
                rows={3}
                placeholder="Share your experience..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-3 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        ) : (
          <p className="text-center text-sm text-gray-500">Login to write a review.</p>
        )}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-500">No reviews yet.</p>
          ) : (
            reviews.map((review, i) => (
              <div key={i} className="bg-white p-4 shadow rounded-xl">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">{review.attributes.user}</p>
                  <p className="text-yellow-500">{"★".repeat(review.attributes.rating)}</p>
                </div>
                <p className="text-gray-600 text-sm">{review.attributes.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}