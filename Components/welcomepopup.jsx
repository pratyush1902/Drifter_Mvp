"use client";

import React, { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedDrifter");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisitedDrifter", "true");
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-[#FFF8E7] p-10 rounded-3xl shadow-2xl max-w-lg w-full mx-4 text-center space-y-6 transform transition-all duration-500 scale-90 opacity-0 animate-fade-in-up"
      >
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Drifter! 👋</h2>
        <p className="text-lg text-gray-700">
          We're kicking off our journey from the breathtaking state of <span className="font-semibold text-green-700">Meghalaya</span> 🌿
        </p>
        <p className="text-gray-600">
          Thank you for stopping by! Help us grow by sharing your thoughts and experiences.
        </p>
        <p className="text-sm text-gray-500 italic">
          (Psst... got feedback? We'd love to hear it!)
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition font-medium"
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
}
