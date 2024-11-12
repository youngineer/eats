import {CDN_URL} from "../../utils/Constants";

const baseImageUrl = CDN_URL;

const RestaurantCard = (props) => {
    const imageUrl = baseImageUrl + props.image;
    // console.log(imageUrl);
    // console.log(props.name);

    return (
        <div className="res-card">
            <img alt="res-logo" src={imageUrl} />
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
            <h4>Rating: {props.avgRatingString}</h4>
            <h4>ETA: {props.sla?.deliveryTime} min</h4> 
        </div>
    );
};

export default RestaurantCard;