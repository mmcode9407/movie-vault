import { cache } from "react";

import { fetchGenres } from "../services/fetch-genres";

export const getGenres = cache(async () => {
  try {
    const genresResp = await fetchGenres();

    return genresResp.genres;
  } catch (error) {
    console.error("Error fetching genres", error);
    return [];
  }
});
