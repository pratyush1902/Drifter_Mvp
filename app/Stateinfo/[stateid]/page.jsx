'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '@/Components/Map'
import { useParams } from 'next/navigation';
import Head from 'next/head';  // Import Head for metadata

export default function Home() {
  const { stateid } = useParams();
  const [stateDetails, setStateDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStateDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/states/${stateid}/?populate[destinations][populate]=*`);
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
      document.title = `Discover ${stateDetails.StateName} | Best kept Places`; // Set the title manually
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      if (metaDescription) metaDescription.content = `Explore the best landmarks, foods, and destinations in ${stateDetails.StateName}.`;
      if (metaKeywords) metaKeywords.content = `travel, backpacking, ${stateDetails.StateName}, landmarks, adventure`;
    }
  }, [stateDetails]);

  if (loading) return <p>Loading...</p>;

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
      {/* Add Head metadata for state */}
      <Head>
        <meta name="description" content={`Explore the best landmarks, foods, and destinations in ${stateDetails?.StateName || 'California'}.`} />
        <meta name="keywords" content={`travel, backpacking, ${stateDetails?.StateName || 'California'}, landmarks, adventure`} />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Discover {stateDetails.StateName}</h1>
          <p className="text-lg mt-2">Explore the Golden State's best destinations and experiences</p>
        </div>
      </header>

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
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Taste {stateDetails.StateName}</h2>
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
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Top Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateDetails.destinations.data.map((destination, index) => {
              const imageUrl = destination.attributes.Images.data[0]?.attributes?.url || '/images/default-image.jpg';
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <Image
                    src={`http://localhost:1337${imageUrl}`}
                    alt={destination.attributes.Name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-[80%]"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-700">{destination.attributes.Name}</h3>
                    <p className="text-gray-600 mt-2 mb-4">{destination.attributes.description || 'No description available.'}</p>
                    <a
                      href={`/city/${destination.id}`}
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
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
