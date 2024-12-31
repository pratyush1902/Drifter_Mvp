import React, { useState, useEffect } from 'react';
import Photo from '../../Components/PhotoGalary';
import Reach from '../../Components/Spotreach';
import Info from '../../Components/spotinfo';

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay of 2 seconds (you can replace this with an actual data fetch)
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    // Cleanup the timer if the component unmounts
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
    </div>
  );
}

export default Page;
