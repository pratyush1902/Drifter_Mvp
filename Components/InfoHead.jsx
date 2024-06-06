
'use client'
import { useEffect, useState } from 'react';

const images = [
  { src: "https://images.unsplash.com/photo-1600762516498-761775b86af7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "First Image" },
  { src: "https://images.unsplash.com/photo-1611185980579-a1173a465e37?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Second Image" },
  { src: "https://images.unsplash.com/photo-1612038032672-b94a10ce7ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Third Image" },
  // Add more image objects here
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative  ">
    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image, index) => (
        <div key={index} className="w-full flex-shrink-0 relative">
          <img
            src={image.src}
            alt={`Slide ${index}`}
            className="w-full  h-[50%] object-cover    "
          />
          <div className="absolute inset-0 flex items-start justify-center pt-4">
            <h2 className="text-white text-2xl md:text-4xl">{image.text}</h2>
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
     
     
      
    `}</style>
  </div>
  );
};

export default Carousel;
