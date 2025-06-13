import React from "react";
import Header from "./Header/Header";
import DisplayMovies from "./DisplayMovies";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import VedioContainer from "./VedioContainer";

const Browse = () => {
  useNowPlayingMovies()
  const store = useSelector((state) => state?.newMovies?.movies);

  const movieId = store && store[0]?.id;

  return (
    <div className="container">
      <Header />
      <div className="movies-container">
        <VedioContainer movieId={movieId} />
        <DisplayMovies movies={store} />
      </div>
    </div>
  );
};

export default Browse;
