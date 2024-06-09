import React from 'react';
import { SunIcon,  CloudIcon, ArrowDownIcon, UsersIcon, CalendarIcon } from '@heroicons/react/24/outline';

const WeatherTourismCard = () => {
  return (
    <div className='min-h-screen flex items-center justify-center mt-[-700px] '>
    <div className="w-4/5 mx-auto   shadow-lg rounded-lg overflow-hidden "style={{ backgroundColor: '#C5EBAA' }}>
      <div className="px-6 py-4">
        <div className="mb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center mb-2">
            <SunIcon className="h-6 w-6 text-yellow-500 mr-2" />
            Weather in July
          </h3>
          <div className=" flex text-gray-700 mr-10">
            <div className="flex items-center mr-10">
              <SunIcon className="h-5 w-5 text-yellow-500 mr-2" />
              <p>Average Temperature: 22°C</p>
            </div>
            <div className="flex items-center ">
              <CloudIcon className="h-5 w-5 text-red-500 mr-2" />
              <p>Rainfall Chances: yes</p>
              <ArrowDownIcon className="h-5 w-5 text-blue-500 mx-2" />
              <p> Snowfall Chances: No</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center mb-2">
            <UsersIcon className="h-6 w-6 text-green-500 mr-2" />
            Tourism in July
          </h3>
          <div className=" flex text-gray-700">
            <div className="flex items-center mr-10">
              <UsersIcon className="h-5 w-5 text-green-500 mr-2" />
              <p>Average Tourist Number: 1,000,000</p>
            </div>
            <div className="flex items-center mt-2">
              <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
              <p>Season Type: Peak Season</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WeatherTourismCard;
