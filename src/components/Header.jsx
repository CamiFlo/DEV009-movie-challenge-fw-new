import { useState, useEffect } from "react";
import logo from "../assets/film.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import GenreFilter from "../components/GenreFilter";
import getMovies from "../api/services"; 
import { getGenres } from "../api/servicesGenre";

export default function Header({ page, onSelectGenre }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const release_date = 'release_date'; // Reemplaza esto con la fecha real si es necesario

    getMovies(page, selectedGenre, release_date) 
      .then((data) => {
        console.log(data);
        const moviesData = data.results;
        const allGenres = moviesData.flatMap((movie) => movie.genre_ids);
        const uniqueGenres = [...new Set(allGenres)];
        setMovies(moviesData);
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
        // Manejo de errores
      });
  }, [page, selectedGenre]); // Asegúrate de incluir las variables de dependencia en el array de dependencias de useEffect

  useEffect(() => {
    getGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {
        console.error('Error al obtener los géneros:', error);
        // Manejo de errores
      });
  }, []);

  return (
    <>
      <header className={styles.headerContainer}>
        <Link to="/" element={<Home />}>
          <img
            className={styles.logofilm}
            src={logo}
            alt={"old film tape"}
            width={100}
            height={100}
          />
          <h1 className={styles.webTitle} style={{ fontFamily: "Harting" }}>
            Classic Cinema
          </h1>
        </Link>
        <div className={styles.genreFilterContainer}>
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        </div>
      </header>
    </>
  );
}
