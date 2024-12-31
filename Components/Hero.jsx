'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Loading from './Loading';

export default function Hero() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  // Fetch all destinations when the component mounts
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/destinations');
        setDestinations(response.data.data); // Store all destinations
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input);
    setShowSuggestions(true);

    // Filter destinations based on input
    if (input.trim() === '') {
      setFilteredDestinations([]);
    } else {
      const filtered = destinations.filter(destination =>
        destination.attributes.Name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  };

  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity);
    setShowSuggestions(false);
  };

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setShowSuggestions(false);

    try {
      const cityData = destinations.find(destination => destination.attributes.Name.toLowerCase() === city.toLowerCase());
      if (cityData) {
        router.push(`/city/${cityData.id}`); // Navigate to city page
      } else {
        setLoading(false);
        alert('City not found');
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert('An error occurred while searching for the city.');
    }
  };

  return (
    <div className="hero">
      {loading ? (
        <Loading />
      ) : (
        <div className="hero min-h-screen" style={{ backgroundImage:  'url(/hero.jpg)' }}>
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <p className="mb-5 text-[20px] text-white">Explore destinations, plan trips, and uncover travel insights</p>
              <h1 className="mb-5 text-5xl font-bold text-white">Explore. Dream. Discover. Travel Now</h1>

              <div className="bg-white bg-opacity-30 p-2 rounded-lg border border-grey mt-20 relative text-black">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="Where to Go?"
                    className="input input-bordered ml-4 w-[80%]"
                  />
                  <button className="btn btn-primary m-7" onClick={handleSearch}>
                    Let's Go
                  </button>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && (
                  <div className="absolute left-4 top-[110%] w-[80%] bg-white shadow-lg rounded-md max-h-60 overflow-y-auto text-black">
                    {filteredDestinations.length > 0 ? (
                      filteredDestinations.map((destination) => (
                        <div
                          key={destination.id}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectCity(destination.attributes.Name)}
                        >
                          {destination.attributes.Name}
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-black-500">No destinations available</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
