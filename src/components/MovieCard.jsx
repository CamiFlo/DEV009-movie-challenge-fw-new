import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  //const imageUrl = "http://image.tmdb.org/t/p/w500" +
  return (
    <li className={styles.movieCard}>
      
      <img
        className={styles.moviePoster}
        src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
        alt={`poster ${movie.title}`}
        width={230}
        height={345}
      />
      
      <h4 className={styles.movieTitle}>{movie.title}</h4>
      <h5 className={styles.movieYear}>{movie.release_date.slice(0, 4)}</h5>
    </li>
  );
}

//<Link to={`/movie/${movie.id}`}> 
//</Link>