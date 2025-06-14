import { useEffect } from "react";
import { API_OPTIONS } from "../utils/utils";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/Slices/NewMoviesListSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const fetchUpcomingMovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await fetchMovies.json();
    console.log("upcoming Data", data);
    dispatch(addUpcomingMovies(data?.results));
  };
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
