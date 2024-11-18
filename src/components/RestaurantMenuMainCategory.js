import RestaurantMenuSubCategory from "./RestaurantMenuSubCategory"

import { useState } from "react";

const RestaurantMenuMainCategory = ({ menuList }) => {
  const [openMainCategory, setOpenMainCategory] = useState(null);

  const toggleMainCategory = (index) => {
    setOpenMainCategory(openMainCategory === index ? null : index);
  };

  return (
    <div className="w-full px-4">
      {menuList.map((category, index) => {
        const title = category?.card?.card?.title;
        const categories =
          category?.card?.card?.categories || category?.card?.card?.itemCards;

          const itemLength = category?.card?.card?.itemCards > 0 ? `(${category?.card?.card?.itemCards.length})` : "";
          if(itemLength)
            console.log(itemLength.length);

        if (!categories || categories.length === 0) return null;

        return (
          <div key={index} className="mb-8 border-solid rounded-lg">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-1/4mx-auto"></hr>
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleMainCategory(index)}
            >
              <h2 className="text-xl font-bold">{title} {itemLength}
              </h2>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openMainCategory === index ? "rotate-180" : ""
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
                openMainCategory === index ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="p-4">
                <RestaurantMenuSubCategory categories={categories} />
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuMainCategory;


