import { CDN_URL } from "../../utils/Constants";

const baseImageUrl = CDN_URL;

const RestaurantCard = (props) => {
  const imageUrl = baseImageUrl + props.image;
  // console.log(imageUrl);
  // console.log(props.name);

  return (
    <div className="p-4 border-spacing-4 bg-black text-center">
      <img alt="res-logo" src={imageUrl} className="h
      w-60 h-40 rounded-lg"/>
      <h3 className="text-xl font-bold">{props.name}</h3>
      <h4 className="text-gray-700 font-semibold">{props.cuisine}</h4>
      <h4 className="text-gray-700 font-semibold">Rating: {props.avgRatingString}</h4>
      <h4 className="text-gray-700 font-semibold">ETA: {props.sla?.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
