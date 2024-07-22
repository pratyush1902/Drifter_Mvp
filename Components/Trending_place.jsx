 'use client';
import React, { useState, useEffect } from 'react';



const destination = {
  name: 'Santorini, Greece',
  images :[
  'https://static2.tripoto.com/media/filter/nl/img/1706196/TripDocument/1619425858_cq5dam_web_480_480.jpeg',
  'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/rohtas/rohtasgarh_fort__rohtas/historical_rohtas_category_a_rohtasgarh_fort_pic_1.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
  'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_b/rohtas/manjhar_kund___dhuan_kund_sasaram/nature_rohtas_category_b_manjhar_kund__pic_01.jpg/jcr:content/renditions/cq5dam.web.2000.765.jpeg',
  'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/rohtas/sher_shah_suri_tomb__sasaram/sher-sha-shuri-tomb.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
],
  shortInfo: 'Santorini is one of the most famous islands in the world. Known for its stunning sunsets, white-washed buildings, and clear blue waters, it is a top destination for travelers seeking beauty and relaxation.',
  moreInfoLink: '/destinations/santorini',
};

const DestinationOfTheWeek = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % destination.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + destination.images.length) % destination.images.length);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mt-8 mb-12">Destination of the Week</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4">
        <div className="relative">
          <img
            src={destination.images[currentImage]}
            alt={destination.name}
            className="w-full h-64 object-cover"
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
          <h3 className="text-3xl font-bold mb-4">{destination.name}</h3>
          <p className="text-gray-700 mb-6">{destination.shortInfo}</p>
          <a
            href={destination.moreInfoLink}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationOfTheWeek;