'use client'
import Link from 'next/link';
import { useState } from 'react';

const HomePage = ({ destinationId}) => {
  const categories = [
    { id: '1', name: 'River Rafting' },
    { id: '2', name: 'Food Walk' },
    { id: '3', name: 'Cycle Tour' },
    { id: '4', name: 'Mountain Climbing' },
    { id: '5', name: 'City Tour' },
  ];

  const activities = [
    {
      id: '1',
      title: 'River Rafting at Colorado River',
      description: 'Experience the thrill of river rafting at the Colorado River. Suitable for all skill levels.',
      image: 'https://images.unsplash.com/photo-1624646811925-9084269c46bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D',
      category: '1',
    },
    {
      id: '2',
      title: 'Gourmet Food Walk in NYC',
      description: 'Discover the best eats in NYC with a guided food walk. Includes tastings at 5 different locations.',
      image: 'https://images.unsplash.com/photo-1677297256774-5412e81427c0?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '2',
    },
    {
      id: '3',
      title: 'Cycle Tour of San Francisco',
      description: 'Explore San Francisco on a cycle tour. Visit popular landmarks and enjoy scenic routes.',
      image: 'https://images.unsplash.com/photo-1654482276870-d2c4aabc067a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '3',
    },
    {
      id: '3',
      title: 'Cycle Tour of San Francisco',
      description: 'Explore San Francisco on a cycle tour. Visit popular landmarks and enjoy scenic routes.',
      image: 'https://images.unsplash.com/photo-1654482276870-d2c4aabc067a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '3',
    },
    {
      id: '3',
      title: 'Cycle Tour of San Francisco',
      description: 'Explore San Francisco on a cycle tour. Visit popular landmarks and enjoy scenic routes.',
      image: 'https://images.unsplash.com/photo-1654482276870-d2c4aabc067a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: '3',
    },
    // Add more activities here
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredActivities = selectedCategory
    ? activities.filter((activity) => activity.category === selectedCategory)
    : activities;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Great Activities to Book</h1>
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`mx-2 px-4 py-2 rounded-lg border ${
              selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category.name}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory('')}
          className={`mx-2 px-4 py-2 rounded-lg border ${
            selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={activity.image} alt={activity.title} />
            <div className="p-4">
              <h2 className="text-lg font-bold">{activity.title}</h2>
              <p className="text-gray-600">{activity.description}</p>
              <Link key={activity.id} href={`/city/${destinationId}/spots/${activity.id}`} className="mt-4 text-blue-500 underline cursor-pointer">View detail →</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Load More</button>
      </div>
    </div>
  );
};

export default HomePage;
