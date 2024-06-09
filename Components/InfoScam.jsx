// components/PotentialScams.js
import React from 'react';

const PotentialScams = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="w-3/5 bg-pink-500 p-10 rounded-xl shadow-2xl -mt-60 transform hover:-translate-y-2 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold mb-6 text-white tracking-wide">
          Potential Scams
        </h1>
        <ul className="list-disc pl-6 text-white space-y-4">
          <li className="flex items-start space-x-2">
            <span>🔍</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span>⚠️</span>
            <span>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span>🚨</span>
            <span>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span>💡</span>
            <span>Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span>🛑</span>
            <span>Mauris massa. Vestibulum lacinia arcu eget nulla.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PotentialScams;
