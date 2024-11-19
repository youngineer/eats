import { MENU_IMAGE_URL } from "../../utils/Constants";

const MenuItem = ({ item }) => {
  const info = item?.card?.info || item;
  const isVeg = info?.isVeg;
  const price = info?.price ? (info.price / 100).toFixed(2) : "N/A";
  const imageSource = MENU_IMAGE_URL + info.imageId;

  return (
    <div className="border-b border-gray-300 py-6 last:border-none">
  <div className="flex justify-between gap-6">
    {/* Item Info Section */}
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-4 h-4 rounded-full ${
            isVeg ? "bg-green-600" : "bg-red-500"
          }`}
        ></div>
        <span className="text-sm text-gray-600">
          {isVeg ? "Veg" : "Non-Veg"}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        {info?.name || "Unnamed Dish"}
      </h3>

      <p className="text-lg font-medium text-gray-700">₹{price}</p>

      {info?.ratings?.aggregatedRating?.rating && (
        <div className="text-sm text-green-700 flex items-center gap-1 mt-2">
          ★ {info.ratings.aggregatedRating.rating}
          <span className="text-gray-500">
            ({info.ratings.aggregatedRating.ratingCount || 0} ratings)
          </span>
        </div>
      )}

      {info?.description && (
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {info.description}
        </p>
      )}
    </div>

    <div className="flex flex-col items-center gap-3">
      {info?.imageId && (
        <div className="w-[120px] h-[100px] overflow-hidden rounded-lg shadow">
          <img
            src={imageSource}
            alt={info?.name || "Menu Image"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors">
        ADD
      </button>
    </div>
  </div>
</div>

  );
};

export default MenuItem;