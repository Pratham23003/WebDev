const MovieCard = ({ movie }) => {
  return (
    <div>

      <p className="relative text-black top-65 right-3 h-10 w-10 z-[1] text-8xl font-extrabold stroke-white">
        {movie.id}
      </p>

      <div className="min-w-[150px] md:min-w-[200px] aspect-[2/3] shrink-0 cursor-pointer overflow-hidden rounded-md hide-scrollbar">
        <img
          src={movie.img}
          alt={movie.alt}
          className="w-full h-full object-cover rounded-md transition-transform hover:scale-110"
        />
      </div>

    </div>
  );
};

export default MovieCard;
