"use client";

// components/Contributors.js
import { useState } from "react";

const contributors = [
  "Alice Johnson",
  "Bob Smith",
  "Carol White",
  "David Brown",
  "Eve Davis",
];

const Contributors = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6 flex justify-center">
      <div
        className="w-full max-w-2xl bg-[#FF9F66] text-white rounded-lg shadow-lg p-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contributors</h2>

        {/* Contributor Names */}
        <ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-lg font-medium">
          {contributors.map((contributor, index) => (
            <li
              key={index}
              className="transition-colors duration-300 hover:text-gray-900"
            >
              {contributor}
            </li>
          ))}
        </ul>

        {/* Contribution Invite */}
        <p className="text-sm sm:text-lg text-gray-200 mt-6">
          Want to contribute? Email us at{" "}
          <a
            href="mailto:contribute@example.com"
            className="text-white underline hover:text-gray-900 transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            contribute@example.com
          </a>
        </p>

        {/* Hover Effect Message */}
        {isHovered && (
          <p className="mt-4 text-xs sm:text-sm text-gray-100">
            We appreciate your contributions!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contributors;
