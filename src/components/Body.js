import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../utils/Constants";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterOn, setFilterOn] = useState(false);
  const [filterButtonDisplay, setFilterButtonDisplay] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  if (isOnline === false) 
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-gray-600">Looks like you're offline</h1>
      </div>
    );

  const toggleFilter = () => {
    if (filterOn) {
      setRestaurants(RESTAURANT_LIST);
      setFilterButtonDisplay("Top Rated Restaurants");
    } else {
      const filteredRestaurants = RESTAURANT_LIST.filter(
        (res) => res.info.avgRating > 4.5
      );
      setRestaurants(filteredRestaurants);
      setFilterButtonDisplay("Show All Restaurants");
    }
    setFilterOn(!filterOn);
  };

  const searchRestaurants = () => {
    const filteredRestaurants = RESTAURANT_LIST.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiData = await fetch(API_URL, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        credentials: 'include', 
      });
  
      if (!apiData.ok) {
        throw new Error(`HTTP error! status: ${apiData.status}`);
      }
  
      const jsonData = await apiData.json();
      setRestaurants(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex w-full sm:w-auto gap-2">
          <input
            type="text"
            className="flex-1 sm:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
            placeholder="Search restaurants..."
            onChange={(e) => {
              const toSearch = e.target.value;
              setSearchText(toSearch);
              searchRestaurants();
            }}
          />
          <button 
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors text-lg"
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
  
        <button 
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors text-lg"
          onClick={toggleFilter}
        >
          {filterButtonDisplay}
        </button>
      </div>
  
      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 justify-center ">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
              className="bg-slate-50 block hover:transition-shadow duration-300 rounded-lg overflow-hidden transform hover:scale-105 hover:bg-slate-200"
            >
              <RestaurantCard
                image={restaurant?.info?.cloudinaryImageId || "No Image"}
                name={restaurant?.info?.name || "Unknown"}
                cuisine={
                  restaurant?.info?.cuisines?.join(", ") ||
                  "Cuisine not specified"
                }
                avgRatingString={restaurant?.info?.avgRating || "No rating"}
                sla={restaurant?.info?.sla || { deliveryTime: "Unknown" }}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;