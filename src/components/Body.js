import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../utils/Constants";
import { useState } from "react";
  
export const Body = () => {
    const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);
    const [filterOn, setFilterOn] = useState(false);
    const [filterButtonDisplay, setFilterButtonDisplay] = useState("Top Rated Restaurants");

    const toggleFilter = () => {
        if (filterOn) {
            setRestaurants(RESTAURANT_LIST);
            setFilterButtonDisplay("Top Rated Restaurants");
        } else {
            const filteredRestaurants = RESTAURANT_LIST.filter((res) => res.info.avgRating > 4.5);
            setRestaurants(filteredRestaurants);
            setFilterButtonDisplay("Show All Restaurants");
        }
        setFilterOn(!filterOn); 
    };

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn" onClick={toggleFilter}>
                    {filterButtonDisplay}
                </button>
            </div>
            <div className="res-container">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant?.info?.id}
                        image={restaurant?.info?.cloudinaryImageId || "No Image"}
                        name={restaurant?.info?.name || "Unknown"}
                        cuisine={restaurant?.info?.cuisines?.join(", ") || "Cuisine not specified"}
                        avgRatingString={restaurant?.info?.avgRating || "No rating"}
                        sla={restaurant?.info?.sla || { deliveryTime: "Unknown" }} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
