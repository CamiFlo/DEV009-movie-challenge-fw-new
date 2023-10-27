import { useState } from "react";
import "./App.css";
import "./Movie.css";
import "./Footer.css";
import Header from "./Header.jsx";
import MoviesGrid from "./MoviesGrid";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <MoviesGrid />

      <Footer />
    </>
  );
}

export default App;
