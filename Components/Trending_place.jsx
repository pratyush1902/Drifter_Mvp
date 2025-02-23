 "use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const DestinationOfTheWeek = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [destinationOfWeek, setDestinationOfTheWeek] = useState(null);

  useEffect(() => {
    const fetchDestinationOfTheWeek = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/destinations?populate=*&filters[DestinatonOfTheWeek][$eq]=true"
        );
        if (response.data.data.length > 0) {
          setDestinationOfTheWeek(response.data.data[0]);  
        }
      } catch (error) {
        console.error("Error fetching destination of the week:", error);
      }
    };

    fetchDestinationOfTheWeek();
  }, []);

  const handleNextImage = () => {
    if (destinationOfWeek && destinationOfWeek.attributes.images.data.length > 0) {
      setCurrentImage(
        (prevImage) =>
          (prevImage + 1) % destinationOfWeek.attributes.images.data.length
      );
    }
  };

  const handlePrevImage = () => {
    if (destinationOfWeek && destinationOfWeek.attributes.images.data.length > 0) {
      setCurrentImage(
        (prevImage) =>
          (prevImage - 1 + destinationOfWeek.attributes.images.data.length) %
          destinationOfWeek.attributes.images.data.length
      );
    }
  };

  if (!destinationOfWeek) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  // const images = destinationOfWeek.attributes.images.data.map(
  //   (img) => `http://localhost:1337${img.attributes.url}`
  // );

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 mb-12">
        Destination of the Week
      </h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 ">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1731491895205-efb4def35547?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={destinationOfWeek.attributes.Name}
            className="w-full h-[36rem]  object-cover"
          />
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity duration-300"
          >
            &#8592;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity duration-300"
          >
            &#8594;
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-4">
            {destinationOfWeek.attributes.Name}
          </h3>
          <p className="text-gray-700 mb-6">
            {destinationOfWeek.attributes.shortInfo || "No description available."}
          </p>
          <Link
            href={`/city/${destinationOfWeek.id}`}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationOfTheWeek;
