'use client'
import Link from 'next/link';
import { useState,useEffect } from 'react';
import axios from 'axios';

const HomePage = ({ destinationId}) => {
  const categories = [
    { id: '1', name: 'River Rafting' },
    { id: '2', name: 'Food Walk' },
    { id: '3', name: 'Cycle Tour' },
    { id: '4', name: 'Mountain Climbing' },
    { id: '5', name: 'City Tour' },
  ];

   
  const [  activites, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:1337/api/destinations?populate=*');
        const  activityData = response.data.data;

        const  getActivity = activityData.find(dest => dest.id === parseInt(destinationId));
        if (getActivity && getActivity.attributes.activites) {
          setActivity(getActivity.attributes.activites.data);
        } else {
          console.error('No travel spots found for this destination.');
        }
      } catch (error) {
        console.error('Error fetching travel spots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [destinationId]);

  

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
        
        {activites.map((activity) => (
          <div key={activity.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={activity.image} alt={activity.attributes.Name} />
            <div className="p-4">
              <h2 className="text-lg font-bold">{activity.attributes.Name}</h2>
              <p className="text-gray-600">{activity.description}</p>
              <Link key={activity.id} href={`/city/${destinationId}/activity/${activity.id}`} className="mt-4 text-blue-500 underline cursor-pointer">View detail →</Link>
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
