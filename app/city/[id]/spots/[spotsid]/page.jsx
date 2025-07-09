'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Photo from '../../../../../Components/PhotoGalary';
import Reach from '../../../../../Components/Spotreach';
import Info from '../../../../../Components/spotinfo';

const SpotDetails = () => {
  const { destinationId, spotsid } = useParams();
  const [spotDetails, setSpotDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/travel-spots/${spotsid}?populate=activity.image`
        );
        setSpotDetails(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching spot details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotDetails();
  }, [spotsid]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Photo travelSpots={spotDetails} />
      <Reach travelSpots={spotDetails} id={spotsid} />
      <Info travelSpots={spotDetails} />
      <ActivitySection
        destinationId={destinationId}
        activities={spotDetails?.activity?.data ? [spotDetails.activity.data] : []}
      />
    </div>
  );
};

const ActivitySection = ({ activities, destinationId }) => {
  if (!activities.length) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Available Activities</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {activities.map((activity) => {
          const attr = activity.attributes;
          const imageUrl = attr?.image?.data?.attributes?.url
            ? `http://localhost:1337${attr.image.data.attributes.url}`
            : null;

          return (
            <div
              key={activity.id}
              className="bg-white w-full max-w-sm rounded-2xl shadow-lg border overflow-hidden transition-transform hover:scale-105"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={attr.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  {attr.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{attr.category}</p>
                <p className="text-gray-700 mb-3">{attr.description}</p>
                <p className="text-green-700 font-bold text-lg mb-3">₹{attr.price}</p>

                <Link
                  href={`/city/${destinationId}/activity/${activity.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotDetails;
