import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {

  const resData = 
  [{
    id: 1,
    resName: "Starbucks",
    resRating : 5.0,
    foodCategory : "Desserts • Fast Food",
    priceDetails : "₹900 for two",
    location: "Ferozpur Road, Ludhiana",
    distance: 6.7,
    bgURL: "./startbuck.webp"
  },
  {
    id: 2,
    resName: "Starbucks",
    resRating : 5.0,
    foodCategory : "Desserts • Fast Food",
    priceDetails : "₹900 for two",
    location: "Ferozpur Road, Ludhiana",
    distance: 6.7,
    bgURL: ""
  },
  {
    id: 3,
    resName: "Starbucks",
    resRating : 5.0,
    foodCategory : "Desserts • Fast Food",
    priceDetails : "₹900 for two",
    location: "Ferozpur Road, Ludhiana",
    distance: 6.7,
    bgURL: ""
  },
  {
    id: 4,
    resName: "Starbucks",
    resRating : 5.0,
    foodCategory : "Desserts • Fast Food",
    priceDetails : "₹900 for two",
    location: "Ferozpur Road, Ludhiana",
    distance: 6.7,
    bgURL: ""
  },
  {
    id: 4,
    resName: "Starbucks",
    resRating : 5.0,
    foodCategory : "Desserts • Fast Food",
    priceDetails : "₹900 for two",
    location: "Ferozpur Road, Ludhiana",
    distance: 6.7,
    bgURL: ""
  },
  {
    id: 4,
    resName: "Starbucks",
    resRating : 5.0,
    foodCategory : "Desserts • Fast Food",
    priceDetails : "₹900 for two",
    location: "Ferozpur Road, Ludhiana",
    distance: 6.7,
    bgURL: ""
  }];

  return (
    <div className='mx-auto flex-col w-[80%]  items-center justify-center overflow-x-scroll'>
        <div id='search-container' className='text-center mx-auto'>
          Search
        </div>

        <div id='card-container' className="flex gap-5">
          {resData.map((res) => 
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