'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Info from '../../../components/Info';
import Loading from '../../../components/Loading';
import Head from 'next/head';

export default function CityPage({ params }) {
  const { id } = params;
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCityData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:1337/api/destinations/${id}?populate=*`);
        const city = response.data.data;

        if (!city) {
          notFound();  // Handle case if city data is not found
          return;
        }

        setTimeout(() => {
          setCityData(city.attributes);
          setLoading(false);
        }, 2000);  // Optional: Simulating loading delay
      } catch (error) {
        console.error('Error fetching city data:', error);
        notFound();  // Handle error case
      }
    };

    fetchCityData();
  }, [id]);

  useEffect(() => {
    if (cityData) {
      document.title = `Discover ${cityData.Name} | Best Travel Destinations`; // Set the title manually
      const metaDescription = document.querySelector('meta[name="description"]');
      const metaKeywords = document.querySelector('meta[name="keywords"]');

      if (metaDescription) metaDescription.content = `Explore the best landmarks, foods, and destinations in ${cityData.Name}.`;
      if (metaKeywords) metaKeywords.content = `travel, backpacking, ${cityData.Name}, landmarks, adventure`;
    }
  }, [cityData]);


  if (loading) {
    return <Loading />;
  }

  // Avoid rendering metadata until cityData is available
  if (!cityData) {
    return <div>City data not found</div>;  // Or any fallback UI
  }

  return (
    <>
     

      <div className="container mx-auto p-4">
        <Info cityData={cityData} id={id} />
      </div>
    </>
  );
}
