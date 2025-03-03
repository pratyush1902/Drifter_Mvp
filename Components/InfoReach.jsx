import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faTrain, faBus, faPlane } from "@fortawesome/free-solid-svg-icons";

const WaysToReach = ({ data }) => {
  const [selectedWay, setSelectedWay] = useState(null);

  const ways = [
    {
      id: 1,
      method: "Car",
      icon: faCar,
      duration: data?.ReachRoadTime,
      cost: data?.ReachRoadPrice,
      description: data?.Reach_road || "No description available.",
    },
    {
      id: 2,
      method: "Train",
      icon: faTrain,
      duration:data?.ReachTrainTime,
      cost: data?.ReachTrainPice,
      description: data?.Reach_Train || "No description available.",
    },
    {
      id: 3,
      method: "Bus",
      icon: faBus,
      duration: data?.ReachBusTime,
      cost:data?.ReachBusPrice,
      description: data?.Reach_Bus || "No description available.",
    },
    {
      id: 4,
      method: "Flight",
      icon: faPlane,
      duration:data?.ReachPlaneTime,
      cost:data?.ReachPlanePrice,
      description: data?.Reach_Plane || "No description available.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
        Ways to Reach the Destination
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ways.map((way) => (
          <div
            key={way.id}
            onClick={() => setSelectedWay(way.id)}
            className={`p-6 border rounded-lg cursor-pointer transition transform hover:scale-105 text-center ${
              selectedWay === way.id ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"
            }`}
          >
            <FontAwesomeIcon icon={way.icon} className="h-12 w-12 mb-4 text-blue-500 mx-auto" />
            <h3 className="font-poppins text-xl font-semibold mb-2">{way.method}</h3>
            <p className="text-gray-700">{way.duration} Hours</p>
            <p className="text-gray-700">{way.cost} Rupees</p>
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

export default WaysToReach;
