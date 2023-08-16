import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const resId = useParams();
    const { id } = resId;
    console.log(id);
     
    return(
        <div>
            <h1>Restaurant Menu</h1>
            <h1>Restaurant id:{id} </h1>

        </div>
    )
}
export default RestaurantMenu;