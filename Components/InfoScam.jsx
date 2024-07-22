 'use client'
 

import { useState } from 'react';

const tabs = [
  {
    id: 1,
    title: 'Travel Tips',
    content: [
      'Pack light and smart.',
      'Always carry a portable charger.',
      'Learn basic phrases in the local language.',
      'Keep digital copies of important documents.',
      'Stay hydrated and carry snacks.',
    ],
  },
  {
    id: 2,
    title: 'Tips to Save Money',
    content: [
      'Book flights in advance.',
      'Travel during off-peak seasons.',
      'Use public transportation.',
      'Stay in budget accommodations.',
      'Cook your own meals when possible.',
    ],
  },
  {
    id: 3,
    title: 'Scam Safety',
    content: [
      'Avoid sharing personal information.',
      'Beware of too-good-to-be-true deals.',
      'Use secure payment methods.',
      'Trust your instincts.',
      'Research common scams in your destination.',
    ],
  },
];

const TipsTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="w-full sm:w-3/4 lg:w-2/3  text-white rounded-lg shadow-lg p-6" style={{backgroundColor:'#40A578'}}>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Helpful  Tips</h2>
          <div className="w-full">
            <div className="flex justify-around border-b mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 focus:outline-none  text-white ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-500'
                      : 'text-gray-600'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="mt-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-opacity duration-300 ${
                    activeTab === tab.id ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  <ul className="list-disc list-inside">
                    {tab.content.map((point, index) => (
                      <li key={index} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsTabs;
