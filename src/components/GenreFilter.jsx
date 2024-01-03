import styles from './GenreFilter.module.css';

import { useState } from "react";

export default function GenreFilter({ genres, onSelectGenre }) {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleGenreChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);
    onSelectGenre(selectedValue);
  };

  return (
    <div className={styles.genreFilterContainer}>
      <span className={styles.filterTitle}>Filter by Genre </span>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option className={styles.option} value="all">
          All
        </option>
        {genres.map((genre) => (
          <option className={styles.option} key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
