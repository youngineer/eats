import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../utils/Constants";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_OBJ } from "../../utils/mockData";
  
export const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    const [filterButtonDisplay, setFilterButtonDisplay] = useState("Top Rated Restaurants");
    const [searchText, setSearchText] = useState("");

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

    const searchRestaurants = () => {
        // console.log("searchRestaurants called");
        // console.log(`searchText: ${searchText.toLowerCase()}`);
        const filteredRestaurants = RESTAURANT_LIST.filter((res) => res.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurants(filteredRestaurants);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const apiData = await fetch(API_URL);
        const jsonData = await apiData.json();

        // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    if (restaurants.length == 0){
        <Shimmer />;
        for(let i = 0; i < 10; i ++){
            console.log("Shimmer");
        }
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-text"
                    onChange={(e) => {
                        const toSearch = e.target.value;
                        setSearchText(toSearch);
                        searchRestaurants();
                    }}></input>

                    <button className="search-btn" onClick={searchRestaurants}>Search</button>
                </div>
                <button className="filter-btn" onClick={toggleFilter}>
                    {filterButtonDisplay}
                </button>
            </div>

            <div className="res-container">
                {restaurants.map((restaurant) => (
                    <Link 
                        key={restaurant?.info?.id} // Key should always be at the parent node
                        to={"/restaurant/" + restaurant?.info?.id}> 
                        {console.log(restaurant?.info?.id)}
                        <RestaurantCard
                            image={restaurant?.info?.cloudinaryImageId || "No Image"}
                            name={restaurant?.info?.name || "Unknown"}
                            cuisine={restaurant?.info?.cuisines?.join(", ") || "Cuisine not specified"}
                            avgRatingString={restaurant?.info?.avgRating || "No rating"}
                            sla={restaurant?.info?.sla || { deliveryTime: "Unknown" }} 
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
