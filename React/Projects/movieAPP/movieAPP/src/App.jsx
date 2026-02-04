import "./App.css";
import "./index.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import {useDebounce} from 'react-use';
import { getTrendingMovies, updateSearchCount } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(()=>setDebouncedSearchTerm(searchTerm), 500, [searchTerm]); //debouned search

  const fetchMovies = async (query = '') => {

    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURI(query)}` 
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch Movies");
      }

      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch Movies");
        setMovieList([]);
        return;
      } 
      else {
        setMovieList(data.results || []);
        if(query && data.results.length > 0){
          await updateSearchCount(query, data.results[0]);
        }
      };

    } 
    
    catch (error) {
      console.error(`Error Fetching Movies : ${error}`);
      setErrorMessage("Error Fetching Movies. Please try again later.");
    } 
    
    finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async() => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } 
    catch (error) {
      console.error(`Trending movies couldn't be fetched :${error}`);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1 className="text-5xl font-semibold">
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 className="text-2xl font-bold">Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id || movie.rowId || movie.id}>
                  <p>{index + 1}</p>
                  {movie.poster_url ? (
                    <img src={movie.poster_url} alt={movie.title} />
                  ) : movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || `Poster ${index + 1}`} />
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2 className = "text-2xl font-bold">All movies</h2>

          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key = {movie.id} movie = {movie}/>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
