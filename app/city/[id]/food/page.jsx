// pages/index.js
"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/Components/Loading";
import axios from "axios";

export default function Home() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the ID from the query parameters

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    
    axios
      .get(`http://localhost:1337/api/destinations/${id}?populate=food_outlets.photo,DestinationFood.ShopitemThumbnail`)
      .then((response) => {
        setDestination(response.data.data); // Correctly accessing API response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching destination:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (destination) {
      document.title = `Eat in ${destination.attributes.Name} | Best Travel Destinations`;

      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      if (metaDescription)
        metaDescription.content = `Explore the best landmarks, foods, and destinations in ${destination.attributes.Name}.`;
      if (metaKeywords)
        metaKeywords.content = `travel, backpacking, ${destination.attributes.Name}, landmarks, adventure`;
    }
  }, [destination]);

  if (loading) {
    return <Loading />;
  }

  if (!destination) {
    return <div className="min-h-screen flex items-center justify-center">No destination data available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Food Guide</title>
      </Head>

      <main className="p-6 max-w-7xl mx-auto">
        {/* Destination Title */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold">
            {destination.attributes.Name}, <span className="text-indigo-600">India</span>
          </h2>
          <p className="text-gray-700 mt-2">{destination.attributes.description || "No description available."}</p>
        </section>

        <section className="mb-12">
  <h3 className="text-2xl font-semibold mb-4">Famous Local Dishes</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {destination.attributes.DestinationFood?.length > 0 ? (
      destination.attributes.DestinationFood.map((dish) => (
        <div
          key={dish.id}
          className="bg-white shadow-md rounded-md p-4 text-center transform transition-transform hover:scale-105"
        >
          <img
            src={
              dish.ShopitemThumbnail?.data?.attributes?.url
                ? `http://localhost:1337${dish.ShopitemThumbnail.data.attributes.url}`
                : "https://via.placeholder.com/100"
            }
            alt={dish.Shopitemname}
            className="h-32 w-full object-cover rounded mb-4"
          />
          <h4 className="font-semibold text-lg">{dish.Shopitemname}</h4>
          <p className="text-sm text-gray-600">{dish.shopitembio}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No dishes available.</p>
    )}
  </div>
</section>



        <section>
  <h3 className="text-2xl font-semibold mb-4">Top Places to Eat</h3>
  <div className="space-y-4">
    {destination.attributes.food_outlets?.data?.length > 0 ? (
      destination.attributes.food_outlets.data.map((place) => (
        <div
          key={place.id}
          className="bg-white shadow-md rounded-md p-4 flex items-center justify-between transform transition-transform hover:scale-105"
        >
          <div className="w-24 h-24 bg-gray-200 rounded-md mr-4 overflow-hidden">
            <img
              src={
                place.attributes?.photo?.data?.attributes?.url
                  ? `http://localhost:1337${place.attributes.photo.data.attributes.url}`
                  : "https://via.placeholder.com/100"
              }
              alt={place.attributes?.outletName || "Food outlet"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold">{place.attributes?.outletName || "Unknown Outlet"}</h4>
            <p className="text-sm text-gray-600">{place.attributes?.description || "No description available"}</p>
            <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
              <span>⭐ {place.attributes?.rating || "N/A"} ({place.attributes?.reviews || 0} reviews)</span>
              <span>|</span>
              <span>Avg Cost {place.attributes?.AvgCost || "Unknown price"} Rupee</span>
              <span>|</span>
              <span>{place.attributes?.tags?.join(", ") || "No tags"}</span>
            </div>
          </div>
          {/* 📍 Location Button */}
          <a
            href={`https://maps.google.com/?q=${place.attributes?.latitude || 0},${place.attributes?.longitude || 0}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition"
          >
            📍 <span>View Location</span>
          </a>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No food outlets available.</p>
    )}
  </div>
</section>

      </main>
    </div>
  );
}
