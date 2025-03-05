import axios from "axios";

import { requestInterceptors } from "@/lib/axios/request-interceptors";

const axiosClient = axios.create({
  baseURL: process.env.REST_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(requestInterceptors);

export default axiosClient;
