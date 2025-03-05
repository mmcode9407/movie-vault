import type { InternalAxiosRequestConfig } from "axios";

export const requestInterceptors = async (
  config: InternalAxiosRequestConfig,
) => {
  config.headers.Authorization = `Bearer ${process.env.REST_API_KEY}`;

  const result = {
    ...config,
    withCredentials: true,
  };

  return result;
};
