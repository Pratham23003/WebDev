import React from "react";

const RestaurantCard = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="h-100 w-90 border-none rounded-full cursor-pointer">
        <div className="">
          <div
            className="img-container relative h-80 w-90 bg-cover bg-center"
            style={{ backgroundImage: `url(${props.bgURL})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>

          <div className="restaurant-title relative bottom-7">
            <div className="restaurant-heading-container flex justify-between">
              <h3 className="font-bold text-white pl-3">{props.resName}</h3>
              <div className="rating-container">
                <span className="text-white pr-3">{props.resRating}</span>
              </div>
            </div>
          </div>

          <div className="upper-details-container flex justify-between">
            <div className="foodCategory-details-container ">
              <span>{props.foodCategory}</span>
            </div>

            <div className="price-details-container">
              <span>{props.priceDetails}</span>
            </div>
          </div>

          <div className="lower-details-container flex justify-between">
            <div className="location-container ">
              <span>{props.location}</span>
            </div>

            <div className="distance-container">
              <span>{props.distance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
