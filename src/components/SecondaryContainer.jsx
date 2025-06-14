import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = ({ movies }) => {
  const store = useSelector((state) => state?.newMovies);
  const popularMovies = store?.popularMovies;
  const trendingMovies = store?.trendingMovies;
  const upcomingMovies = store?.upcomingMovies;
  const horrorMovies = store?.horrorMovies;


  return (
    <div className="container">
      <section className="secondary-container">
        <MovieCard title="Now Playing" movies={movies} />
        <MovieCard title="Trending" movies={trendingMovies} />
        <MovieCard title="Popular" movies={popularMovies} />
        <MovieCard title="Upcoming Movies" movies={upcomingMovies} />
        <MovieCard title="Horror" movies={horrorMovies} />
      </section>
    </div>
  );
};

export default SecondaryContainer;
