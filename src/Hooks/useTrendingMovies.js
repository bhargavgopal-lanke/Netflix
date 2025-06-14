import { useEffect } from "react";
import { API_OPTIONS } from "../utils/utils";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/Slices/NewMoviesListSlice";

const useTrendingMovies = () => {
  const dispacth = useDispatch();
  const fetchTrendingMovies = async () => {
    const trendingData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await trendingData.json();
    dispacth(addTrendingMovies(data));
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);
};

export default useTrendingMovies;
