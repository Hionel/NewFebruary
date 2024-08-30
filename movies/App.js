import { React } from 'react';
import { useState } from 'react';

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App(){
  return (
    <>
      <Navbar/>
      <Main/>
    </>
  )
}

function Navbar(){
  return (
    <nav className='nav-bar'>
      <Logo/>
      <Search/>
      <NumResult/>

      
    </nav>
  )
}


function Logo(){
  return (
    <div className='logo'>
      <span>🍿</span>
      <h1>Movies</h1>
    </div>
  )
}

function Search(){
  return (
    <input type='text' className='search' placeholder='Search movies...'></input>
  )
}

function NumResult(){
  return (
    <p className='num-results'>Found <strong>X</strong> results</p>
  )
}

function Main(){
  return (
    <main>
      <ListBox/>
      <WatchedBox/>
    </main>
  )
}


function ListBox(){
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      {/* Partea din stanga START*/}
      <div className='box'>
        <button className='btn-toggle'>-</button>
        <ul className='list'>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.imdbID}/>
            ))
          }
        </ul>
      </div>
    {/* Partea din stanga FINAL*/}
  </>
  )
}

function Movie({movie}){
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`}/>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

function WatchedBox(){
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <div className='box'>
      <button className='btn-toggle'>-</button>
      <Summary watched={watched}/>
      <WatchedList watched={watched}/>
    </div>
  )
}


function Summary({watched}){
  let len = watched.length;
  let avgIMDB = watched.reduce((sum, movie) => sum + movie.imdbRating, 0) / watched.length;
  let avgUser = watched.reduce((sum, movie) => sum + movie.userRating, 0) / watched.length;
  let avgRunTime = watched.reduce((sum, movie) => sum + movie.runtime, 0) / watched.length;
  
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{len}</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgIMDB}</span>
        </p>
        <p>
          <span>👤</span>
          <span>{avgUser}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRunTime}</span>
        </p>
      </div>
    </div>
  )
}


function WatchedList({watched}){
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie movie={movie}  key={movie.imdbID}/>
      ))}
    </ul>
  )
}


function WatchedMovie({movie}){
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`}/>
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⌚</span>
          <span>{movie.Year}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime}</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>👤</span>
          <span>{movie.userRating}</span>
        </p>
      </div>
    </li>
  )
}