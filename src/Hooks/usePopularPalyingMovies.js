import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addPopularMovies } from "../utils/Slices/NewMoviesListSlice";

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state?.newMovies?.popularMovies);
  const fetchPopularMovies = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await fetchData.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);
};

export default usePopularPlayingMovies;
