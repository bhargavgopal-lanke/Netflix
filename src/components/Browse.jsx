import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { API_OPTIONS } from "../utils/utils";

const Browse = () => {
  const [moviesData, setMoviesData] = useState([]);

  function fetchMoviesData() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMoviesData(res?.results);
      })
      .catch((error) => {
        console.log(error.code + ":" + error.message);
      });
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  console.log("moviesData", moviesData);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default Browse;
