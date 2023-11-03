import React from "react";
import "./App.css";
import "./components/Pagination.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import MovieDetails from "./pages/MovieDetails";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

  /*return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}*/

/*
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}*/

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
