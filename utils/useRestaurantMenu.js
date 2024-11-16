import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./Constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData(resId);
  }, []);

  const fetchData = async (resId) => {
    const data = await fetch(RESTAURANT_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useRestaurantMenu;
