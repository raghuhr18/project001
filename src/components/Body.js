import { useState } from "react";
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
                    return<RestaurantCard {...restaurant.info} key={restaurant?.info?.id} hello/>
                })
            }
            </div>
        </>
    )
}

export default Body;