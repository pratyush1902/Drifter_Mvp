"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const ExploreNearby = ({ destinationId }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNearbyDestinations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/destinations/${destinationId}?populate=nearby_Destination.Images`
        );

        setNearbyPlaces(response.data.data.attributes.nearby_Destination.data);
      } catch (err) {
        setError("Failed to load nearby destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchNearbyDestinations();
  }, [destinationId]);

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        Explore Nearby
      </h1>

      {loading && <p className="text-gray-500 text-lg">Loading nearby destinations...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {nearbyPlaces.map((place) => (
            <Link key={place.id} href={`/city/${place.id}`}>
              <div className="flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105">
                <div
                  className="w-28 h-28 sm:w-40 sm:h-40 bg-cover bg-center rounded-full shadow-lg"
                  style={{
                    backgroundImage: `url(http://localhost:1337${place.attributes.Images?.data[0]?.attributes?.url})`,
                  }}
                ></div>
                <h3 className="mt-2 text-sm sm:text-lg font-semibold">
                  {place.attributes.Name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreNearby;
