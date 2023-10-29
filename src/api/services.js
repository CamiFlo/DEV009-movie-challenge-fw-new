const Api = 'https://api.themoviedb.org/3/'

export default function get(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg0NmVjMWUwNDAyZmUwNDliNGViMjJiNDRhM2FlYiIsInN1YiI6IjY1MjcxOGE4NmRlYTNhMDBhZDVhODg1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EVGy2BoBUehnQ7xF46L6QcxN4iONDfKJQDfycSHlGc'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}