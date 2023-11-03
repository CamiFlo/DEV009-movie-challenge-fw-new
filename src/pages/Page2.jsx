import Pagination from "../components/Pagination";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";

export default function Page2() {
  return (
    <>
      <Header />
      <MoviesGrid start={10} end={20} />
      <Pagination />
    </>
  );
}
