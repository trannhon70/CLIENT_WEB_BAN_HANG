import config from "@/config";
import { checkExpireToken, getTokenFromLocastorage } from "@/utils";
import axios from "axios";

const axiosInstanceNonAuth = axios.create({
  baseURL: config.API_URL,
});

const axiosInstanceAuth = axios.create({
  baseURL: config.API_URL,
});

axiosInstanceAuth.interceptors.request.use((config) => {
  const token = getTokenFromLocastorage();
  const checkToken = checkExpireToken(token);
  if (checkToken) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { axiosInstanceAuth, axiosInstanceNonAuth };
