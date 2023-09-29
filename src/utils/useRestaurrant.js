import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[])

    const getRestaurantInfo = async () => {

        const data = await fetch(FETCH_MENU_URL+resId)
        const json = await data.json();
        setRestaurant(json?.data);
    };
    return restaurant;
};
export default useRestaurant;