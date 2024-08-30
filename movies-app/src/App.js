import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";

const KEY = "f1982c66";

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);

	//COD SINCRON
	// useEffect(function(){
	//   fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
	//   .then(response => response.json())
	//   .then((data) => {
	//     console.log(data);
	//     setMovies(data.Search);
	//   })
	// }, [])

	function handleSelectedMovie(id) {
		setSelectedId(id);
	}

	function handleCloseMovie() {
		setSelectedId(null);
	}

	function handleAddMovie(movie) {
		setWatched((watched) => [...watched, movie]);
	}

	function handDeleteMovie(id) {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	}

	//COD ASINCRON
	useEffect(
		function () {
			async function fetchMovies() {
				try {
					setIsLoading(true);
					const res = await fetch(
						`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
					);
					if (!res.ok)
						throw new Error("Something went wrong with fetching movies!");

					const data = await res.json();
					if (data.Response === "False") throw new Error("Movie not found!");

					setMovies(data.Search);
				} catch (err) {
					setError(err.message);
				} finally {
					setIsLoading(false);
				}
			}

			if (query.length < 3) {
				setMovies([]);
				setError("");
				return;
			}
			fetchMovies();
		},
		[query]
	);

	//useEffect(fn, [query]) => side effectul se va trigarui in faza de MOUNT + de fiecare data cand se rerandeaza componenta ca urma a updatarii vreun state.
	//useEffect(fn, []) => side effectul se va trogarui in faza de MOUNT.
	//useEffect(fn) => side effect se va trigarui la fiecare randare.

	return (
		<>
			<Navbar>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<NumResult moviesArr={movies} />
			</Navbar>
			<Main movies={movies}>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />
					)}
					{error && <ErrorMessage message={error} />}
				</Box>
				<Box>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onCloseMovie={handleCloseMovie}
							onAddWatched={handleAddMovie}
							watched={watched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedMoviesList
								watched={watched}
								onHandleDelete={handDeleteMovie}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	);
}

function Loader() {
	return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
	return (
		<p className="error">
			<span>{message}</span>
		</p>
	);
}

function Navbar({ children }) {
	return <nav className="nav-bar">{children}</nav>;
}

function Logo() {
	return (
		<div className="logo">
			<span role="img">🍿</span>
			<h1>Movies</h1>
		</div>
	);
}

function Search({ query, setQuery }) {
	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
}

function NumResult({ moviesArr }) {
	return (
		<p className="num-results">
			Found <strong>{moviesArr.length}</strong> results
		</p>
	);
}

function Main({ movies, children }) {
	return <main className="main">{children}</main>;
}

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="box">
			<button
				className="btn-toggle"
				onClick={() => setIsOpen((element) => !element)}
			>
				{isOpen ? "-" : "+"}
			</button>
			{isOpen && children}
		</div>
	);
}

function MovieList({ movies, onSelectedMovie }) {
	return (
		<ul className="list">
			{movies?.map((movie) => (
				<Movie
					movie={movie}
					key={movie.imdbID}
					onSelectedMovie={onSelectedMovie}
				/>
			))}
		</ul>
	);
}

function Movie({ movie, onSelectedMovie }) {
	return (
		<li onClick={() => onSelectedMovie(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}

function MovieDetails({
	selectedId,
	onCloseMovie,
	onAddWatched,
	onSetRating,
	watched,
}) {
	const [movie, setMovie] = useState([]);
	const [rating, setRating] = useState("");
	const newWatchedMovie = {
		imdbID: selectedId,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster,
		imdbRating: Number(movie.imdbRating),
		runtime: movie.Runtime,
		userRating: rating,
	};
	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

	useEffect(
		function () {
			async function getMovieDetails() {
				const res = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
				);
				const data = await res.json();
				setMovie(data);
			}
			getMovieDetails();
		},
		[selectedId]
	);

	useEffect(
		function () {
			if (!movie.Title) return;
			document.title = `Movie | ${movie.Title}`;

			return function () {
				document.title = "Movies";
			};
		},
		[movie.Title]
	);

	return (
		<div className="details">
			<header>
				<button className="btn-back" onClick={() => onCloseMovie()}>
					👈
				</button>
				<img src={movie.Poster} alt={`Poster of ${movie}`} />
				<div className="details-overview">
					<h2>{movie.Title}</h2>
					<p>
						{movie.Released} - {movie.Runtime}
					</p>
					<p>{movie.Genre}</p>
					<p>
						<span>⭐</span>
						{movie.imdbRating}
					</p>
				</div>
			</header>
			<section>
				<div className="rating">
					{!isWatched ? (
						<>
							<StarRating maxRating={10} size="24" onSetRating={setRating} />
							{rating > 0 && (
								<button
									className="btn-add"
									onClick={() => onAddWatched(newWatchedMovie)}
								>
									+ Add to watched list
								</button>
							)}
						</>
					) : (
						<p>You watched/rated already this movie!</p>
					)}
				</div>
				<p>
					<em>{movie.Plot}</em>
				</p>
				<p>Starring {movie.Actors}</p>
				<p>Directed by {movie.Director}</p>
			</section>
		</div>
	);
}

// function WatchedBox(){
//   const [watched, setWatched] = useState(tempWatchedData);

//   return (
//     <div className="box">
//         <button className="btn-toggle">-</button>
//         <WatchedSummary watched={watched}/>
//         <WatchedMoviesList watched={watched}/>
//     </div>
//   )
// }

function WatchedSummary({ watched }) {
	const avgImdbRating =
		watched.reduce((sum, movie) => sum + movie.imdbRating, 0) / watched.length;
	const avgUserRating =
		watched.reduce((sum, movie) => sum + movie.userRating, 0) / watched.length;
	const avgRuntime =
		watched.reduce((sum, movie) => {
			const runTimeInMinutes = parseInt(movie.runtime);
			return sum + runTimeInMinutes;
		}, 0) / watched.length;

	//const avgImdbRating = watched.reduce((sum, movie) => console.log(typeof movie.imdbRating), 0)

	return (
		<div className="summary">
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating.toFixed(2)}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating.toFixed(2)}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime.toFixed(2)} min</span>
				</p>
			</div>
		</div>
	);
}

function WatchedMoviesList({ watched, onHandleDelete }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie
					movie={movie}
					key={movie.imdbID}
					onHandleDelete={onHandleDelete}
				/>
			))}
		</ul>
	);
}

function WatchedMovie({ movie, onHandleDelete }) {
	return (
		<li>
			<img src={movie.poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime}</span>
				</p>
			</div>

			<button
				className="btn-delete"
				onClick={() => onHandleDelete(movie.imdbID)}
			>
				❌
			</button>
		</li>
	);
}
