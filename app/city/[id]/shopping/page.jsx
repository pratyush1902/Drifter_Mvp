// pages/index.js
"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Loading from "@/Components/Loading";

export default function Home() {
    const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

    const { id } = useParams(); //  
  
    useEffect(() => {
      if (!id) return;
      setLoading(true);
   
      axios
        .get(`http://localhost:1337/api/destinations/${id}?populate=shoopings.Shoppic`)  
        .then((response) => setDestination(response.data))
        .catch((error) => console.error("Error fetching destination:", error));
    }, [id]);
    setTimeout(() => {
   
      setLoading(false);
    }, 2000); 
    useEffect(() => {
        if (destination) {
          document.title = `Shop in ${destination.data.attributes.Name} | Best Travel Destinations`; // Set the title manually
          const metaDescription = document.querySelector('meta[name="description"]');
          const metaKeywords = document.querySelector('meta[name="keywords"]');
    
          if (metaDescription) metaDescription.content = `Explore the best landmarks, foods, and destinations in ${destination.data.attributes.Name}.`;
          if (metaKeywords) metaKeywords.content = `travel, backpacking, ${destination.data.attributes.Name}, landmarks, adventure`;
        }
      }, [destination]);
       if (loading) {
            return <Loading />;
          }
  
    if (!destination) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <main  className="p-6 max-w-7xl mx-auto">
      <section className="mb-8">
          <h2 className="text-4xl font-bold">
            {destination.data.attributes.Name}, <span className="text-indigo-600">India</span>
          </h2>
          <p className="text-gray-700 mt-2">{destination.description}</p>
        </section>

      {/* Best Famous Items Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Best Famous Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/malibu-rum.jpg" alt="Malibu Rum" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Malibu Rum</h3>
              <p className="text-gray-700">A Caribbean classic with tropical vibes, perfect for island cocktails.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/malibu-pier.jpg" alt="Malibu Pier" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Malibu Pier</h3>
              <p className="text-gray-700">A historic pier offering spectacular views and dining.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/malibu-beach.jpg" alt="Malibu Beach" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Malibu Beach</h3>
              <p className="text-gray-700">A gorgeous beach known for its surfing and scenic views.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Best Shopping Locations</h2>

    {destination.data.attributes.shoopings?.data.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destination.data.attributes.shoopings.data.map((shop) => {
          return (
            <div key={shop.id} className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src={shop.attributes?.Shoppic?.data?.attributes?.url
                  ? `http://localhost:1337${shop.attributes.Shoppic.data.attributes.url}`
                  : "https://via.placeholder.com/100"}
                alt={shop.attributes.Shopname}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{shop.attributes.Shopname}</h3>
                <p className="text-gray-700 text-sm mb-4">{shop.attributes.ShopBio}</p>
                <a
                  href="https://maps.google.com/?q=28.7041,77.1025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md transition"
                >
                  📍 View Location
                </a>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <p className="text-gray-700 text-center text-lg">No shopping locations available.</p>
    )}
  </div>
</section>




      </main>
    </div>
  );
}
