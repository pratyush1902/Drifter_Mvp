'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '@/Components/Map';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Loading from '@/Components/Loading';  // Import your Loading component

export default function Home() {
  const { stateid } = useParams();
  const [stateDetails, setStateDetails] = useState(null);
 
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);

  // Simulate a brief loading screen before everything
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchStateDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/states/${stateid}/?populate[destinations][populate]=*&populate[StateThumbnail]=*`
        );
        setStateDetails(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching state details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStateDetails();
  }, [stateid]);
 

  useEffect(() => {
    if (stateDetails) {
      document.title = `Discover ${stateDetails.StateName} | Best Kept Places`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      if (metaDescription)
        metaDescription.content = `Explore the best landmarks, foods, and destinations in ${stateDetails.StateName}.`;
      if (metaKeywords)
        metaKeywords.content = `travel, backpacking, ${stateDetails.StateName}, landmarks, adventure`;
    }
  }, [stateDetails]);
  const thumbnailUrl =
  stateDetails?.StateThumbnail?.data?.attributes?.url
    ? `http://localhost:1337${stateDetails.StateThumbnail.data.attributes.url}`
    : '/images/default-image.jpg'; // Fallback if no image


  // Initial Loading Screen
  if (initialLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="loader">
          <div className="cube cube1"></div>
          <div className="cube cube2"></div>
          <div className="cube cube4"></div>
          <div className="cube cube3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta
          name="description"
          content={`Explore the best landmarks, foods, and destinations in ${
            stateDetails?.StateName || 'Drifter'
          }.`}
        />
        <meta
          name="keywords"
          content={`travel, backpacking, ${stateDetails?.StateName || 'Drifter'}, landmarks, adventure`}
        />
      </Head>

      {/* Header Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src={thumbnailUrl}
          alt={stateDetails?.StateName || 'State Image'}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="font-poppins text-3xl md:text-5xl font-bold">{stateDetails?.StateName}</h1>
          <p className="text-sm md:text-lg mt-2 max-w-2xl">{stateDetails?.StateBio || 'Discover the beauty and culture of this place.'}</p>
        </div>
      </div>

      <main className="px-6 py-12 md:px-16">
        {/* Iconic Landmarks Section */}
        {stateDetails?.StateLandmark?.length > 0 && (
          <section className="mb-16">
            <h2 className="font-poppins text-3xl font-bold text-blue-600 mb-6">Iconic Landmarks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stateDetails.StateLandmark.map((landmark, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <p className="text-lg font-medium">{landmark}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous Foods Section */}
        {stateDetails?.StateFood?.length > 0 && (
          <section className="mb-16">
            <h2 className="font-poppins text-3xl font-bold text-blue-600 mb-6">
              Taste {stateDetails.StateName}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stateDetails.StateFood.map((food, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <p className="text-lg font-medium">{food}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Top Destinations Section */}
        {stateDetails?.destinations?.data?.length > 0 && (
          <section>
            <h2 className="font-poppins text-3xl font-bold text-blue-600 mb-6 text-center md:text-left">
              Top Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stateDetails.destinations.data.map((destination, index) => {
                const imageUrl =
                  destination.attributes.Images?.data?.[0]?.attributes?.url ||
                  '/images/default-image.jpg';
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col"
                  >
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                      <Image
                        src={`http://localhost:1337${imageUrl}`}
                        alt={destination.attributes.Name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-poppins text-lg sm:text-xl font-semibold text-blue-700">
                        {destination.attributes.Name}
                      </h3>
                      <p className="text-gray-600 mt-2 mb-4 flex-grow">
                        {destination.attributes.description || 'No description available.'}
                      </p>
                      <a
                        href={`/city/${destination.id}`}
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-center"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Map destinations={stateDetails?.destinations?.data || []} />
    </div>
  );
}
