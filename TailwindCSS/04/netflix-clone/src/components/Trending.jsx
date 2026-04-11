import { useRef } from "react";
import MovieCard from "./MovieCard";

function Trending() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Scroll left by the width of about 2-3 cards
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      // Scroll right by the width of about 2-3 cards
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  const movies = [
    {
      id: "1",
      img: "/1.webp",
      alt: "1",
    },
    {
      id: "2",
      img: "/2.webp",
      alt: "2",
    },
    {
      id: "3",
      img: "/3.webp",
      alt: "3",
    },
    {
      id: "4",
      img: "/4.webp",
      alt: "4",
    },
    {
      id: "5",
      img: "/5.webp",
      alt: "5",
    },
    {
      id: "6",
      img: "/6.webp",
      alt: "6",
    },
    {
      id: "7",
      img: "/7.webp",
      alt: "7",
    },
    {
      id: "8",
      img: "/8.webp",
      alt: "8",
    },
    {
      id: "9",
      img: "/9.webp",
      alt: "9",
    },
    {
      id: "10",
      img: "/10.webp",
      alt: "10",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-full max-w-[1280px]">
        <div className="px-4 mt-8 md:px-12 text-white w-full relative group">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-100">
            Trending Now
          </h2>

          {/* Left Scroll Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 mt-5 top-1/2 -translate-y-1/2 z-40 bg-gray-900 hover:bg-gray-950 text-white hidden w-6 h-30 max-h-[250px] opacity-95 group-hover:opacity-100 transition-opacity duration-300 md:flex items-center justify-center rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* carousel track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden gap-4 sm:gap-6 hide-scrollbar pb-4 scroll-smooth p-2"
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          <button
            onClick={scrollRight}
            className="absolute mt-5 right-0 top-1/2 -translate-y-1/2 z-40 bg-gray-900 hover:bg-gray-950 text-white w-6 h-30 max-h-[250px] opacity-95 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trending;
