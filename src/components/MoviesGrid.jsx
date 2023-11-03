import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getMovies from "../api/services";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Pagination from "./Pagination";

export default function MoviesGrid({ url, page }) {
  const [movies, setMovies] = useState([]);
  const [moviesPerPage, setMoviesPerPage]= useState(10); //pelis por página
  const [totalPages, setTotalPages] = useState(4);  //total de páginas
  const [currentPage, setCurrentPage] = useState(1); //página actual
  const navigate = useNavigate();
  const totalMovies = movies.length; //cantidad de pelis que trae la api

  console.log("MoviesGrid");

  useEffect(() => {
    getMovies(currentPage)
      /*.then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Error: Not Found');
        }
        return response.json();
      })*/
      .then(data => {
        console.log(data)
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
       throw error; // Vuelve a lanzar el error para que se maneje en el componente que llama a esta función
      });
  }, [currentPage]); // Vuelve a realizar la solicitud de la API cada vez que currentPage cambie

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const moviesOnCurrentPage = movies.slice(startIndex, endIndex);

  return (
    <div>
      <ul className={styles.moviesGrid}>
        {moviesOnCurrentPage.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
            onClick={() => handleClick(movie.id)}
          />
        ))}
      </ul>
      <Pagination
        key={page}
        moviesPerPage={moviesPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalMovies={totalMovies}
      />
    </div>
  );
}