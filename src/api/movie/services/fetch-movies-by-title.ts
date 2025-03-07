"use server";

import axiosClient from "@/lib/axios/axios-client";

import type { GetMoviesResponse } from "../types";

export const fetchMoviesByTitle = async (title: string, page: number) => {
  return (
    await axiosClient.get<GetMoviesResponse>("/search/movie", {
      params: {
        query: title,
        page,
      },
    })
  ).data;
};
