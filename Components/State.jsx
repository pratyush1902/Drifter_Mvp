'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const res = await fetch('http://localhost:1337/api/states?populate=*');
      const data = await res.json();
      setStates(data.data);
    };

    fetchStates();
  }, []);

  return (
    <div className=" px-4 md:px-0 flex flex-col items-center">
      <h1 className=" font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 mb-12">
        Browse By States
      </h1>
      {states.length > 0 ? (
        <>
          {/* Carousel for large screens */}
          <div className="hidden md:flex carousel carousel-center max-w-xxl p-4 space-x-4 bg-white rounded-box justify-center">
            {states.map((state) => (
              <div className="carousel-item" key={state.id}>
                <div className="relative group">
                  <img
                    src={'https://images.unsplash.com/photo-1720793403671-6c8383d39c8f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    className="rounded-box w-72 h-96"
                    alt={`${state.attributes.StateName} Image`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h1 className="font-poppins text-2xl font-bold">{state.attributes.StateName}</h1>
                      <Link href={`/Stateinfo/${state.id}`}>
                        <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* List view for small screens */}
          <div className="md:hidden grid grid-cols-1 gap-6 justify-items-center w-full">
            {states.map((state) => (
              <div className="relative group rounded-lg overflow-hidden shadow-lg w-11/12 max-w-md" key={state.id}>
                <img
                  src={'https://images.unsplash.com/photo-1720793403671-6c8383d39c8f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  className="w-full h-64 object-cover"
                  alt={`${state.attributes.StateName} Image`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h1 className="font-poppins text-2xl font-bold text-white text-center">{state.attributes.StateName}</h1>
                  <Link href={`/Stateinfo/${state.id}`}>
                    <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">No states available.</p>
      )}
    </div>
  );
};

export default HomePage;
