import React from 'react';
import {useEffect,useState} from 'react';
import './App.css';
import './search.svg';
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard"

const API_URL ="https://www.omdbapi.com?apikey=34df11c5";

const App = ()=>{
const [movies,setMovies]= useState([]);
const [searchTerm,setSearchTerm]=useState("");

  useEffect(() => {
    searchMovies("attack on titan");
  }, []);
  
const searchMovies=async(title)=>{
const response= await fetch(`${API_URL}&s=${title}`);
const data=await response.json();

setMovies(data.Search);

    };
  
return(
    <div className="app">
      <h1>Movie Central</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
