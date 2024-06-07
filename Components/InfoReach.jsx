 "use client"

import { useState } from 'react';

export default function HowToReach() {
  const [expanded, setExpanded] = useState({
    train: false,
    car: false,
    bus: false,
    plane: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">How to Reach</h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-4/5 bg-white shadow-lg rounded-lg p-6">
          <div>
            <h2 className="text-xl font-semibold">By Train</h2>
            <p className="mt-2 text-gray-600">Take a scenic train journey to reach your destination.</p>
            {expanded.train && (
              <p className="mt-2 text-gray-600">
                Trains are a convenient and eco-friendly way to travel. Enjoy the views and avoid traffic.
              </p>
            )}
            <button
              onClick={() => toggleExpand('train')}
              className="mt-2 text-blue-500 hover:underline"
            >
              {expanded.train ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
        <div className="w-4/5 bg-white shadow-lg rounded-lg p-6">
          <div>
            <h2 className="text-xl font-semibold">By Car</h2>
            <p className="mt-2 text-gray-600">Drive at your own pace and enjoy the road trip.</p>
            {expanded.car && (
              <p className="mt-2 text-gray-600">
                Traveling by car offers flexibility and control over your schedule. Stop and explore along the way.
              </p>
            )}
            <button
              onClick={() => toggleExpand('car')}
              className="mt-2 text-blue-500 hover:underline"
            >
              {expanded.car ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
        <div className="w-4/5 bg-white shadow-lg rounded-lg p-6">
          <div>
            <h2 className="text-xl font-semibold">By Bus</h2>
            <p className="mt-2 text-gray-600">Take a comfortable bus ride to your destination.</p>
            {expanded.bus && (
              <p className="mt-2 text-gray-600">
                Buses are an affordable and efficient way to travel. They offer various routes and schedules.
              </p>
            )}
            <button
              onClick={() => toggleExpand('bus')}
              className="mt-2 text-blue-500 hover:underline"
            >
              {expanded.bus ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
        <div className="w-4/5 bg-white shadow-lg rounded-lg p-6">
          <div>
            <h2 className="text-xl font-semibold">By Plane</h2>
            <p className="mt-2 text-gray-600">Fly to your destination quickly and conveniently.</p>
            {expanded.plane && (
              <p className="mt-2 text-gray-600">
                Flying is the fastest way to reach your destination. Enjoy in-flight amenities and arrive in no time.
              </p>
            )}
            <button
              onClick={() => toggleExpand('plane')}
              className="mt-2 text-blue-500 hover:underline"
            >
              {expanded.plane ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
