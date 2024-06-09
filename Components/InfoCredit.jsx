import React from 'react';

const contributors = [
  { name: "Alice Johnson" },
  { name: "Bob Smith" },
  { name: "Charlie Brown" },
];

const email = "contribute@blog.com";

const BlogCredits = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      {/* Blog Credits Section */}
      <div className="w-4/5 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog Contributors</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Credits</h2>
          <ul className="space-y-1">
            {contributors.map((contributor, index) => (
              <li key={index} className="bg-gray-200 p-3 rounded-lg shadow-md">
                <p className="text-gray-800"><strong>Name:</strong> {contributor.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Want to Contribute?</h2>
          <p className="mb-4 text-gray-600">
            If you would like to contribute to our blog, please send an email to:
          </p>
          <a href={`mailto:${email}`} className="text-pink-500 font-semibold">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCredits;
