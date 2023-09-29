import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "../components/Shimmer"
import useRestaurant from "../utils/useRestaurrant";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {
    const { resId } = useParams();


    const restaurant = useRestaurant(resId);

    
    // const { name, areaName, costForTwoMessage, cuisines ,cloudinaryImageId} =
    // restaurant?.cards[0]?.card?.card?.info;
    // const {name, areaName, costForTwoMessage, cuisines } = restaurant?.cards[0]?.card?.card?.info;
    const categories = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );


    return (!restaurant) ? <Shimmer /> : (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div>
                <img src= { IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
                <h1>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h1>
                <h1>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h1>
                <h1>{restaurant?.cards[0]?.card?.card?.info?.cuisines}</h1>
            </div>
            <div>
            {categories.map((category, index) => (

                <RestaurantCategory 
                    key={index}
                    categoryData= {category?.card?.card}
                />
            ))}
            </div>
        </div>
    )
}
export default RestaurantMenu;