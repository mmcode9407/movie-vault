import { getMovies } from "@/api/movie/queries/get-movies";
import { Placeholder } from "@/components/placeholder";
import { MoviePagination } from "@/features/movie/components/movie-pagination";
import type { ParsedSearchParams } from "@/features/movie/search-params";
import { cn } from "@/lib/utils";

import { MovieItem } from "./movie-item";

type MovieListProps = {
  searchParams: ParsedSearchParams;
};

export const MovieList = async ({ searchParams }: MovieListProps) => {
  const { list: movies, metadata: movieMetadata } =
    await getMovies(searchParams);

  return (
    <div className="flex flex-col gap-y-4 animate-fade-in-from-top">
      {movies.length > 0 ? (
        <>
          <MoviePagination paginatedMovieMetadata={movieMetadata} />

          <ul
            className={cn("grid grid-cols-1 gap-6", {
              "sm:grid-cols-2 lg:grid-cols-3": !!movies.length,
            })}>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </ul>

          <MoviePagination paginatedMovieMetadata={movieMetadata} />
        </>
      ) : (
        <Placeholder label="No movies found" />
      )}
    </div>
  );
};
