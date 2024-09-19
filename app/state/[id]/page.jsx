'use client'
import State from '@/Components/Stateinfo'
import Loading from '@/Components/Loading';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function page({ params }) {
  const { id } = params;
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;

    const fetchCityData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:1337/api/states/${id}?populate=*`);
        const city = response.data.data;

        if (!city) {
          notFound();
          return;
        }

        
        setTimeout(() => {
          setCityData(city.attributes);
          setLoading(false);
        }, 2000);
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
    <div>
    
      <State cityData={cityData} id={id}/>
    </div>
  )
}
