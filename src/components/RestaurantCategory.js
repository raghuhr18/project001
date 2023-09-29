import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({categoryData}) => {
    const [show, setShow ] = useState(false);

  return (

    <div className=''>
        <div className='flex justify-between cursor-pointer p-2 m-2 border-zinc-950 '>
            <p>{categoryData.title} - ({categoryData.itemCards.length}) </p> 
            <span >🔽</span>
        </div>
        {/* {console.log(categoryData?.itemCards)} */}
        {<ItemList items={categoryData.itemCards} />}
    </div>

  )
}

export default RestaurantCategory
