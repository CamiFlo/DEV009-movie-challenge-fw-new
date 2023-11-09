import styles from './GenreFilter.module.css'

export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div>
      <span className={styles.filterTitle}>Filter by Genre </span>
      <select value={selectedGenre} onChange={onSelectGenre}>
        <option value="all">All</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};
