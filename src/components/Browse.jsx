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
import SearchGPT from "./SearchGPT";

const Browse = () => {
  useNowPlayingMovies();
  usePopularPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();

  const store = useSelector((state) => state);
  const newMovies = store && store?.newMovies?.movies;
  const searchPageView = store?.searchGptPage?.toggleSearchView;
  console.log("searchPageView", searchPageView);

  return (
    <div className="browse-container">
      <Header />
      <div className="movies-container">
        {searchPageView ? (
          <SearchGPT />
        ) : (
          <>
            <VedioTitle movie={newMovies} />
            <SecondaryContainer movies={newMovies} />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
