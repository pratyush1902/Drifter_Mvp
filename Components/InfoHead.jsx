'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the ID from the query parameters

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    axios
      .get(`http://localhost:1337/api/destinations/${id}?populate=Destination_Gallary`)
      .then((response) => {
        setDestination(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching destination:', error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!destination || !destination.attributes?.Destination_Gallary?.data) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destination.attributes.Destination_Gallary.data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [destination]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!destination || !destination.attributes?.Destination_Gallary?.data?.length) {
    return <div className="text-center py-10">No images available</div>;
  }

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {destination.attributes.Destination_Gallary.data.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={`http://localhost:1337${image.attributes?.url || ''}`}
              alt={`Slide ${index}`}
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <h2 className="font-poppins text-white text-4xl md:text-6xl lg:text-8xl font-bold">
                {data}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
