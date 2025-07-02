"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/destinations?populate=Images");
        const data = await res.json();
        setDestinations(data.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);
  useEffect(() => {
    document.title = "Top Destinations - Drifter";
  }, []);
  

  return (
    <>
      
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Top Destinations</h1>

          {destinations.length === 0 ? (
            <p className="text-center text-gray-500">Loading destinations...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {destinations.map((destination) => {
                const imageUrl =
                  destination.attributes.Images?.data?.[0]?.attributes?.url
                    ? `http://localhost:1337${destination.attributes.Images.data[0].attributes.url}`
                    : "/placeholder.jpg";

                return (
                  <Link key={destination.id} href={`/city/${destination.id}`} className="block">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                      <img
                        src={imageUrl}
                        alt={destination.attributes.Name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">{destination.attributes.Name}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
