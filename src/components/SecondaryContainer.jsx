import React from "react";
import MovieCard from "./MovieCard";

const SecondaryContainer = ({ movies }) => {
  console.log("https://image.tmdb.org/t/p/w500/", movies);

  return (
    <div className="container">
      <section className="secondary-container">
        <MovieCard title="Now Playing" movies={movies} />
        <MovieCard title="Trending" movies={movies} />
        <MovieCard title="Popular" movies={movies} />
        <MovieCard title="Upcoming Movies" movies={movies} />
        <MovieCard title="Horror" movies={movies} />
      </section>
    </div>
  );
};

export default SecondaryContainer;
