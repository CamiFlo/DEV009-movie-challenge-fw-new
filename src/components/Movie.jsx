import React from 'react';
import MoviesApi from './Api.jsx'

function Movie({ title, releaseDate, posterPath }) {
  return (
    <div className="movie">
      <div className="movie-poster">
        <a href="https://www.themoviedb.org/movie" target="_blank" rel="noopener noreferrer">
          <img
            className="poster"
            src={`https://www.themoviedb.org/t/p/original/${posterPath}`}
            alt={`poster ${title}`}
            width={150}
            height={200}
          />
        </a>
        <a className="title">{title}</a>
        <a className="year">{releaseDate}</a>
      </div>
    </div>
  );
}

export function BoardMovies() {
  const movies = MoviesApi();

  return (
    <>
      <div className="movies-row1">
        {movies.slice(0, 4).map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
      <div className="movies-row2">
        {movies.slice(5, 10).map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
}
