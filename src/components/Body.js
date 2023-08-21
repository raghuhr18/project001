import { useEffect, useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
    return filterData;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestautrant ] = useState([]);

    useEffect(() => {
        getRestaurants()
    },[])

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
        
        setAllRestaurants(resData);
        setFilteredRestautrant(resData);

        } catch(error) {
            console.log(error);
        }
         
    }

    if(!allRestaurants) return null;
    // if( filteredRestaurants.length === 0) 
    // return(<h1>No Restaurant Found</h1>)
    return (allRestaurants.length === 0)? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-text" placeholder="Search" value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchText,allRestaurants) 
                    setFilteredRestautrant(data)}}>Search</button>

            </div>
            <div className='restaurant-list'>
                {
                    filteredRestaurants.map((restaurant) => {
                    return (
                    <Link to= {"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                    <RestaurantCard {...restaurant.info}  />
                    </Link>
                )})
            }
            </div>
        </>
    )
}

export default Body;