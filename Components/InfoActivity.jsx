"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWater, FaUtensils, FaBicycle, FaMountain, FaCity } from 'react-icons/fa';

const HomePage = ({ destinationId }) => {
  const categoryIcons = {
    'River Rafting': <FaWater className="inline mr-2" />,
    'Food Walk': <FaUtensils className="inline mr-2" />,
    'Cycle Tour': <FaBicycle className="inline mr-2" />,
    'Trek&Trails': <FaMountain className="inline mr-2" />,
    'City Tour': <FaCity className="inline mr-2" />
  };

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleActivitiesCount, setVisibleActivitiesCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:1337/api/destinations?populate=activities.image');
        const activityData = response.data.data;
        const getActivity = activityData.find(dest => dest.id === parseInt(destinationId));
        if (getActivity && getActivity.attributes.activities) {
          setActivities(getActivity.attributes.activities.data);
        } else {
          console.error('No activities found for this destination.');
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, [destinationId]);

  const handleShowMore = () => {
    setVisibleActivitiesCount(prevCount => prevCount + 6);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredActivities = selectedCategory === 'All' 
    ? activities 
    : activities.filter(activity => activity.attributes.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className=" font-poppins font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800">Great Activities to Book</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['All', 'River Rafting', 'Food Walk', 'Cycle Tour', 'Trek&Trails', 'City Tour'].map(category => (
          <button 
            key={category} 
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg font-semibold flex items-center ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`} 
            onClick={() => handleCategoryChange(category)}
          >
            {categoryIcons[category] || null} {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredActivities.length > 0 ? (
    filteredActivities.slice(0, visibleActivitiesCount).map((activity) => (
      <Link key={activity.id} href={`/city/${destinationId}/activity/${activity.id}`}>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer hover:shadow-xl">
          <img 
            className="w-full h-56 object-cover" 
            src={activity.attributes.image?.data?.attributes?.url 
              ? `http://localhost:1337${activity.attributes.image.data.attributes.url}` 
              : 'https://via.placeholder.com/300'} 
            alt={activity.attributes.Name} 
          />
          <div className="p-5">
            <h2 className=" font-poppins text-2xl font-bold mb-2 text-gray-900">{activity.attributes.name}</h2>
            <p className="text-gray-600 text-sm">{activity.attributes.description || 'No description available'}</p>
            <p className="text-lg font-semibold text-blue-600 mt-2">₹{activity.attributes.price || 'N/A'}</p>
            <p className="text-sm text-gray-500">Duration: {activity.attributes.Duration || 'N/A'}</p>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-center text-gray-500 text-lg col-span-full">
      No activities available for this category.
    </p>
  )}
</div>

      {visibleActivitiesCount < filteredActivities.length && (
        <div className="flex justify-center mt-8">
          <button onClick={handleShowMore} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">Load More</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
