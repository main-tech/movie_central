import React from 'react';
import {useEffect} from 'react';
import './App.css';
import './search.svg';
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard"
const movie1 ={Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
Title: "Batman Begins",
Type: "movie",
Year: "2005",
imdbID: "tt0372784"};
const API_URL ='http://www.omdbapi.com?apikey=34df11c5';
const App = ()=>{
const searchMovies=async(title)=>{
const response= await fetch(`${API_URL}&s=${title}`)
const data=await response.json();
console.log(data.Search);

    }
  useEffect(()=>{
    searchMovies('Batman');
  },[]);
return(
  <div className="app">
  <h1>MovieCentral</h1>
  <div className="search">
  <input
  placeholder="search for movies"
  value="superman"
  onChange={()=> {}}
  />
   <img
   src={SearchIcon}
   alt="search"
   onClick={()=>{}}
   />

   </div>
   <div className="container">
<MovieCard movie1={movie1}/>
   </div>
</div>

);
}

export default App;
