import React from 'react';
import { SunIcon, CloudIcon, ArrowDownIcon, UsersIcon, CalendarIcon } from '@heroicons/react/24/outline';

const WeatherTourismCard = () => {
  return (
    <div className='flex items-center justify-center py-10 px-4'>
      <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-green-100 p-6">
        <div className="mb-6">
          <h3 className=" font-poppins text-lg leading-6 font-medium text-gray-900 flex items-center mb-2">
            <SunIcon className="h-6 w-6 text-yellow-500 mr-2" />
            Weather in July
          </h3>
          <div className="flex flex-col md:flex-row text-gray-700 gap-4">
            <div className="flex items-center">
              <SunIcon className="h-5 w-5 text-yellow-500 mr-2" />
              <p>Average Temperature: 22°C</p>
            </div>
            <div className="flex items-center">
              <CloudIcon className="h-5 w-5 text-red-500 mr-2" />
              <p>Rainfall Chances: Yes</p>
              <ArrowDownIcon className="h-5 w-5 text-blue-500 mx-2" />
              <p>Snowfall Chances: No</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-poppins text-lg leading-6 font-medium text-gray-900 flex items-center mb-2">
            <UsersIcon className="h-6 w-6 text-green-500 mr-2" />
            Tourism in July
          </h3>
          <div className="flex flex-col md:flex-row text-gray-700 gap-4">
            <div className="flex items-center">
              <UsersIcon className="h-5 w-5 text-green-500 mr-2" />
              <p>Average Tourist Number: 1,000,000</p>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
              <p>Season Type: Peak Season</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTourismCard;
