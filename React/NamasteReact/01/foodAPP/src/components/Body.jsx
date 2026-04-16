import RestaurantCard from './RestaurantCard'
import { resData } from '../utils/utils'
import { useState } from 'react'
const Body = () => {
  const [data, setData] = useState(resData);

  return (
    <div className='mx-auto flex-col w-[80%]  items-center justify-center overflow-x-scroll'>
        <div id='search-container' className='text-center mx-auto'>
          <button className='filter-btn p-3 bg-gray-100 cursor-pointer mb-2 active:border-1' 
            onClick={() => {
              setData(data.filter(item => item.resRating > 4))
            }}>
              Top Rated Restaurants
          </button>
        </div>

        <div id='card-container' className="flex gap-5">
          {data.map((res) => 
          (
            <RestaurantCard
            key={res.id}
            {...res} //we did this to prevent passing individual prop.
            >
            </RestaurantCard>
          ))}
        </div>
    </div>
  )
}

export default Body