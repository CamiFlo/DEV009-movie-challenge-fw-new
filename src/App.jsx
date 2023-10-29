import React from "react";
import "./App.css";
import "./components/Footer.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/*<Route path="/page2">
<Page2/>
</Route>*/
/*<li>
            <Link to="/page2">
              <Page2 />
            </Link>
          </li>
*/
/*function App() {
  return (
    <>
      <Header />
      <MoviesGrid />

      <Footer />
    </>
  );
}*/
/*<ul>
          <li>
            <Link to="/">
              <Home />
            </Link>
          </li>

          <li>
            <Link to="/movie/:movieId">
              <MovieDetails />
            </Link>
          </li>
        </ul>*/
