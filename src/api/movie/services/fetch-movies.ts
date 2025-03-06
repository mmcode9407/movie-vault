"use server";

import axiosClient from "@/lib/axios/axios-client";

import type { GetMoviesResponse } from "../types";

export const fetchMovies = async (genre: string) => {
  return (
    await axiosClient.get<GetMoviesResponse>("/discover/movie", {
      params: {
        with_genres: genre,
      },
    })
  ).data;
};
