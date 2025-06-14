import React from "react";
import Header from "./Header/Header";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import VedioContainer from "./VedioContainer";
import VedioTitle from "./VedioTitle";
import usePopularPlayingMovies from "../Hooks/usePopularPalyingMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useHorrorMovies from "../Hooks/useHorrorMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();
  
  const store = useSelector((state) => state?.newMovies?.movies);
  const trailerMovie = store && store[0];

  return (
    <div className="browse-container">
      <Header />
      <div className="movies-container">
        <VedioTitle movie={trailerMovie} />
        <SecondaryContainer movies={store} />
      </div>
    </div>
  );
};

export default Browse;
