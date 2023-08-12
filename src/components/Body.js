import { useEffect, useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant?.info?.name.includes(searchText)
    )
    return filterData;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestautrant ] = useState(restaurantList);

    useEffect(() => {
        getRestaurants()
    },[restaurants])

    async function getRestaurants() {
        try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2965552&lng=77.99659609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        async function checkJsonData(jsonData){
            for (let i = 0; i< jsonData?.data?.cards?.length; i++){

                let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                if ( checkData !== undefined ) {
                    return checkData;
                }

            }
        }
        const resData = await checkJsonData(json);

        setRestautrant(resData)
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <div className="search-container">
                <input type="text" className="search-text" placeholder="Search" value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchText,restaurants) 
                    setRestautrant(data)}}>Search</button>

            </div>
            <div className='restaurant-list'>
                {
                    restaurants.map(restaurant => {
                    return <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} hello/>
                })
            }
            </div>
        </>
    )
}

export default Body;