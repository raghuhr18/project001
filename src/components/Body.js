import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
        <div className='restaurant-list'>
        {
            restaurantList.map(restaurant => {
                return<RestaurantCard {...restaurant.info} key={restaurant?.info?.id} hello/>
        })
        }
        </div>
    )
}

export default Body;