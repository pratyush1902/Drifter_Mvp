'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import inline from '../public/inline.svg';

const destinations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix','Shimla']; // Example data

export default function Hero() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    if (searchQuery) {
      const filtered = destinations.filter((item) =>
        item.toLowerCase().includes(searchQuery)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelect = (item) => {
    setQuery(item);
    setFilteredData([]);
    if (isClient) {
      router.push(`/destination/${item}`);
    }
  };

  return (
    <div className='hero'>
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
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Where to Go?"
                  className="input input-bordered ml-4 w-[80%]"
                />
                <button
                  className="btn btn-primary m-7"
                  onClick={() => {
                    if (isClient) {
                      router.push(`/search?query=${query}`);
                    }
                  }}
                >
                  Let's Go
                </button>
                {query && filteredData.length === 0 && (
                  <div className="absolute z-10 w-[80%] bg-white border border-gray-300 rounded mt-1 left-4">
                    <div className="px-4 py-2 text-gray-700">Not Found</div>
                  </div>
                )}
                {filteredData.length > 0 && (
                  <ul className="absolute z-10 w-[60%] bg-blue  border border-blue-300 rounded mt-1 left-4">
                    {filteredData.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-200"
                        onClick={() => handleSelect(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}