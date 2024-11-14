import { useState, useEffect } from "react";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9141417&lng=74.8559568&restaurantId=273496&catalog_qa=undefined&submitAction=ENTER"
        );
        const jsonData = await data.json();
        setResInfo(jsonData);
    };

    console.log(resInfo?.data);
    const {id, name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
        </div>
    );
};


export default RestaurantMenu;