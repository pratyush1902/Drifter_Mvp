'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Loading from './Loading';

export default function Hero() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    // if (!city) return;
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:1337/api/destinations');
      const destinations = response.data.data;
      const cityData = destinations.find(destination => destination.attributes.Name.toLowerCase() === city.toLowerCase());

      if (cityData) {
        // Navigate to the dynamic page for the city
        router.push(`/city/${cityData.id}`);
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
      alert('An error occurred while searching for the city.');
    }
  };

  return (
    <div className='hero'>
         {loading ? (
        <Loading />
      ) : (
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://themes.coderthemes.com/booking_v/assets/20-Dp2huxfT.jpg)' }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <p className="mb-5 text-[20px] text-white">Explore destinations, plan trips, and uncover travel insights</p>
            <h1 className="mb-5 text-5xl font-bold text-white">Explore. Dream. Discover. Travel Now</h1>

            <div className="bg-white bg-opacity-30 p-2 rounded-lg border border-grey mt-20">
              <div className="flex items-center space-x-2 relative">
                <input
                  type="text"
                  value={city}
                  onChange={handleInputChange}
                  placeholder="Where to Go?"
                  className="input input-bordered ml-4 w-[80%]"
                />
                <button
                  className="btn btn-primary m-7"
                  onClick={handleSearch}
                >
                  Let's Go
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
        )}
    </div>
  );
}
