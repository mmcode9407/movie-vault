import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REST_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REST_API_KEY}`,
  },
});

export default axiosClient;
