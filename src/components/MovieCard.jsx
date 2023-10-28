import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export default function MovieCard({ title, releaseDate, posterPath }) {
  //const imageUrl = "http://image.tmdb.org/t/p/w500" +
  return (
    <li className={styles.movieCard}>
      <Link to={'/movie/'+ movie.id}> 
      <img
        className={styles.moviePoster}
        src={`https://www.themoviedb.org/t/p/original/${posterPath}`}
        alt={`poster ${title}`}
        width={230}
        height={345}
      />
      </Link>
      <h4 className={styles.movieTitle}>{title}</h4>
      <h5 className={styles.movieYear}>{releaseDate}</h5>
    </li>
  );
}
