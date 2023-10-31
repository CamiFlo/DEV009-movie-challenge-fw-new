import { useEffect, useState } from "react";
import  getMovies  from '../api/services';
import MovieCard from "./MovieCard";
import styles from './MoviesGrid.module.css';


export default function MoviesGrid() {
  console.log('MoviesGrid');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(response => {
        if (!response.ok) {
          throw new Error('Error: Not Found');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); 
        setMovies(data.results); // Actualizar el estado con los datos recibidos
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



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
  // {movies.slice(0, 9).map((movie) 
  
/*export default function MoviesGrid() {
  console.log('MoviesGrid')
  const [movies, setMovies] = useState([]);
    useEffect(() => {
    console.log(get()) 
     /*.then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));*/
      /*.then((data) => {
        setMovies(data.results);*/
    //  })
    //}, [] ; 
    
  
  
   
     // return fetch(url)
    

  //let movies = []; // arreglo de peliculas recibidas por la api?