import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_IMAGE_URL } from "../../utils/Constants";
import { RESTAURANT_URL } from "../../utils/Constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        
        const data = await fetch(RESTAURANT_URL + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);

        console.log(RESTAURANT_URL + resId);
    };

    if (resInfo === null) return <Shimmer />;

    const { id, name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const resMenu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="menu-container">
            <div className="restaurant-info">
                <h1 className="restaurant-name">{name}</h1>
                <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
                <h3 className="restaurant-cost">{costForTwoMessage}</h3>
            </div>

            <div className="menu-content">
                <h2 className="menu-header">Menu</h2>
                <ul className="menu-categories">
                    {resMenu.slice(1).map((menu) => {
                        const curCard = menu?.card?.card;
                        const items = curCard?.itemCards;

                        return (
                            <li key={curCard?.title} className="menu-category">
                                <h3 className="category-title">{curCard?.title}</h3>
                                <ul className="menu-items">
                                    {items?.map((item) => {
                                        const menuItem = item?.card?.info;
                                        const { id, name, description, imageId, price, ratings } = menuItem;

                                        return (
                                            <li key={id} className="menu-item">
                                                <div className="item-details">
                                                    {/* <div className="item-meta">
                                                        <span className="item-type">🌱</span>
                                                        <span className="item-badge">Bestseller</span>
                                                    </div> */}
                                                    <h4 className="item-name">{name}</h4>
                                                    <p className="item-description">{description}</p>
                                                    <div className="item-price-rating">
                                                        <span className="item-price">
                                                            ₹{price / 100}
                                                        </span>
                                                        {ratings && (
                                                            <div className="item-rating">
                                                            {`★ ${ratings.aggregatedRating?.rating || ""} (${ratings.aggregatedRating?.ratingCount || "No ratings yet"})`}
                                                        </div>                                                        
                                                        
                                                        )};
                                                    </div>
                                                </div>
                                                <div className="item-actions">
                                                    <img
                                                        src={MENU_IMAGE_URL + imageId}
                                                        alt={name}
                                                        className="item-image"
                                                        onError={(e) => (e.target.style.display = 'none')}
                                                    />
                                                    {/* <button className="add-button">ADD</button>
                                                    <p className="customisable-text">Customisable</p> */}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
