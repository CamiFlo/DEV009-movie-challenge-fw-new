import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const imageUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={styles.column} src={imageUrl} alt={movie.title}></img>
      <div claseName={styles.column}>
        <h4 className={styles.title}>
          <strong>Title: </strong> {movie.title}
        </h4>
        <h5 className={styles.year}>
          <strong>Year: </strong> {movie.release_date}
        </h5>
        <p className={styles.descriptionText}>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
