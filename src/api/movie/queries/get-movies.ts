import { cache } from "react";

import { mapMoviesWithGenres } from "@/api/movie/utils/mapMoviesWithGenres";
import type { ParsedSearchParams } from "@/features/movie/search-params";

import { fetchGenres } from "../services/fetch-genres";
import { fetchMovies } from "../services/fetch-movies";

export const getMovies = cache(async (searchParams: ParsedSearchParams) => {
  try {
    const [movieResp, genresResp] = await Promise.all([
      fetchMovies(searchParams),
      fetchGenres(),
    ]);

    const mappedMovies = mapMoviesWithGenres(
      movieResp.results,
      genresResp.genres,
    );

    return {
      list: mappedMovies,
      metadata: {
        count: movieResp.total_results,
        hasNextPage: movieResp.page < movieResp.total_pages,
      },
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return {
      list: [],
      metadata: {
        count: 0,
        hasNextPage: false,
      },
    };
  }
});
