 'use client';
import React, { useState, useEffect } from 'react';

const images = [
  'https://static2.tripoto.com/media/filter/nl/img/1706196/TripDocument/1619425858_cq5dam_web_480_480.jpeg',
  'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/rohtas/rohtasgarh_fort__rohtas/historical_rohtas_category_a_rohtasgarh_fort_pic_1.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
  'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_b/rohtas/manjhar_kund___dhuan_kund_sasaram/nature_rohtas_category_b_manjhar_kund__pic_01.jpg/jcr:content/renditions/cq5dam.web.2000.765.jpeg',
  'https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/rohtas/sher_shah_suri_tomb__sasaram/sher-sha-shuri-tomb.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg',
];

function Trending_place() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Trending pt-12">
      <h1 className="text-black text-center font-bold text-5xl mt-10 mb-10">
        Destination of the Week
      </h1>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left half container */}
        <div className="relative w-full md:w-1/2  h-[70%]   ">
          <div className="overflow-hidden relative h-full ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform transform ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
          >
            Next
          </button>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right half with text and paragraph with pink background */}
        <div className="w-full md:w-1/2 h-[70%] bg-pink-500 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <h1 className="text-3xl font-bold">Rohtas (Bihar)</h1>
            <p className="mt-4">
              This is the right container with a pink background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending_place;
