function Movie() {
    return (
        <div className="movie">
            <div className="movie-poster">
                <a href="https://www.themoviedb.org/movie" target="_blank" rel="noopener noreferrer">
                    <img
                        className="poster"
                        src="https://www.themoviedb.org/t/p/original/bhlf38aasEZjgdWQOzXwMhaOvGU.jpg"
                        alt="poster wild style"
                        width={150}
                        height={200}
                    />
                </a>
                <span className="title">Wild Style</span>
                <span className="year">1982</span>
            </div>
        </div>
    )
}

export function BoardMovies() {
    return (
        <>
            <div className='movies-row1'>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
            <div className='movies-row2'>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </>
    );


}
export default BoardMovies;