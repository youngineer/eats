import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuMainCategory from "./RestaurantMenuMainCategory";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const menuCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(0) || [];

  const {
    name,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
  } = restaurantInfo;

  return (
    <div className="flex flex-col mx-auto">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className="flex items-center gap-1 bg-green-700 text-white px-1 rounded">
            ✦ {avgRatingString}
          </span>
          <span className="text-gray-600">({totalRatingsString.toLowerCase()})</span>
          <span className="text-gray-600 mx-2">•</span>
          <span className="text-gray-600">{costForTwoMessage}</span>
        </div>
        <h4 className="text-gray-600">
          • {areaName} ({sla?.slaString.toLowerCase()})
        </h4>
      </div>
      <div className="mb-8 border-solid"></div>
      <RestaurantMenuMainCategory
        menuList={menuCategories}
      />
      <div className="border-solid"></div>
    </div>
  );
};

export default RestaurantMenu;


  // return (
  //   <div className="menu-container mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
  //     {/* Restaurant Info Section */}
  //     <div className="restaurant-info text-center mb-8 border-b border-gray-200 pb-6">
  //       <h1 className="restaurant-name text-3xl font-extrabold text-gray-800 mb-4">
  //         {name}
  //       </h1>
  //       {/* <h3 className="restaurant-cuisines text-lg font-normal text-gray-600 mb-2">
  //         {cuisines.join(", ")}
  //       </h3> */}
  //       <h3 className="restaurant-cost text-lg font-normal text-gray-600">
  //         {costForTwoMessage}
  //       </h3>
  //     </div>

  //     {/* Menu Section */}
  //     <div className="menu-content space-y-10">
  //       {resMenu.slice(1).map((menu) => {
  //         const curCard = menu?.card?.card;
  //         const items = curCard?.itemCards;

  //         return (
  //           <div key={curCard?.title} className="menu-category">
  //             {/* Category Header */}
  //             <div className="category-title flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
  //               <h3 className="text-2xl font-semibold text-gray-800">
  //                 {curCard?.title}
  //               </h3>
  //               <button className="text-gray-600">
  //                 <svg
  //                   className="w-6 h-6"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   viewBox="0 0 24 24"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M19 9l-7 7-7-7"
  //                   />
  //                 </svg>
  //               </button>
  //             </div>

  //             {/* Menu Items */}
  //             <ul className="menu-items space-y-8">
  //               {items?.map((item) => {
  //                 const menuItem = item?.card?.info;
  //                 const { id, name, description, imageId, price, ratings } =
  //                   menuItem;

  //                 return (
  //                   <li
  //                     key={id}
  //                     className="menu-item flex justify-between items-start gap-4 border-b border-gray-200 pb-6 last:border-b-0"
  //                   >
  //                     <div className="item-details flex-1">
  //                       {/* Item Metadata */}
  //                       <div className="item-meta flex items-center gap-2 mb-2">
  //                         {menuItem.isVeg ? (
  //                           <span className="item-type w-4 h-4 border border-green-600">
  //                             <span className="block w-2 h-2 m-0.5 rounded-full bg-green-600"></span>
  //                           </span>
  //                         ) : (
  //                           <span className="item-type w-4 h-4 border border-red-600">
  //                             <span className="block w-2 h-2 m-0.5 rounded-full bg-red-600"></span>
  //                           </span>
  //                         )}
  //                         {/* {menuItem.isBestseller && (
  //                           <span className="item-badge text-xs text-orange-500 font-semibold">
  //                             ⭐ Bestseller
  //                           </span>
  //                         )} */}
  //                       </div>

  //                       {/* Item Name */}
  //                       <h4 className="item-name text-lg font-bold text-gray-800 mb-1">
  //                         {name}
  //                       </h4>

  //                       {/* Price and Rating */}
  //                       <div className="item-price-rating flex items-center gap-2 mb-3">
  //                         <span className="item-price text-base font-medium text-gray-800">
  //                           ₹{(price / 100).toFixed(2)}
  //                         </span>
  //                         {ratings?.aggregatedRating?.rating && (
  //                           <span className="item-rating text-xs text-gray-500">
  //                             ★ {ratings.aggregatedRating.rating}
  //                             {ratings.aggregatedRating.ratingCount &&
  //                               ` (${ratings.aggregatedRating.ratingCount})`}
  //                           </span>
  //                         )}
  //                       </div>

  //                       {/* Description */}
  //                       {description && (
  //                         <p className="item-description text-sm text-gray-500">
  //                           {description}
  //                         </p>
  //                       )}
  //                     </div>

  //                     {/* Item Actions */}
  //                     <div className="item-actions flex flex-col items-center gap-2 min-w-[120px]">
  //                       {imageId && (
  //                         <div className="item-image relative w-[118px] h-[96px]">
  //                           <img
  //                             src={MENU_IMAGE_URL + imageId}
  //                             alt={name}
  //                             className="w-full h-full object-cover rounded-lg"
  //                             onError={(e) => (e.target.style.display = "none")}
  //                           />
  //                         </div>
  //                       )}
  //                       <button className="add-button w-full px-4 py-2 text-sm font-semibold text-green-600 border border-green-600 rounded-md bg-white hover:bg-green-50">
  //                         ADD
  //                       </button>
  //                       <p className="customisable-text text-xs text-gray-500">
  //                         Customisable
  //                       </p>
  //                     </div>
  //                   </li>
  //                 );
  //               })}
  //             </ul>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

// };

// export default RestaurantMenu;
