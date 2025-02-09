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
      setInitialLoading(false); // Hide loading screen after 1.5 seconds
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchStateDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/states/${stateid}/?populate[destinations][populate]=*`
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
      document.title = `Discover ${stateDetails.StateName} | Best kept Places`;
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      if (metaDescription)
        metaDescription.content = `Explore the best landmarks, foods, and destinations in ${stateDetails.StateName}.`;
      if (metaKeywords)
        metaKeywords.content = `travel, backpacking, ${stateDetails.StateName}, landmarks, adventure`;
    }
  }, [stateDetails]);

  // Initial Loading Screen
  if (initialLoading || loading) {
    return  <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="loader">
      <div className="cube cube1"></div>
      <div className="cube cube2"></div>
      <div className="cube cube4"></div>
      <div className="cube cube3"></div>
    </div>
  </div>
  }

  const famousThings = [
    'Golden Gate Bridge',
    'Yosemite National Park',
    'Hollywood',
    'Silicon Valley',
    'Disneyland',
  ];

  const famousFoods = [
    'In-N-Out Burger',
    'Sourdough Bread',
    'California Rolls',
    'Fish Tacos',
    'Avocado Toast',
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta
          name="description"
          content={`Explore the best landmarks, foods, and destinations in ${
            stateDetails?.StateName || 'California'
          }.`}
        />
        <meta
          name="keywords"
          content={`travel, backpacking, ${
            stateDetails?.StateName || 'California'
          }, landmarks, adventure`}
        />
      </Head>

      {/* Header */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image 
          src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt={stateDetails?.StateName || 'State Image'} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">{stateDetails?.StateName}</h1>
          <p className="text-sm md:text-lg mt-2 max-w-2xl">{stateDetails?.Description || 'Discover the beauty and culture of this place.'}</p>
        </div>
      </div>

      <main className="px-6 py-12 md:px-16">
        {/* Famous Things Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Iconic Landmarks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {famousThings.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Foods Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Taste {stateDetails.StateName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {famousFoods.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Destinations Section */}
        <section>
  <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center md:text-left">
    Top Destinations
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {stateDetails.destinations.data.map((destination, index) => {
      const imageUrl =
        destination.attributes.Images.data[0]?.attributes?.url ||
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
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700">
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

      </main>

      <Map destinations={stateDetails.destinations.data} />
    </div>
  );
}
