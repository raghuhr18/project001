import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const { resId } = useParams();

    const [restaurant , setRestaurant] = useState(null);
    const [menuItems , setMenuItems] = useState([])

    useEffect(() => {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2965552&lng=77.99659609999999&restaurantId=599133&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json?.data?.cards?.map(x => x.card)?.find(x => x.card )?.card?.info?.name || null);

        setRestaurant(json?.data?.cards?.map(x => x.card)?.find(x => x.card )?.card?.info?.name || null)


    
        // console.log(categories);

    }
    return(
        <div>
            <h1>Restaurant Menu</h1>
            <h1>Restaurant id:{resId} </h1>
            <h1>name:{restaurant} </h1>


        </div>
    )
}
export default RestaurantMenu;