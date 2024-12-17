'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const data = {
  images: [
    "https://cdn.usegalileo.ai/stability/4e23ac87-4b3d-4c1f-a070-e288eccfca8c.png",
    "https://cdn.usegalileo.ai/stability/021b51d1-ece5-474b-a2b7-42cc1b43226c.png",
    "https://cdn.usegalileo.ai/sdxl10/f94cc51e-f9d6-4424-b4c9-47ab19b54823.png",
    "https://cdn.usegalileo.ai/stability/42ae6b6d-8286-43fe-b211-69fa744c9e90.png",
    "https://cdn.usegalileo.ai/stability/215d297b-6f77-422d-accf-f737fabe707f.png",
  ],
  includedItems: [
    { title: "Island hopping", description: "Visit 3 islands in one day" },
    { title: "Snorkeling gear", description: "Explore the underwater world" },
    { title: "Lunch and beverages", description: "Enjoy a beachside BBQ" },
    { title: "Professional guide", description: "Learn about local marine life" },
    { title: "Age limit", description: "Minimum age is 8 years old" },
    { title: "Pregnancy", description: "Not recommended for pregnant women" },
    { title: "Food allergies", description: "Please advise of any dietary restrictions" },
    { title: "Cancellation policy", description: "Full refund for cancellations made at least 24 hours in advance" },
  ],
  contacts: [
    { icon: "MapPin", title: "Visit our office", detail: "123 Main St. San Francisco, CA 94102" },
    { icon: "PaperPlane", title: "Send us an email", detail: "info@adventureco.com" },
    { icon: "Phone", title: "Give us a call", detail: "Call us at (123) 456-7890" },
  ],
};

const IslandHopping = () => {
  const { destinationId, activityid } = useParams();
  const [activityDetails, setActivityDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/activites/${activityid}`);
        setActivityDetails(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching spot details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityDetails();
  }, [activityid]);

  const handleBooking = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:1337/api/bookings', {
        data: {
          Name: formData.Name,
          Email: formData.Email,
          activity: activityid,
        },
      });

      if (response.status === 200 || response.status === 201) {
        setIsBookingSuccess(true);
      } else {
        setIsBookingSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setIsBookingSuccess(false);
    } finally {
      setIsBookingFormOpen(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (isBookingSuccess !== null) {
    return isBookingSuccess ? (
      <div className="flex items-center justify-center min-h-screen text-green-600 text-2xl">
        Booking Successful! 🎉
      </div>
    ) : (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-2xl">
        Booking Failed. Please try again. 😞
      </div>
    );
  }

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1260px] flex-1">
        <h1 className="text-[#111518] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          {activityDetails.Name}
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(258px,1fr))] gap-3 p-4">
          {data.images.map((url, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
          ))}
        </div>
        <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-2 pt-4">
          $199 per person
        </h2>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          What's included &amp; Rules
        </h2>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          {data.includedItems.map((item, index) => (
            <div key={index} className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe1e6] py-5">
              <p className="text-[#60778a] text-sm font-normal leading-normal">{item.title}</p>
              <p className="text-[#111518] text-sm font-normal leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsBookingFormOpen(true)}
          className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md self-center my-4"
        >
          Book Now
        </button>
        {isBookingFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <form
              onSubmit={handleBooking}
              className="bg-white p-6 rounded-lg shadow-lg space-y-4"
            >
              <h2 className="text-lg font-bold">Book Your Adventure</h2>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border px-3 py-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-green-600 text-white font-bold px-6 py-3 rounded-md"
              >
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={() => setIsBookingFormOpen(false)}
                className="bg-red-600 text-white font-bold px-6 py-3 rounded-md"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default IslandHopping;
