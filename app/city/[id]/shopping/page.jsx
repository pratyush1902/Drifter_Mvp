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
        .get(`http://localhost:1337/api/destinations/${id}?populate=*`)  
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

      {/* Best Shopping Location Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Best Shopping Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/malibu-beach-shop.jpg" alt="Malibu Beach Shopping" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Malibu Beach</h3>
              <p className="text-gray-700">Explore the vibrant shops near the waves.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/farmersmarket.jpg" alt="Farmersmarket" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Farmersmarket</h3>
              <p className="text-gray-700">Shop for fresh produce and unique local crafts.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/images/lumber-yard.jpg" alt="Lumber Yard" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Lumber Yard</h3>
              <p className="text-gray-700">A chic shopping destination with boutique stores.</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
