import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";


const RestaurantMenu = () => {
    const { resId } = useParams();

    const [restaurant , setRestaurant] = useState(null);


    useEffect(() => {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2965552&lng=77.99659609999999&restaurantId=408570&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)

        const categories = json?.data?.cards?.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        console.log(categories)
        // console.log(json?.data?.cards?.map(x => x.card)?.find(x => x.card )?.card?.info?.name || null);
        // json?.data?.cards?.map(x => x.card)?.find(x => x.card )?.card?.info
        // const restaurantData = json?.data? .name



        // const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(x => x.card?.card)?.filter(x => x['@type'] )
        // console.log(menuItemsData)


    
        // console.log(categories);

    }
    return(
        <div>
            <img src= { IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h1>{restaurant?.name}</h1>
            <h1>{restaurant?.areaName}</h1>
            <h1>{restaurant?.avgRating} stars</h1>
            <h1>{restaurant?.totalRatingsString}</h1>
        </div>
    )
}
export default RestaurantMenu;