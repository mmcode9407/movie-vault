import { getMovies } from "@/api/movie/queries/get-movies";
import type { MovieWithGenresNames } from "@/api/movie/types";

import { MovieItem } from "./movie-item";

export const MovieList = async () => {
  const movies: MovieWithGenresNames[] = await getMovies();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
