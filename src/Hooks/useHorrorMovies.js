import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addHorrorMovies } from "../utils/Slices/NewMoviesListSlice";
import { useEffect } from "react";

const useHorrorMovies = () => {
  const dispacth = useDispatch();

  const fetchHorrorMovies = async () => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await fetchMovies.json();
    console.log("data", data);
    dispacth(addHorrorMovies(data?.results));
  };

  useEffect(() => {
    fetchHorrorMovies();
  }, []);
};

export default useHorrorMovies;
