'use client'
import { useState } from 'react';

const categories = [
  { label: 'All', icon: 'https://static-00.iconduck.com/assets.00/all-icon-512x441.png' },
  { label: 'Beaches', icon: 'https://static-00.iconduck.com/assets.00/beach-icon-512x441-ow4q6h9s.png' },
  { label: 'Trek', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwY2WteL2O9Tbk66h1tHTgtv6OYfsG5_lFw&s' },
  { label: 'Touristy', icon: 'https://cdn-icons-png.flaticon.com/512/7603/7603144.png' },
  { label: 'Camping', icon: 'https://cdn-icons-png.flaticon.com/512/9173/9173952.png' },
  { label: 'Offbeat', icon: 'https://static.vecteezy.com/system/resources/previews/005/988/954/original/hidden-icon-free-vector.jpg' },
];

const ExplorePlaces = () => {
  const places = [
    {
      type: 'Trek',
      status: 'Closed',
      image: 'https://images.unsplash.com/photo-1717229770067-fc87ef50e4af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Portland New Art Museum',
      address: 'W Century Blvd, Los Angeles',
      phone: '+(125) 548 996',
      price: null,
      recommended: false,
    },
    {
      type: 'Touristy',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1717508722842-a114598734fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'JP Shopping Mall in California',
      address: null,
      phone: null,
      price: '$449',
      recommended: true,
    },
    {
      type: 'Camping',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1717444255955-d34c2ddfbb69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Courtyard by Marriott New York',
      address: 'W Century Blvd, Los Angeles',
      phone: '+(125) 548 996',
      price: null,
      recommended: false,
    },
    {
      type: 'Offbeat',
      status: 'Closed',
      image: 'https://images.unsplash.com/photo-1717226263667-7ce6f7f35d9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Emperor Resort & Spa',
      address: null,
      phone: null,
      price: '$350',
      recommended: true,
    },
    {
      type: 'Trek',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Gourmet Paradise',
      address: 'Sunset Blvd, Los Angeles',
      phone: '+(125) 548 997',
      price: null,
      recommended: true,
    },
    {
      type: 'Touristy',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1523980077198-60824a7b2148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhfGVufDB8fDB8fHww',
      name: 'Central Park',
      address: '5th Ave, New York',
      phone: null,
      price: null,
      recommended: false,
    },
    {
      type: 'Offbeat',
      status: 'Closed',
      image: 'https://images.unsplash.com/photo-1529733772151-bab41484710a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Cozy Corner Cafe',
      address: 'Main St, San Francisco',
      phone: '+(125) 548 998',
      price: null,
      recommended: false,
    },
    {
      type: 'Trek',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1598434192043-71111c1b3f41?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'History Museum',
      address: 'History Lane, Boston',
      phone: '+(125) 548 999',
      price: null,
      recommended: true,
    },
    {
      type: 'Camping',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGluZGlhfGVufDB8fDB8fHww',
      name: 'Broadway Theater',
      address: 'Broadway, New York',
      phone: '+(125) 548 100',
      price: null,
      recommended: true,
    },
    {
      type: 'Touristy',
      status: 'Open',
      image: 'https://images.unsplash.com/photo-1519998994457-43c1f2c8460b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8',
      name: 'City Zoo',
      address: 'Wildlife Ave, Chicago',
      phone: '+(125) 548 101',
      price: null,
      recommended: true,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePlacesCount, setVisiblePlacesCount] = useState(6);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisiblePlacesCount(6); // Reset visible places count when category changes
  };

  const filteredPlaces = selectedCategory === 'All' ? places : places.filter(place => place.type.toLowerCase() === selectedCategory.toLowerCase());

  const handleShowMore = () => {
    setVisiblePlacesCount(prevCount => prevCount + 6); // Show 6 more places
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Great places to Explore</h1>
      
      <div className="flex flex-wrap justify-center p-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.label}
            onClick={() => handleCategoryClick(category.label)}
            className={`flex items-center justify-center p-4 m-2 rounded-lg transition-colors duration-300 ${
              selectedCategory === category.label
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            <img src={category.icon} alt={category.label} className="w-6 h-6 mr-2" />
            <span>{category.label}</span>
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlaces.slice(0, visiblePlacesCount).map((place, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={place.image} alt={place.name} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{place.name}</h2>
              {place.address && <p className="text-gray-600">{place.address}</p>}
              {place.phone && <p className="text-gray-600">{place.phone}</p>}
              {place.price && <p className="text-gray-600">{place.price}</p>}
              <p className={`text-sm ${place.status === 'Open' ? 'text-green-500' : 'text-red-500'}`}>{place.status}</p>
              {place.recommended && <p className="text-blue-500 font-semibold">Recommended</p>}
            </div>
          </div>
        ))}
      </div>
      
      {visiblePlacesCount < filteredPlaces.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ExplorePlaces;
