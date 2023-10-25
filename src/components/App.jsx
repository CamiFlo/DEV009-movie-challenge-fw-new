import { useState } from 'react'
import './App.css'
import './Movie.css'
import './Footer.css'
import Header from './Header.jsx'
import BoardMovies  from './Movie.jsx'
import Footer from './Footer.jsx'
import MoviesApi from './Api.jsx'

function App() {
 
return(
<>
 <Header/>
 <BoardMovies/>
 <MoviesApi/>
 <Footer/>
</>
)

}



export default App
