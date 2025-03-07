"use server";

import axiosClient from "@/lib/axios/axios-client";

import type { GetGenresResponse } from "../types";

export const fetchGenres = async () => {
  return (await axiosClient.get<GetGenresResponse>("/genre/movie/list")).data;
};
