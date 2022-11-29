import React, { useEffect } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { getMovies } from "./features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";

function App() {
  const { darkTheme, movies } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {movies.data
            ? movies.data.results.map((movie) => {
                const { id, title, overview, poster_path } = movie;
                return (
                  <MovieCard
                    key={id}
                    title={title}
                    overview={overview}
                    poster_path={
                      "https://image.tmdb.org/t/p/original" + poster_path
                    }
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
