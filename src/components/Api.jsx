import React, {useEffect, useState} from 'react'
import Movie from './MovieCard'

function MoviesApi  () {

    const [moviesList, setMoviesList] = useState([])
    
    const getMovies = async () => {
        const apiKey = '43846ec1e0402fe049b4eb22b44a3aeb';
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
        const [moviesList, setMoviesList] = useState([])
        const [searchKey, setSearchKey] = useState('');
        


        fetch(url)
        .then(res => res.json())
        .then(json => setMoviesList(json.results))

        console.log(MoviesApi)
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