import { MENU_URL } from "./constancts";
import { useState, useEffect } from "react";

const useResturantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(MENU_URL + resId);
      const json = await response.json();
      setResInfo(json);
    };

    fetchMenu();
  }, []);
  return resInfo;
};
export default useResturantMenu;
