import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div className="min-w-[150px] md:min-w-[200px] aspect-[2/3] shrink-0 cursor-pointer overflow-hidden rounded-md">
      <img src={movie.img} alt={movie.alt} className="w-full h-full object-cover rounded-md" />
    </div>
  );
};

export default MovieCard;
