import React, {useEffect, useState} from 'react'
import Movie from './Movie.jsx'

function MoviesApi  () {

    const [moviesList, setMoviesList] = useState([])
    
    const getMovies = async () => {
        const apiKey = '43846ec1e0402fe049b4eb22b44a3aeb';

        console.log()

        const url = `https://api.themoviedb.org/3/account/20556212/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;
        fetch(url)
        .then(res => res.json())
        .then(json => setMoviesList(json.results))
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(moviesList)
    
 return (
    <div>
        {moviesList.map((movie, index) =>(
        <Movie key={index} {...movie}/>
      ))}
    </div>
 );
}


export default MoviesApi