import { getMovies } from "@/api/movie/queries/get-movies";
import { getMoviesByTitle } from "@/api/movie/queries/get-movies-by-title";
import type { MovieWithGenresNames } from "@/api/movie/types";
import { Placeholder } from "@/components/placeholder";
import type { ParsedSearchParams } from "@/features/movie/search-params";
import { cn } from "@/lib/utils";

import { MovieItem } from "./movie-item";

type MovieListProps = {
  searchParams: ParsedSearchParams;
};

export const MovieList = async ({ searchParams }: MovieListProps) => {
  const movies: MovieWithGenresNames[] = searchParams.search
    ? await getMoviesByTitle(searchParams)
    : await getMovies();

  return (
    <ul
      className={cn("grid grid-cols-1  gap-6", {
        "sm:grid-cols-2 lg:grid-cols-3": !!movies.length,
      })}>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <Placeholder label="No movies found" />
      )}
    </ul>
  );
};
