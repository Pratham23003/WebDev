import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
  return (
      <div className="relative w-full sm:w-2/3">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
          className="w-full pl-11 pr-4 py-4 rounded-full border-0 ring-1 ring-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none transition-shadow text-gray-900"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      </div>
  );
};

export default Search;
