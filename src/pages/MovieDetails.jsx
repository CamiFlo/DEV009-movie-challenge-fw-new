import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import getMovies from "../api/services";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovies(`/movie/${movieId}`).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = movie.poster_path
    ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';
  return (
    <div className={styles.detailsContainer}>
      <img className={styles.column} src={imageUrl} alt={movie.title} />
      <div className={styles.column}>
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
