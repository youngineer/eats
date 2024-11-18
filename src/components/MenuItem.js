import { MENU_IMAGE_URL } from "../../utils/Constants";

const MenuItem = ({ item }) => {
  const info = item?.card?.info || item;
  const isVeg = info?.isVeg;
  const price = info?.price ? (info.price / 100).toFixed(2) : "N/A";
  const imageSource = MENU_IMAGE_URL + info.imageId;

  return (
    <div className="border-b border-gray-200 py-6 last:border-none">
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`relative w-4 h-4 border ${
                isVeg ? "border-green-600 bg-green-600" : "border-red-500 bg-red-500"
              }`}
            ></div>
          </div>

          <h3 className="text-lg font-medium text-gray-800 mb-2">
            {info?.name || "Unnamed Item"}
          </h3>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-medium">₹{price}</span>
            {info?.ratings?.aggregatedRating?.rating && (
              <span className="text-sm text-green-700">
                ★ {info.ratings.aggregatedRating.rating} (
                {info.ratings.aggregatedRating.ratingCount || 0})
              </span>
            )}
          </div>

          {info?.description && (
            <p className="text-sm leading-relaxed text-gray-500 pr-4">
              {info.description}
            </p>
          )}
        </div>

        <div className="flex flex-col items-center gap-2 min-w-[150px]">
          {info?.imageId && (
            <div className="relative w-[118px] h-[96px] mb-1">
              <img
                src={imageSource}
                alt={info?.name || "Menu Image"}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          <button className="w-24 px-4 py-2 text-sm font-medium text-green-500 border border-green-500 rounded-md bg-white hover:bg-green-50 transition-colors">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;