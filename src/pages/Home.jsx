import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";

export default function Home() {
  console.log('Home')
  return (
    <>
      <Header />
      <MoviesGrid />
      <Footer />
    </>
  );
}
