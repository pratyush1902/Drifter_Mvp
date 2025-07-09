'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Photo from '../../Components/PhotoGalary';
import Reach from '../../Components/Spotreach';
import Info from '../../Components/spotinfo';
import HomePage from '@/Components/InfoActivity';

function Page() {
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const destinationId = params?.destinationId;
  const spotId = params?.spotId;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
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
    <div>
      <Photo />
      <Reach />
      <Info />
      <HomePage destinationId={destinationId} spotId={spotId} />
    </div>
  );
}

export default Page;
