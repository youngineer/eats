import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenuSubCategory = ({ categories }) => {
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const toggleSubCategory = (index) => {
    setOpenSubCategory(openSubCategory === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {categories.map((category, index) => {
        // console.log(category)
        const title = category?.card?.info?.name;
        const items = category?.itemCards || [category?.card?.info];

        if (!items || items.length === 0) return null;

        return (
          <div key={index} className="mb-8">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div
              className="pb-4cursor-pointer flex justify-between items-center"
              onClick={() => toggleSubCategory(index)}
            >
              <h3 className="text-lg font-semibold">
                {title}{" "}
                {/* <span className="ml-2 text-gray-500 text-sm">
                  ({items.length} items)
                </span> */}
              </h3>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openSubCategory === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`transition-all duration-200 overflow-hidden ${
                openSubCategory === index ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="p-4">
                <RestaurantMenuItem items={items} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuSubCategory;
