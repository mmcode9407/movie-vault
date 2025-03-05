"use server";

import axiosClient from "@/lib/axios/axios-client";

import type { GetMoviesResponse } from "../types";

export const fetchMovies = async () => {
  return (await axiosClient.get<GetMoviesResponse>("/discover/movie")).data;
};
