 'use client'
  // components/Contributors.js

import { useState } from 'react';

const contributors = [
  'Alice Johnson',
  'Bob Smith',
  'Carol White',
  'David Brown',
  'Eve Davis',
];

const Contributors = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="w-full sm:w-3/4 lg:w-2/3 rounded-lg shadow-lg p-6" style={{backgroundColor:'#FF9F66'}}>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Contributors</h2>
          <ul className="flex flex-wrap justify-center gap-4 mb-6">
            {contributors.map((contributor, index) => (
              <li
                key={index}
                className="text-gray-700 text-lg hover:text-blue-500 transition-colors duration-300"
              >
                {contributor}
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-600 text-center">
            Want to contribute? Email us at{' '}
            <a
              href="mailto:contribute@example.com"
              className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              contribute@example.com
            </a>
          </p>
          {isHovered && (
            <p className="mt-4 text-sm text-gray-500">We appreciate your contributions!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contributors;
