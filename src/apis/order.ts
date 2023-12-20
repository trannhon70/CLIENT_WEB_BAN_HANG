import { IAddCartItem, ICreateDraftOrder, IPlaceOrder } from "@/interfaces";
import { axiosInstanceAuth } from "./instance";

export const createCartItem = (data: IAddCartItem[]) =>
  axiosInstanceAuth.post("/order/cartItem", data);

export const getListCart = () => axiosInstanceAuth.get("/order/cartItem");

export const updateQuantityCartItem = (cartItem: string, data: any) =>
  axiosInstanceAuth.put(`/order/cartItem/${cartItem}`, data);

export const createDraftOrder = (data: ICreateDraftOrder) =>
  axiosInstanceAuth.post(`/order/order`, data);

export const getOrderByCode = (code: string) =>
  axiosInstanceAuth.get(`/order/order/${code}`);

export const placeOrderById = (id: string, data: IPlaceOrder) =>
  axiosInstanceAuth.post(`/order/order/place-order/${id}`, data);

export const getListOrders = (
  pageIndex: number,
  pageSize: number,
  transportStatus: string = "",
  search: string = ""
) =>
  axiosInstanceAuth.get(
    `/order/order/get-user-order?pageIndex=${pageIndex}&pageSize=${pageSize}&transportStatus=${transportStatus}&search=${search}`
  );
