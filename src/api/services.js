//const API = 'https://api.themoviedb.org/3/'
export default function get(){
    const apiKey = '43846ec1e0402fe049b4eb22b44a3aeb';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg0NmVjMWUwNDAyZmUwNDliNGViMjJiNDRhM2FlYiIsInN1YiI6IjY1MjcxOGE4NmRlYTNhMDBhZDVhODg1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EVGy2BoBUehnQ7xF46L6QcxN4iONDfKJQDfycSHlGc'
        }
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

/*
export default function fetchData() {
    const apiKey = '43846ec1e0402fe049b4eb22b44a3aeb';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg0NmVjMWUwNDAyZmUwNDliNGViMjJiNDRhM2FlYiIsInN1YiI6IjY1MjcxOGE4NmRlYTNhMDBhZDVhODg1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EVGy2BoBUehnQ7xF46L6QcxN4iONDfKJQDfycSHlGc'
        }
    };
      
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error: no response');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
}*/




/*export default function get(path){
    return fetch(API + path, {
        headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg0NmVjMWUwNDAyZmUwNDliNGViMjJiNDRhM2FlYiIsInN1YiI6IjY1MjcxOGE4NmRlYTNhMDBhZDVhODg1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EVGy2BoBUehnQ7xF46L6QcxN4iONDfKJQDfycSHlGc',
    'Content-Type': 'application/json',
},
})   .then((result) => result.json());
}*/
   
     
        
      
          
