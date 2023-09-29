import React from 'react'
import { IMG_CDN_URL, STATIC_IMG } from './constants'

const ItemList = ({items}) => {

  return (
    <div>
   
        {items.map((item) => (
            <div data-testid="foodItems"
                key={item?.card?.info?.id}
                className="m-2 p-2 text-left  flex justify-between">

                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span>
                        - ₹
                        {item?.card?.info?.price
                            ? item?.card?.info?.price / 100
                            : item?.card?.info?.defaultPrice / 100}
                        </span>
                    </div>
                    {console.log(item?.card?.info)}
                    <p>{item?.card?.info?.description}</p>
                </div>
                <div>
                    <img src={item?.card?.info?.imageId ?
                    IMG_CDN_URL + item?.card?.info?.imageId :
                    src= STATIC_IMG}
                     alt='Item Image' className='w-24 rounded-lg'/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList
