import { IMG_CDN_URL } from "./constants"

const RestaurantCard = (
    {
        cloudinaryImageId,
        name, 
        cuisines, 
        avgRating
    }) => {

    return(
        <div className='w-[200px] m-5 bg-amber-100 p-2 shadow-md hover:bg-amber-200 hover:shadow-lg h-72'>
            <img className="w-[100%] h-24" src= { IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4> 
        </div>
    )
}

export default RestaurantCard;