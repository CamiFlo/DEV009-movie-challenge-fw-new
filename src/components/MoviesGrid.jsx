import { useEffect, useState } from "react";
import  get  from '../api/services';
import MovieCard from "./MovieCard";
import styles from './MoviesGrid.module.css';

export default function MoviesGrid() {
  console.log('MoviesGrid')
  const [movies, setMovies] = useState([]);
    useEffect(() => {
     get().then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      /*.then((data) => {
        setMovies(data.results);*/
      })
    }, [] ;
    function get(){
      return fetch(url)
    }

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


  // {movies.slice(0, 9).map((movie) => 