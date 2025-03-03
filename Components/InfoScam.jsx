"use client";

import { useState } from "react";

const TipsTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Travel Tips", content: data.Traceltips || [] },
    { id: 2, title: "Tips to Save Money", content: data.MoneySave || [] },
    { id: 3, title: "Scam Safety", content: data.ScamSafe || [] },
  ];

  return (
    <div className="container mx-auto px-4 py-6 flex justify-center">
      <div className="w-full max-w-2xl bg-[#40A578] text-white rounded-lg shadow-lg p-6">
        <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-center mb-4">
          Helpful Tips
        </h2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-around border-b border-gray-300 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 text-sm sm:text-base font-semibold focus:outline-none transition ${
                activeTab === tab.id
                  ? "border-b-2 border-white text-white"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-300 ${
                activeTab === tab.id ? "opacity-100 block" : "hidden"
              }`}
            >
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {tab.content.length > 0 ? (
                  tab.content.map((point, index) => <li key={index}>{point}</li>)
                ) : (
                  <li>No tips available.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsTabs;
