import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "../components/Shimmer"


const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant , setRestaurant] = useState(null);
    const [addons, setAddons] = useState(null);


    useEffect(() => {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo() {
        try {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2965552&lng=77.99659609999999&catalog_qa=undefined&submitAction=ENTER&restaurantId=${resId}`)
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)

        const categories = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0]?.itemCards
        setAddons(categories);
        }catch(error) {
            console.log("error fetching restaurant data")
        }
    }

    return (!restaurant) ? <Shimmer /> : (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div>
                <img src= { IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h1>{restaurant?.name}</h1>
                <h1>{restaurant?.areaName}</h1>
                <h1>{restaurant?.avgRating} stars</h1>
                <h1>{restaurant?.totalRatingsString}</h1>
            </div>
            <div>
                <h3>Recommends</h3>
                {addons && addons.map((addon) => (
                    <div key={addon.id} style={{display: "flex",alignItems: "center", justifyContent: "space-around",flexDirection: "row"}}>
                        <div>
                            <h5>{addon?.card?.info?.name}</h5>
                            <p>{addon?.card?.info?.description}</p>
                        </div>
                        <div>
                            <img src= {IMG_CDN_URL + addon?.card?.info?.imageId} style={{width:100, height:"auto", float:"right"}}/>
                            <button>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RestaurantMenu;