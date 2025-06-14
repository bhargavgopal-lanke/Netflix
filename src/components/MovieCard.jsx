import React from "react";

const MovieCard = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="movies-grid">
        {movies &&
          movies.length > 0 &&
          movies.map((movies) => {
            return (
              <div key={movies?.id}>
                <div className="movies-list-styling">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
                    alt={movies?.title}
                    className="movie-poster"
                  />
                  <p>{movies?.title}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieCard;
