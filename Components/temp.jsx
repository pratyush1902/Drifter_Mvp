// components/DestinationInfo.js
import React, { useEffect, useState } from 'react';

const DestinationInfo = ({ destination }) => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinationInfo = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/destinations?filters[name][$eq]=${destination}`);
        if (!response.ok) {
          throw new Error('Failed to fetch destination information');
        }
        const data = await response.json();
        if (data.data.length > 0) {
          setInfo(data.data[0].attributes);
        } else {
          setInfo(null);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (destination) {
      fetchDestinationInfo();
    }
  }, [destination]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!info) return <p>No information available for {destination}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{info.name}</h1>
        <p>{info.description}</p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default DestinationInfo;
