"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const categories = [
  { label: "All", icon: "https://static-00.iconduck.com/assets.00/all-icon-512x441.png" },
  { label: "Beaches", icon: "https://static-00.iconduck.com/assets.00/beach-icon-512x441-ow4q6h9s.png" },
  { label: "Trek", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwY2WteL2O9Tbk66h1tHTgtv6OYfsG5_lFw&s" },
  { label: "Touristy", icon: "https://cdn-icons-png.flaticon.com/512/7603/7603144.png" },
  { label: "Camping", icon: "https://cdn-icons-png.flaticon.com/512/9173/9173952.png" },
  { label: "Offbeat", icon: "https://static.vecteezy.com/system/resources/previews/005/988/954/original/hidden-icon-free-vector.jpg" },
];

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
      : travelSpots.filter((place) => place.attributes.Type.toLowerCase() === selectedCategory.toLowerCase());

  const handleShowMore = () => {
    setVisiblePlacesCount((prevCount) => prevCount + 6);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Great Places to Explore</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center p-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.label}
            onClick={() => handleCategoryClick(category.label)}
            className={`flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 m-1 sm:m-2 rounded-lg transition-colors duration-300 text-xs sm:text-base ${
              selectedCategory === category.label ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
          >
            <img src={category.icon} alt={category.label} className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Travel Spots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlaces.slice(0, visiblePlacesCount).map((place) => {
          const thumbnailUrl = place.attributes.Thumbnail?.data?.attributes?.formats?.thumbnail?.url
            ? `http://localhost:1337${place.attributes.Thumbnail.data.attributes.formats.thumbnail.url}`
            : "https://via.placeholder.com/150"; // Fallback image URL

          return (
            <Link key={place.id} href={`/city/${destinationId}/spots/${place.id}`} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={thumbnailUrl} alt={place.attributes.Name} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-2xl font-bold">{place.attributes.Name}</h2>
                <h4 className="text-xs font-bold">{place.attributes.Type}</h4>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Show More Button */}
      {visiblePlacesCount < filteredPlaces.length && (
        <div className="flex justify-center mt-8">
          <button onClick={handleShowMore} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ExplorePlaces;
