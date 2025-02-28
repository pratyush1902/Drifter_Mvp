import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTrain, faBus, faPlane } from '@fortawesome/free-solid-svg-icons';

const ways = [
  {
    id: 1,
    method: 'Car',
    icon: faCar,
    duration: '4 hours',
    cost: '$50',
    description: 'A scenic drive through the countryside.',
  },
  {
    id: 2,
    method: 'Train',
    icon: faTrain,
    duration: '3 hours',
    cost: '$30',
    description: 'Comfortable and fast.',
  },
  {
    id: 3,
    method: 'Bus',
    icon: faBus,
    duration: '5 hours',
    cost: '$20',
    description: 'Economical and frequent.',
  },
  {
    id: 4,
    method: 'Flight',
    icon: faPlane,
    duration: '1 hour',
    cost: '$100',
    description: 'Fastest way to reach your destination.',
  },
];

const WaysToReach = () => {
  const [selectedWay, setSelectedWay] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Ways to Reach the Destination</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ways.map((way) => (
          <div
            key={way.id}
            onClick={() => setSelectedWay(way.id)}
            className={`p-6 border rounded-lg cursor-pointer transition transform hover:scale-105 text-center ${
              selectedWay === way.id ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
            }`}
          >
            <FontAwesomeIcon icon={way.icon} className="h-12 w-12 mb-4 text-blue-500 mx-auto" />
            <h3 className="font-poppins text-xl font-semibold mb-2">{way.method}</h3>
            <p className="text-gray-700">{way.duration}</p>
            <p className="text-gray-700">{way.cost}</p>
          </div>
        ))}
      </div>
      {selectedWay && (
        <div className="mt-6 p-6 border rounded-lg bg-green-100">
          <h3 className="font-poppins text-xl font-semibold mb-2">
            {ways.find((way) => way.id === selectedWay).method}
          </h3>
          <p>{ways.find((way) => way.id === selectedWay).description}</p>
        </div>
      )}
    </div>
  );
};

export default WaysToReach  ;
