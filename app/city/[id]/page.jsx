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
          notFound();
          return;
        }

        
        setTimeout(() => {
          setCityData(city.attributes);
          setLoading(false);
        }, 7000);
      } catch (error) {
        console.error('Error fetching city data:', error);
        notFound();
      }
    };

    fetchCityData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{cityData.name} - Travel App</title>
        <meta name="description" content={`Discover the best places to visit in ${cityData.name}.`} />
      </Head>
      <div className="container mx-auto p-4">
        <Info cityData={cityData} id={id}/>
      </div>
    </>
  );
}
