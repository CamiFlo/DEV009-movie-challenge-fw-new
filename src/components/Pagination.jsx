import React, { useState } from 'react';

import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from "react-icons/md";


export default function Pagination({ currentPage, totalPages, onPageChange, moviesPerPage }) {
  const goToFirstPage = () => {
    onPageChange(1);
  };

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const goToLastPage = () => {
    onPageChange(totalPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  return (
    <nav className="pagination">
      <button className="first" onClick={goToFirstPage}>
        <i className="icon">
          <MdFirstPage />
        </i>
      </button>
      <button
        className="previous"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <i className="icon">
          <MdChevronLeft />
        </i>
      </button>
      <span className="page-number">
      {`Page  ${currentPage} de  ${totalPages}`}
      </span>
      <button className="next" onClick={goToNextPage}>
        <i className="icon">
          <MdChevronRight />
        </i>
      </button>
      <button className="back" onClick={goToLastPage}>
        <i className="icon">
          <MdLastPage />
        </i>
      </button>
    </nav>
  )
}




/*import React, { useState } from 'react';
import first_page from '../assets/first_page.svg';
import last_page from '../assets/last_page.svg';
import looks_one from '../assets/looks_one.svg';
import navigate_before from '../assets/navigate_before.svg';
import navigate_next from '../assets/navigate_next.svg';*/

/*export default function Footer() {
  const [currentPage, setCurrentPage] = useState(1); // Estado para mantener el número de página actual

  const goToFirstPage = () => {
    // Lógica para ir a la primera página
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    // Lógica para ir a la página anterior
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    // Lógica para ir a la siguiente página
    // Aquí deberías tener lógica para verificar si hay más páginas disponibles
    setCurrentPage(currentPage + 1);
  };

  const goToLastPage = () => {
    // Lógica para ir a la última página
    // Aquí debes actualizar el estado con el número de la última página
    setCurrentPage(5); // Por ejemplo, si hay 5 páginas en total
  };

  return (
    <footer className="pagination">
      <button className="first" onClick={goToFirstPage}>
        <img src={first_page} alt="First" className="icon" />
      </button>
      <button className="previous" onClick={goToPreviousPage}>
        <img src={navigate_before} alt="Previous" className="icon" />
      </button>
      <button className="page-number">
        <img src={looks_one} alt="Current Page" className="icon" /> {currentPage}
      </button>
      <button className="next" onClick={goToNextPage}>
        <img src={navigate_next} alt="Next" className="icon" />
      </button>
      <button className="back" onClick={goToLastPage}>
        <img src={last_page} alt="Last" className="icon" />
      </button>
    </footer>
  );
} */
