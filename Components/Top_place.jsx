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
        setPopular(response.data.data);
      } catch (error) {
        console.error("Error fetching popular destinations:", error);
      }
    };
    getPopular();
  }, []);

  return (
    <div className="pt-12 px-4 md:px-0">
      <h1 className=" font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 mb-12">
        Top Places to Go
      </h1>
      {popular.length > 0 ? (
        <>
          {/* Carousel for large screens */}
          <div className="hidden md:flex carousel carousel-center max-w-xxl p-4 space-x-4 bg-white rounded-box">
            {popular.map((place) => {
              const imageUrl = place.attributes.Images?.data[0]?.attributes?.url;
              return (
                <div key={place.id} className="carousel-item relative group rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={
                      imageUrl
                        ? `http://localhost:1337${imageUrl}`
                        : "https://via.placeholder.com/150"
                    }
                    className="w-72 h-96 object-cover"
                    alt={place.attributes.Name || "Destination Image"}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h1 className="font-poppins text-2xl font-bold text-white text-center">
                      {place.attributes.Name}
                    </h1>
                    <Link href={`/city/${place.id}`}>
                      <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {/* List view for small screens */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {popular.map((place) => {
              const imageUrl = place.attributes.Images?.data[0]?.attributes?.url;
              return (
                <div key={place.id} className="relative group rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={
                      imageUrl
                        ? `http://localhost:1337${imageUrl}`
                        : "https://via.placeholder.com/150"
                    }
                    className="w-full h-64 object-cover"
                    alt={place.attributes.Name || "Destination Image"}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h1 className=" font-poppins text-2xl font-bold text-white text-center">
                      {place.attributes.Name}
                    </h1>
                    <Link href={`/city/${place.id}`}>
                      <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">No popular destinations available.</p>
      )}
    </div>
  );
}
