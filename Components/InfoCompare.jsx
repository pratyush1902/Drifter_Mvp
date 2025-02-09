import React from 'react';

const WhyVisitJuly = () => {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Why and Why Not to Visit in July</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "#E0F4FF" }}>
            <h2 className="text-2xl font-semibold mb-4">Why to</h2>
            <ul className="list-disc list-inside">
              <li>Enjoy the summer festivals.</li>
              <li>Beautiful beach weather.</li>
              <li>Longer daylight hours.</li>
              <li>Perfect time for outdoor activities.</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "#FFC7EA" }}>
            <h2 className="text-2xl font-semibold mb-4">Why not to</h2>
            <ul className="list-disc list-inside">
              <li>Higher travel costs.</li>
              <li>Crowded tourist spots.</li>
              <li>Possible heatwaves.</li>
              <li>Limited availability of accommodations.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVisitJuly;
