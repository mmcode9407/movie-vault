import { cache } from "react";

import { fetchMovieCredits } from "../services/fetch-movie-credits";

export const getMovieCredits = cache(async (movieId: string) => {
  try {
    const movieCreditsResp = await fetchMovieCredits(movieId);

    return {
      cast: movieCreditsResp.cast,
      crew: movieCreditsResp.crew,
    };
  } catch (error) {
    console.error("Error fetching movie", error);
    return {
      cast: [],
      crew: [],
    };
  }
});
