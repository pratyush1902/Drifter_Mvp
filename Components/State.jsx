'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [states, setStates] = useState([]); 

  useEffect(() => {
    const fetchStates = async () => {
      const res = await fetch('http://localhost:1337/api/states?populate=*');
      const data = await res.json();
      setStates(data.data); // Assuming `data.data` contains the list of states
    };

    fetchStates();
  }, []);

  return (
    <div className="mt-12">
      <h1 className="text-black text-center font-bold text-4xl mt-20 mb-10">
        Browse By States
      </h1>
      <div className="carousel carousel-center max-w-xxl p-4 space-x-4 bg-white rounded-box">
        {states.map((state) => (
          <div className="carousel-item" key={state.id}>
            <div className="relative group">
              <img
                src={'https://images.unsplash.com/photo-1722742925939-d780d52f4530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} // Replace with the correct image URL path
                className="rounded-box w-72 h-96"
                alt={`${state.attributes.StateName} Image`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h1 className="text-2xl font-bold">{state.attributes.StateName}</h1>
                  <Link href={`/state/${state.id}`}>
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
    </div>
  );
};

export default HomePage;
