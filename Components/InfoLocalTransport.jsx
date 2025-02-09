import React, { useState } from 'react';

const transportData = {
  buses: {
    description: "Buses are a convenient way to travel around the city with numerous routes covering major areas.",
    details: [
      { route: "Route 1", stops: "Stop A, Stop B, Stop C", frequency: "Every 10 mins" },
      { route: "Route 2", stops: "Stop D, Stop E, Stop F", frequency: "Every 15 mins" },
    ],
  },
  cabs: {
    description: "Cabs provide a comfortable and flexible way to travel directly to your destination.",
    details: [
      { service: "City Cabs", contact: "123-456-7890", availability: "24/7" },
      { service: "Quick Cabs", contact: "098-765-4321", availability: "24/7" },
    ],
  },
  autos: {
    description: "Autos are a quick and affordable way to navigate through the city's busy streets.",
    details: [
      { service: "Auto Service A", contact: "111-222-3333", availability: "6 AM - 10 PM" },
      { service: "Auto Service B", contact: "444-555-6666", availability: "5 AM - 11 PM" },
    ],
  },
};

const LocalTransport = () => {
  const [activeTab, setActiveTab] = useState('buses');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mt-8 text-gray-800">Local Transport</h1>
      <div className="flex justify-center items-center bg-white mt-6">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-around mb-4">
            {Object.keys(transportData).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveTab(mode)}
                className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
                  activeTab === mode ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="mb-4 text-gray-600">{transportData[activeTab].description}</p>
            <ul className="space-y-2">
              {transportData[activeTab].details.map((detail, index) => (
                <li key={index} className="p-4 rounded-lg shadow-md bg-green-200">
                  {Object.entries(detail).map(([key, value]) => (
                    <p key={key} className="text-gray-800">
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTransport ;
