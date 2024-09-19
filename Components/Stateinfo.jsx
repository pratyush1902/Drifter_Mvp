'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
 

const StateDetails = ( {cityData,id}) => {
  const [states, setStates] = useState([]); 

  // // useEffect(() => {
  // //   const fetchStates = async () => {
  // //     const res = await fetch(`http://localhost:1337/api/states/${id}?populate=*`);
  // //     const data = await res.json();
  // //     setStates(data.data);  
  // //   };

  // //   fetchStates();
  // // }, []);
  // useEffect(() => {
  //   const fetchTravelSpots = async () => {

  //     try {
  //       const response = await axios.get(`http://localhost:1337/api/states/${id}?populate=*`);
  //       const destinationData = response.data.data;

  //       const destination = destinationData.find(dest => dest.id === parseInt(destinationId));
  //       if (destination && destination.attributes.travel_spots) {
  //         setTravelSpots(destination.attributes.travel_spots.data);
  //       } else {
  //         console.error('No travel spots found for this destination.');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching travel spots:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTravelSpots();
  // }, [destinationId]);
   

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/3dc89265-8b48-4ffe-b211-ab37de18d29c.png")' }}
            ></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">{cityData.StateName}</p>
            <p className="text-[#617b89] text-sm font-normal leading-normal">{ }</p>
          </div>
        </div>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          New York is a state in the Northeastern United States. New York was one of the original thirteen colonies that formed the United States. With more than 19 million
          residents in 2019, it is the fourth most populous state. To distinguish it from New York City, which is the largest city in the state, it is sometimes referred to as
          New York State.
        </p>
        <div className="flex px-4 py-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/maps/ef166608-c978-410a-8c11-41f36e96bfc4.png")' }}
          ></div>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Top tourist attractions in  {cityData.StateName}</h2>
        {states && states.map((state) => (
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

export default StateDetails;
