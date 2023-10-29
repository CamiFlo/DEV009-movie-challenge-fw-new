import { useEffect, useState } from "react";
import  get  from '../api/services';
import MovieCard from "./MovieCard";
import styles from './MoviesGrid.module.css';

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
      get('/discover/movie').then((data) => {
        setMovies(data.results);
      });
    }, []

    );

  //let movies = []; // arreglo de peliculas recibidas por la api?
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (   //L19
        <MovieCard
          key={movie.id}
          movie={movie}
          title={movie.title}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}

  // {movies.slice(0, 9).map((movie) => 