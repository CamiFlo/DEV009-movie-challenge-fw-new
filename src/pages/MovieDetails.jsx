import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import get  from '../api/services'

export default function MovieDetails() {
const {movieId} = useParams();
const[movie, setMovie] = useState(null);

useEffect(() => {
    get(`/movie/'${movieId} `).then(data =>{
        setMovie(data);

    });
}, [movieId] //arreglo de dependencias para que se ejecute cada vez que cambia el movieId
);

/*
if (!movie){
    return null; // nulo por defecto
}*/

  const imageUrl = `http://image.tmdb.org/t/p/w500 ${movie.poster_path}`;
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
