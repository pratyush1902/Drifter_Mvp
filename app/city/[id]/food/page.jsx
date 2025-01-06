// pages/index.js
"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [destination, setDestination] = useState(null);
  const { id } = useParams(); // Get the ID from the query parameters

  useEffect(() => {
    if (!id) return;

    // Fetch destination data from API using the ID with Axios
    axios
      .get(`http://localhost:1337/api/destinations/${id}?populate=*`) // Replace with your actual API endpoint
      .then((response) => setDestination(response.data))
      .catch((error) => console.error("Error fetching destination:", error));
  }, [id]);

  if (!destination) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
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
            {destination.data.attributes.Name}, <span className="text-indigo-600">India</span>
          </h2>
          <p className="text-gray-700 mt-2">{destination.description}</p>
        </section>

        {/* Famous Local Dishes */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Famous Local Dishes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Sushi", "Ramen", "Tempura"].map((dish) => (
              <div
                key={dish}
                className="bg-white shadow-md rounded-md p-4 text-center transform transition-transform hover:scale-105"
              >
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <h4 className="font-semibold text-lg">{dish}</h4>
                <p className="text-sm text-gray-600">
                  {dish === "Sushi"
                    ? "Traditional Japanese dish featuring vinegared rice with various toppings"
                    : dish === "Ramen"
                    ? "Noodle soup dish with various broths and toppings"
                    : "Battered and fried seafood or vegetables"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Places to Eat */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Top Places to Eat</h3>
          <div className="space-y-4">
            {[
              {
                name: "Sushi Master",
                rating: "4.8",
                reviews: "2,000+",
                description: "Premium sushi experience in the heart of Tokyo",
                price: "$$$$",
                tags: ["Sushi", "Fine Dining"],
                image: "/images/sushi-master.jpg",
              },
              {
                name: "Ramen House",
                rating: "4.6",
                reviews: "1,500+",
                description: "Authentic ramen with homemade noodles",
                price: "$$",
                tags: ["Ramen", "Casual"],
                image: "/images/ramen-house.jpg",
              },
            ].map((place) => (
              <div
                key={place.name}
                className="bg-white shadow-md rounded-md p-4 flex items-center justify-between transform transition-transform hover:scale-105"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-md mr-4 overflow-hidden">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{place.name}</h4>
                  <p className="text-sm text-gray-600">{place.description}</p>
                  <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                    <span>⭐ {place.rating} ({place.reviews} reviews)</span>
                    <span>|</span>
                    <span>{place.price}</span>
                    <span>|</span>
                    <span>{place.tags.join(", ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
