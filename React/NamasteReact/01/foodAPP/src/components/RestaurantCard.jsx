import React from "react";

const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, costForTwo, locality, sla, cloudinaryImageId } = props?.info || {};

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: cloudinaryImageId
              ? `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId})`
              : 'none'
          }}
        ></div>
        
        {/* Subtle Gradient Overlay just for the bottom to make image pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Rating Badge Overlayed on Image */}
        {avgRating && (
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-gray-900">{avgRating}</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1 truncate">{name}</h3>
        
        <p className="text-sm text-gray-500 mb-4 truncate" title={cuisines?.join(', ')}>
          {cuisines?.join(', ')}
        </p>

        {/* Bottom Details */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</span>
            <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">{locality}</span>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-gray-900">{costForTwo}</span>
            <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {sla?.deliveryTime} mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
