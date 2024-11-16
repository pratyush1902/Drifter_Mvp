 'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
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
        const response = await axios.get(`http://localhost:1337/api/travel-spots/${spotsid}`);
        setSpotDetails(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching spot details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotDetails();
  }, [spotsid]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Photo travelSpots={spotDetails} />
      <Reach travelSpots={spotDetails} id={spotsid} />
      <Info travelSpots={spotDetails} />
    </div>
  );
};

export default SpotDetails;