import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [addons, setAddons] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo() {
        try {
        const data = await fetch(FETCH_MENU_URL+resId)
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)

        const categories = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0]?.itemCards
        setAddons(categories);
        }catch(error) {
            console.log("error fetching restaurant data")
        }
    }
    return restaurant;
};
export default useRestaurant;