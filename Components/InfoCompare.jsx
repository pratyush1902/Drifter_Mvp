import React from 'react';

const WhyVisitJuly = ({ data }) => {
  const whyvisit = Array.isArray(data?.WhyVisit) ? data.WhyVisit : [];
  const whynotvisit = Array.isArray(data?.WhynotVisit) ? data.WhynotVisit : [];

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Why and Why Not to Visit in July
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "#E0F4FF" }}>
            <h2 className="font-poppins text-2xl font-semibold mb-4">Why to</h2>
            <ul className="list-disc list-inside">
              {whyvisit.length > 0 ? (
                whyvisit.map((reason, index) => <li key={index}>{reason}</li>)
              ) : (
                <li>No reasons available</li>
              )}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: "#FFC7EA" }}>
            <h2 className="font-poppins text-2xl font-semibold mb-4">Why not to</h2>
            <ul className="list-disc list-inside">
              {whynotvisit.length > 0 ? (
                whynotvisit.map((reason, index) => <li key={index}>{reason}</li>)
              ) : (
                <li>No reasons available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVisitJuly;
