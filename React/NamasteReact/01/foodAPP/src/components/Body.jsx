import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='flex-col'>
        <div id='search-container' className='items-center'>
          Search
        </div>

        <div id='card-container'>
          <RestaurantCard/>
        </div>
    </div>
  )
}

export default Body