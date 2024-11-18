
import React from "react";

const RestaurantInfo = ({ name, cuisines, costForTwoMessage }) => {
  return (
    <div className="restaurant-info text-center mb-8 border-b border-gray-200 pb-6">
      <h1 className="restaurant-name text-3xl font-extrabold text-gray-800 mb-4">
        {name}
      </h1>
      <h3 className="restaurant-cuisines text-lg font-normal text-gray-600 mb-2">
        {cuisines.join(", ")}
      </h3>
      <h3 className="restaurant-cost text-lg font-normal text-gray-600">
        {costForTwoMessage}
      </h3>
    </div>
  );
};

export default RestaurantInfo;
