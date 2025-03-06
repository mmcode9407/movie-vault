import { getMovies } from "@/api/movie/queries/get-movies";
import { getMoviesByTitle } from "@/api/movie/queries/get-movies-by-title";
import { Placeholder } from "@/components/placeholder";
import { MoviePagination } from "@/features/movie/components/movie-pagination";
import type { ParsedSearchParams } from "@/features/movie/search-params";
import { cn } from "@/lib/utils";

import { MovieItem } from "./movie-item";

type MovieListProps = {
  searchParams: ParsedSearchParams;
};

export const MovieList = async ({ searchParams }: MovieListProps) => {
  const { search, page } = searchParams;

  const { list: movies, metadata: movieMetadata } = search
    ? await getMoviesByTitle(search, page)
    : await getMovies(searchParams);

  return (
    <div className="flex flex-col gap-y-4">
      <MoviePagination paginatedMovieMetadata={movieMetadata} />

      <ul
        className={cn("grid grid-cols-1 gap-6", {
          "sm:grid-cols-2 lg:grid-cols-3": !!movies.length,
        })}>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
        ) : (
          <Placeholder label="No movies found" />
        )}
      </ul>

      <MoviePagination paginatedMovieMetadata={movieMetadata} />
    </div>
  );
};
