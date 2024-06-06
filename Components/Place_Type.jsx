 // components/DestinationList.js
import React from 'react';

const destinations = [
  { name: 'Trek and Trail',   image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Historical Sites',   image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Beaches',   image: 'https://images.unsplash.com/photo-1581892197913-fd2e407e698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJlYWNoZXMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Pilgrimage sites',  image: 'https://images.unsplash.com/photo-1614164974666-057a7c713ba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHZhcmFuYXNpfGVufDB8fDB8fHww' },
  { name: ' Off beat',  image: 'https://images.unsplash.com/photo-1709977915849-9b38e6b5d26a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a29yYXB1dHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Hills and Mountanes', image: 'https://images.unsplash.com/photo-1556438549-168b3e11c0a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Wild life', image: 'https://images.unsplash.com/photo-1556438549-168b3e11c0a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const DestinationList = () => {
  return (
    <div className="flex flex-col items-center  ">
      <h1 className="text-5xl font-bold  -mt-24 mb-10">Search destination by Category</h1>
      {/* <button className="bg-purple-600 text-white px-4 py-2 rounded mb-6">View all</button> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%]">
        {destinations.map((destination, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg shadow-lg p-4">
            <img src={destination.image} alt={destination.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{destination.name}</h2>
               
            </div>
            <button className="ml-auto bg-gray-200 p-2 rounded-full">
              <span className="sr-only">Go to {destination.name}</span>
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414l3.293 3.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L9 6.586l1-.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
