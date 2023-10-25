import React, {useEffect, useState} from 'react'
import Movie from './Movie'

function MoviesApi  () {

    const [moviesList, setMoviesList] = useState([])
    
    const getMovies = async () => {
        const apiKey = '43846ec1e0402fe049b4eb22b44a3aeb';

        console.log()

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

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