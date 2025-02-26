"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import RazorpayButton from "@/components/RazorpayButton";
import { useSession } from 'next-auth/react';

export default function ActivityPage() {
  const { activityid } = useParams();
  const { data: session } = useSession();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPersons, setNumPersons] = useState(1);
  const [phone, setPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');  // ✅ State for booking date

  useEffect(() => {
    async function fetchActivity() {
      try {
        const res = await fetch(`http://localhost:1337/api/activities/${activityid}?populate=*`);
        console.log("Activity ID:", activityid);

        if (!res.ok) {
          throw new Error('Failed to fetch activity');
        }
        const data = await res.json();
        setActivity(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (activityid) {
      fetchActivity();
    }
  }, [activityid]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!activity) return <p className="text-center">No activity found.</p>;

  const activityName = activity.attributes?.Name || activity.attributes?.name || "Activity";
  const activityPrice = activity.attributes?.price || 0;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Photo Gallery */}
      <motion.div 
        className="grid grid-cols-3 gap-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {activity.attributes.images?.data?.map((image, index) => (
          <img 
            key={index} 
            src={image.attributes.url} 
            alt={`Activity Image ${index + 1}`} 
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </motion.div>

      {/* Activity Details */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">{activityName}</h1>
        <p className="text-2xl text-blue-600 font-semibold mt-2">Cost: ₹{activityPrice}</p>
      </motion.div>

      {/* Activity Information */}
      <motion.p 
        className="text-lg text-gray-600 mt-4 text-center px-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        {activity.attributes?.description || "Experience the adventure of a lifetime with this thrilling activity."}
      </motion.p>

      {/* Booking Form */}
      <motion.div 
        className="p-8 bg-white shadow-xl rounded-xl max-w-2xl mx-auto" 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Book This Activity</h2>
        <form className="space-y-6">
          <input 
            type="text" 
            value={session?.user?.name || ''}
            placeholder="Your Name" 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <input 
            type="email" 
            value={session?.user?.email || ''}
            placeholder="Your Email" 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <input 
            type="tel" 
            placeholder="Your Phone Number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* ✅ Booking Date Input */}
          <input 
            type="date" 
            value={bookingDate}  // ✅ Bind to state
            onChange={(e) => setBookingDate(e.target.value)}  // ✅ Update state
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-between">
            <label className="text-lg font-semibold">Number of Persons:</label>
            <div className="flex items-center space-x-4">
              <button 
                type="button" 
                onClick={() => setNumPersons(numPersons > 1 ? numPersons - 1 : 1)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg font-semibold">{numPersons}</span>
              <button 
                type="button" 
                onClick={() => setNumPersons(numPersons + 1)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <RazorpayButton
            amount={activityPrice * numPersons} 
            activityId={activityid}
            activityName={activityName}
            phone={phone}
            numPersons={numPersons}
            bookingDate={bookingDate}  // ✅ Pass booking date to RazorpayButton
            userEmail={session?.user?.email}
            userName={session?.user?.name}
          />
        </form>
      </motion.div>
    </div>
  );
}
