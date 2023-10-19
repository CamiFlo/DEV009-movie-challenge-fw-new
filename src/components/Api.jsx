import React, {useEffect, useState} from 'react'
import Movie from './Movie.jsx'

function MoviesApi  () {

    const [moviesList, setMoviesList] = useState([])
    
    const getMovies = async (page) => {
        const apiKey = '43846ec1e0402fe049b4eb22b44a3aeb';

        console.log(page)

        const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=%2010749%2C%2010402%2C%2018&api_key=${apiKey}`;
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