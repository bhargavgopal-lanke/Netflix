import { useEffect } from "react";
import { API_OPTIONS } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/Slices/NewMoviesListSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state?.newMovies?.upcomingMovies)
  const fetchUpcomingMovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await fetchMovies.json();
    dispatch(addUpcomingMovies(data?.results));
  };
  useEffect(() => {
    !upcomingMovies && fetchUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
