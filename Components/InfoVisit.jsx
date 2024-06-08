'use client'
import { useState } from 'react';

const categories = [
  { label: 'Beaches', icon: 'https://static-00.iconduck.com/assets.00/beach-icon-512x441-ow4q6h9s.png' },
  { label: 'trek', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwY2WteL2O9Tbk66h1tHTgtv6OYfsG5_lFw&s' },
  { label: ' Touristy', icon: 'https://cdn-icons-png.flaticon.com/512/7603/7603144.png' },
  { label: 'Camping', icon: 'https://cdn-icons-png.flaticon.com/512/9173/9173952.png' },
  { label: 'Off beat', icon: 'https://static.vecteezy.com/system/resources/previews/005/988/954/original/hidden-icon-free-vector.jpg' },
 
 
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex flex-wrap justify-center p-4">
      {categories.map((category) => (
        <button
          key={category.label}
          onClick={() => setSelectedCategory(category.label)}
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
  );
};

export default Home;
