import React from "react";
import { useState } from "react";
import './App.css'
import './components/Footer.css'
import Header from "./components/Header.jsx";
import Home from './pages/Home'
import Page2 from './pages/Page2'
import MovieDetails from './pages/MovieDetails'
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "../node_modules/react-router-dom";
import Switch from '../node_modules/react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"><Header /></Link>
          </li>
          <li>
            <Link to="/page2"><Page2 /></Link>
          </li>
          <li>
            <Link to="/movie/:movieId"> <MovieDetails/> </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/"><Home /></Route>
          <Route exact path="/movie"><MovieDetails /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}


/*function App() {
  return (
    <>
      <Header />
      <MoviesGrid />

      <Footer />
    </>
  );
}*/


