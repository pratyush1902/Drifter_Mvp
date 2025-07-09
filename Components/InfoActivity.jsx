"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = ({ destinationId, spotId }) => {
  const categoryIcons = {
    'River Rafting': "https://cdn-icons-png.flaticon.com/512/10806/10806202.png",
    'Food Walk': "https://cdn.vectorstock.com/i/500p/10/07/a-refreshing-modern-logo-icon-featuring-vibrant-vector-56801007.jpg",
    'Cycle Tour': "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/bicycle.png",
    'Trek&Trails': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aW0IHLn0SBD3vvseeJ-tic2QFvAwgA0Vrw&s",
    'City Tour': "https://cdn-icons-png.freepik.com/512/3474/3474041.png"
  };

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleActivitiesCount, setVisibleActivitiesCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:1337/api/destinations?populate=activities.image,activities.spot`
        );

        const activityData = response.data.data;
        const destination = activityData.find(dest => dest.id === parseInt(destinationId));

        if (destination && destination.attributes.activities) {
          let activityList = destination.attributes.activities.data;

          // Filter by spotId if provided
          if (spotId) {
            activityList = activityList.filter(
              (activity) => activity.attributes.spot?.data?.id === parseInt(spotId)
            );
          }

          setActivities(activityList);
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
  }, [destinationId, spotId]);

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
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800">
        Great Activities to Book
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['All', 'River Rafting', 'Food Walk', 'Cycle Tour', 'Trek&Trails', 'City Tour'].map(category => (
          <button
            key={category}
            className={`px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base rounded-xl font-medium flex items-center transition-all ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category !== 'All' && categoryIcons[category] && (
              <img
                src={categoryIcons[category]}
                alt={category}
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              />
            )}
            <span>{category}</span>
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
                  alt={activity.attributes.name}
                />
                <div className="p-5">
                  <h2 className="font-poppins text-2xl font-bold mb-2 text-gray-900">{activity.attributes.name}</h2>
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
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
