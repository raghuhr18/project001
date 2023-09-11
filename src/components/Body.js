import { useEffect, useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurrant";
import useOnline from "../utils/useOnline";


const Body = ({user}) => {

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
            <div className="search-container p-5 bg-orange-100 my-2 flex justify-center items-center">
                <input type="text" className="py-1 px-2 focus:bg-blue-50" placeholder="Search" value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}/>
                <button className="rounded bg-orange-300 px-5 py-1 mx-5" onClick={() => {
                    const data = filterData(searchText,allRestaurants) 
                    setFilteredRestautrant(data)}}>Search</button>

            </div>
            <div className='flex flex-wrap justify-center mx-24'>
                {
                    filteredRestaurants.map((restaurant) => {
                    return (
                    <Link to= {"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                    <RestaurantCard {...restaurant.info}  user1={user}/>
                    </Link>
                )})
            }
            </div>
        </>
    )
}

export default Body;