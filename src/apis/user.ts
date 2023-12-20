import { IAddress } from "@/interfaces";
import { axiosInstanceNonAuth, axiosInstanceAuth } from "./instance";

export const login = (userData: any) =>
  axiosInstanceNonAuth.post("/auth/users/login", userData);

export const register = (data: any) =>
  axiosInstanceNonAuth.post("/auth/users/register", data);

export const createAddress = (data: IAddress) =>
  axiosInstanceAuth.post("/auth/address", data);

export const getListAddresses = () => axiosInstanceAuth.get("/auth/address");

export const updateUser = (id: string, data: any) =>
  axiosInstanceAuth.put(`/auth/users/${id}`, data);
