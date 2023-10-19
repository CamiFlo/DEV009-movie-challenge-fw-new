import { useState } from 'react'
import './App.css'
import './components/Movie.css'
import './components/Footer.css'
import Header from './Header.jsx'
import  BoardMovies  from './Movie.jsx'
import Footer from './Footer.jsx'

function App() {
 
return(
<>
 <Header/>
 <BoardMovies/>
 <Footer/>
</>
)

}



export default App
