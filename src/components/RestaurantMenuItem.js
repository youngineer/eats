import MenuItem from "./MenuItem";

const RestaurantMenuItem = ({ items }) => {
  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default RestaurantMenuItem;