'use client'
import { useState } from 'react';
import Image from 'next/image';

const items = [
  { id: 1, icon: '/icons/spa.svg', label: 'Spa' },
  { id: 2, icon: '/icons/automotive.svg', label: 'Automotive' },
  { id: 3, icon: '/icons/museums.svg', label: 'Museums' },
  { id: 4, icon: '/icons/salon.svg', label: 'Salon' },
  { id: 5, icon: '/icons/restaurant.svg', label: 'Restaurant' },
  // Add more items as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 3));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 3 ? prevIndex + 1 : 0));
  };

  return (
< div className='mt-[-450px]'>
<div className="heading text-4xl font-bold text-center mt-8 mb-4">
    <h1>Nearby Places to Explore</h1>
</div>


    <div className="flex items-center justify-center w-[100%]">


      <button onClick={handlePrevClick} className="p-2 bg-black text-white rounded-full mr-2">
        &#8592;
      </button>
      <div className="overflow-hidden w-full max-w-4xl">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {items.map((item) => (
            <div key={item.id} className="w-1/4 flex-shrink-0 px-4">
              <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4">
                <div className="w-16 h-16 mb-4 relative">
                  <Image src={item.icon} alt={item.label} layout="fill" objectFit="contain" />
                </div>
                <p className="text-lg font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNextClick} className="p-2 bg-black text-white rounded-full ml-2">
        &#8594;
      </button>
    </div>
    </div>
  );
};

export default Carousel;
