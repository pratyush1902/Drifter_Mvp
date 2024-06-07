 'use client'



 // components/CategorySelector.js

import { useState } from 'react';

export default function CategorySelector() {
  const categories = [
    { name: 'Sports', color: 'bg-red-500' },
    { name: 'Music', color: 'bg-green-500' },
    { name: 'Technology', color: 'bg-blue-500' },
    { name: 'Art', color: 'bg-yellow-500' },
    { name: 'Science', color: 'bg-purple-500' }
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4">
        <h1 className="text-xl font-bold">Category:</h1>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => toggleCategory(category.name)}
              className={`px-4 py-2 rounded-lg text-white m-1 ${
                selectedCategories.includes(category.name) ? category.color : 'bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
