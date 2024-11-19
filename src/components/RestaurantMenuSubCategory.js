import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuSubCategory = ({ categories }) => {
  return (
    <div className="space-y-4">
      {categories.map((category, index) => {
        const title = category?.card?.info?.name;
        const items = category?.itemCards || [category?.card?.info];

        if (!items || items.length === 0) return null;

        return (
          <div key={index} className="mb-8">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            {/* <div className="pb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {title || "Subcategory"}
              </h3>
            </div> */}
            <div className="">
              <RestaurantMenuItem items={items} />
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default RestaurantMenuSubCategory;
