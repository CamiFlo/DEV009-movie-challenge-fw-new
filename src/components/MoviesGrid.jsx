import MovieCard from "./MovieCard";
import styles from './MoviesGrid.module.css';

export default function MoviesGrid() {
  

  let movies = []; // arreglo de peliculas recibidas por la api?
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
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