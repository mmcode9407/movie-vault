import { cache } from "react";

import { fetchMovieById } from "../services/fetch-movie-by-id";

export const getMovieById = cache(async (movieId: string) => {
  try {
    const movieResp = await fetchMovieById(movieId);

    return movieResp;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
});
