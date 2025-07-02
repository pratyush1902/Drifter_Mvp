"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const categoryColors = {
  All: "bg-gray-500",
  Beaches: "bg-blue-400",
  Trek: "bg-green-500",
  Touristy: "bg-yellow-500",
  Camping: "bg-orange-500",
  Offbeat: "bg-purple-500",
};

const categories = [
  { label: "All", icon: "https://cdn-icons-png.flaticon.com/512/5268/5268510.png" },
  { label: "Beaches", icon: "https://cdn-icons-png.flaticon.com/512/6205/6205309.png" },
  { label: "Trek", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwY2WteL2O9Tbk66h1tHTgtv6OYfsG5_lFw&s" },
  { label: "Touristy", icon: "https://cdn-icons-png.flaticon.com/512/7603/7603144.png" },
  { label: "Camping", icon: "https://cdn-icons-png.flaticon.com/512/9173/9173952.png" },
  { label: "Offbeat", icon: "https://static.vecteezy.com/system/resources/previews/005/988/954/original/hidden-icon-free-vector.jpg" },
];

// remove duplicates if any (precaution)
const uniqueCategories = [...new Map(categories.map((cat) => [cat.label, cat])).values()];

const ExplorePlaces = ({ destinationId }) => {
  const [travelSpots, setTravelSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePlacesCount, setVisiblePlacesCount] = useState(6);

  useEffect(() => {
    const fetchTravelSpots = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:1337/api/destinations?populate=travel_spots.Thumbnail");
        const destinationData = response.data.data;
        const destination = destinationData.find((dest) => dest.id === parseInt(destinationId));
        if (destination && destination.attributes.travel_spots) {
          setTravelSpots(destination.attributes.travel_spots.data);
        } else {
          console.error("No travel spots found for this destination.");
        }
      } catch (error) {
        console.error("Error fetching travel spots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTravelSpots();
  }, [destinationId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisiblePlacesCount(6);
  };

  const filteredPlaces =
    selectedCategory === "All"
      ? travelSpots
      : travelSpots.filter((place) =>
          place.attributes.Type?.trim().toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleShowMore = () => {
    setVisiblePlacesCount((prevCount) => prevCount + 6);
  };

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 text-gray-800">
        Great Places to Explore
      </h1>

      <div className="flex flex-wrap justify-center p-4 mb-8 gap-2 sm:gap-4">
        {uniqueCategories.map((category) => (
          <button
            key={category.label}
            onClick={() => handleCategoryClick(category.label)}
            className={`flex items-center justify-center px-3 py-1 sm:px-5 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-lg font-semibold shadow-md hover:shadow-xl hover:scale-110 ${
              selectedCategory === category.label
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            <img src={category.icon} alt={category.label} className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3" />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlaces.slice(0, visiblePlacesCount).map((place) => {
          const thumbnailUrl = place.attributes.Thumbnail?.data?.attributes?.url
            ? `http://localhost:1337${place.attributes.Thumbnail.data.attributes.url}`
            : "https://via.placeholder.com/300";

          const typeTrimmed = place.attributes.Type?.trim() || "Unknown";
          const distance = place.attributes.DistanceFromCenter || "2km";

          return (
            <Link key={place.id} href={`/city/${destinationId}/spots/${place.id}`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 cursor-pointer hover:shadow-2xl">
                <img src={thumbnailUrl} alt={place.attributes.Name} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h2 className="font-poppins text-2xl font-bold mb-2 text-gray-900">{place.attributes.Name}</h2>
                  <span className={`text-white text-sm px-4 py-2 rounded-full font-medium ${categoryColors[typeTrimmed] || "bg-green-500"}`}>
                    {typeTrimmed}
                  </span>
                  <p className="text-gray-600 text-sm mt-2">{distance} from city center</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {visiblePlacesCount < filteredPlaces.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ExplorePlaces;
