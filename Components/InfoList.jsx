'use client'
import { useState } from 'react';
import InfoVisit from './InfoVisit'

const ExplorePlaces = () => {
  const places = [
    {
      type: 'Museum',
      status: 'Closed',
      image: 'https://images.unsplash.com/photo-1717229770067-fc87ef50e4af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Portland New Art Museum',
      address: 'W Century Blvd, Los Angeles',
      phone: '+(125) 548 996',
      price: null,
      recommended: false,
    },
    {
      type: 'Shopping',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1717508722842-a114598734fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'JP Shopping Mall in California',
      address: null,
      phone: null,
      price: '$449',
      recommended: true,
    },
    {
      type: 'Hotel',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1717444255955-d34c2ddfbb69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Courtyard by Marriott New York',
      address: 'W Century Blvd, Los Angeles',
      phone: '+(125) 548 996',
      price: null,
      recommended: false,
    },
    {
      type: 'Spa',
      status: 'Closed',
      image: 'https://images.unsplash.com/photo-1717226263667-7ce6f7f35d9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      name: 'Emperor Resort & Spa',
      address: null,
      phone: null,
      price: '$350',
      recommended: true,
    },
    {
      type: 'Restaurant',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Gourmet Paradise',
      address: 'Sunset Blvd, Los Angeles',
      phone: '+(125) 548 997',
      price: null,
      recommended: true,
    },
    {
      type: 'Park',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1523980077198-60824a7b2148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhfGVufDB8fDB8fHww',
      name: 'Central Park',
      address: '5th Ave, New York',
      phone: null,
      price: null,
      recommended: false,
    },
    {
      type: 'Cafe',
      status: 'Closed',
      image: 'https://images.unsplash.com/photo-1529733772151-bab41484710a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Cozy Corner Cafe',
      address: 'Main St, San Francisco',
      phone: '+(125) 548 998',
      price: null,
      recommended: false,
    },
    {
      type: 'Museum',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1598434192043-71111c1b3f41?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'History Museum',
      address: 'History Lane, Boston',
      phone: '+(125) 548 999',
      price: null,
      recommended: true,
    },
 
    {
      type: 'Theater',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGluZGlhfGVufDB8fDB8fHww',
      name: 'Broadway Theater',
      address: 'Broadway, New York',
      phone: '+(125) 548 100',
      price: null,
      recommended: true,
    },
    {
      type: 'Zoo',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1519998994457-43c1f2c8460b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
      name: 'City Zoo',
      address: 'Wildlife Ave, Chicago',
      phone: '+(125) 548 101',
      price: null,
      recommended: true,
    },
  ];

  const [visibleCards, setVisibleCards] = useState(8);

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 8);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4 mt-8">Great places to Explore</h1>
     <InfoVisit/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {places.slice(0, visibleCards).map((place, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-semibold px-2 py-1 rounded ${place.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {place.type}
                </span>
                <span className={`text-sm font-semibold px-2 py-1 rounded ${place.status === 'Open' ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'}`}>
                  {place.status}
                </span>
              </div>
              <h2 className="text-lg font-bold mb-2">{place.name}</h2>
              {place.address && <p className="text-sm text-gray-600">{place.address}</p>}
              {place.phone && <p className="text-sm text-gray-600">{place.phone}</p>}
              {place.price && <p className="text-sm text-green-600">Starts at {place.price} for 1 person</p>}
              {place.recommended && <span className="inline-block text-xs font-semibold text-pink-600 mt-2">Recommended</span>}
              <a href="#" className="block mt-4 text-blue-600">View detail →</a>
            </div>
          </div>
        ))}
      </div>
      {visibleCards < places.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreCards}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ExplorePlaces;
