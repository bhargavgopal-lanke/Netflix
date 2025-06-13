import React from "react";
import Header from "./Header/Header";
import DisplayMovies from "./DisplayMovies";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import VedioContainer from "./VedioContainer";
import VedioTitle from "./VedioTitle";

const Browse = () => {
  useNowPlayingMovies();
  const store = useSelector((state) => state?.newMovies?.movies);

  const trailerMovie = store && store[0];

  return (
    <div className="browse-container">
      <Header />
      <div className="movies-container">
        <VedioTitle movie={trailerMovie} />
        <VedioContainer movieId={trailerMovie} />
        <DisplayMovies movies={store} />
      </div>
    </div>
  );
};

export default Browse;
