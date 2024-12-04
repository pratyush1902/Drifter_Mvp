"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function TopPlace() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/destinations?populate=*&filters[Popular][$eq]=true"
        );
        setPopular(response.data.data); // Correctly sets the popular destinations
      } catch (error) {
        console.error("Error fetching popular destinations:", error);
      }
    };
    getPopular();
  }, []);

  return (
    <div className="pt-12">
      <h1 className="text-black text-center font-bold text-4xl mt-10 mb-10">
        Top Places to Go
      </h1>
      {popular.length > 0 ? (
        <div className="carousel carousel-center max-w-xxl p-4 space-x-4 bg-white rounded-box">
          {popular.map((place) => {
            const imageUrl = place.attributes.Images?.data[0]?.attributes?.url;
            return (
              <div key={place.id} className="carousel-item">
                <div className="relative group">
                  <img
                    src={
                      imageUrl
                        ? `http://localhost:1337${imageUrl}`
                        : "https://via.placeholder.com/150" // Fallback image if no image is available
                    }
                    className="rounded-box w-72 h-96 object-cover"
                    alt={place.attributes.Name || "Destination Image"}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h1 className="text-2xl font-bold">
                        {place.attributes.Name}
                      </h1>
                      <Link href={`/city/${place.id}`}>
                        <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No popular destinations available.
        </p>
      )}
    </div>
  );
}
