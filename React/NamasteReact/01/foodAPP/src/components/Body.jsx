import RestaurantCard from './RestaurantCard'
import { API_ENDPOINT } from '../utils/utils'
import { useEffect, useState } from 'react'

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const jsonData = await response.json();
      
      const rawRestaurants = jsonData?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      console.log('jsonData:', jsonData);
      console.log('rawRestaurants:', rawRestaurants);
      
      if (rawRestaurants?.length > 0) {
        setData(rawRestaurants);
      } 
      else{
        console.warn('no data fetched');
      }
    } catch (error) {
      console.error('fetchData failed:', error);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Discover the best food & drinks
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore top-rated restaurants, exclusive offers, and fast delivery to your doorstep.
          </p>
          
          {/* Search / Filter Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="relative w-full sm:w-2/3">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search for restaurants or cuisines..." 
                className="w-full pl-11 pr-4 py-4 rounded-full border-0 ring-1 ring-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-shadow text-gray-900"
              />
            </div>
            
            <button 
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              onClick={() => {
                setData(data?.filter(item => Number(item.info?.avgRating) > 4))
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              Top Rated
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Restaurants near you</h2>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.length === 0 ? ( // Shimmer UI
            Array(8).fill("").map((_, idx) => (
              <div key={idx} className="animate-pulse flex flex-col gap-4">
                <div className="bg-gray-300 rounded-2xl h-48 w-full"></div>
                <div className="bg-gray-200 h-6 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
              </div>
            ))
          ) : (
            data?.map((res) => (
              <RestaurantCard
                key={res.info?.id}
                {...res}
              />
            ))
          )}
        </div>
      </div>
    </main>
  )
}

export default Body