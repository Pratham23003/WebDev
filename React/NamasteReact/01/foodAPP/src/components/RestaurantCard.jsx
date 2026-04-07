import React from "react";

const RestaurantCard = () => {
  return (
    <div>

      <div className="h-100 w-90 border-none rounded-full cursor-pointer">

        <div className="">

          <div className="img-container relative h-80 w-90 bg-[url('/startbuck.webp')] bg-cover bg-center">
            {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>

          <div className="restaurant-title relative bottom-7">

            <div className="restaurant-heading-container flex justify-between">
              <h3 className="font-bold text-white pl-3">Starbucks Coffee</h3>
              <div className="rating-container">
                <span className="text-white pr-3">5.0</span>
              </div>
            </div>

          </div>

          <div className="upper-details-container flex justify-between">
            <div className="location-details-container ">
              <span>Desserts • Fast Food</span>
            </div>

            <div className="price-details-container">
              <span>₹900 for two</span>
            </div>
          </div>

          <div className="lower-details-container flex justify-between">
            <div className="location-container ">
              <span>Ferozpur Road, Ludhiana</span>
            </div>

            <div className="distance-container">
              <span>6.7 km</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;
