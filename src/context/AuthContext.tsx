"use client";

import { login, register } from "@/apis/user";
import { IUser } from "@/interfaces";
import { getInitListCart, initAddress, updateListCart } from "@/redux/slices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  checkExpireToken,
  expiredSession,
  getTokenFromLocastorage,
  saveTokenToLocalStorage,
} from "@/utils";
import { setCookie } from "cookies-next";
import React, { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

// @ts-ignore
export const AuthContext = createContext<IAuthContext>();

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isRegister, setIsRegister] = useState<any>(false);
  const [isLogin, setIsLogin] = useState<any>(false);
  const [isForgetPassword, setIsForgetPassword] = useState<any>(false);

  const dispatch = useAppDispatch();

  const showLogin = () => {
    setIsLogin(true);
    setIsRegister(false);
    setIsForgetPassword(false);
  };

  const showRegister = () => {
    setIsLogin(false);
    setIsRegister(true);
    setIsForgetPassword(false);
  };

  const showForgetPassword = () => {
    setIsLogin(false);
    setIsRegister(false);
    setIsForgetPassword(true);
  };

  const authUser = async (username: string, password: string) => {
    try {
      setError(false);
      const dataLogin = {
        phoneNumber: username,
        password,
      };
      const res = await login(dataLogin);
      if (res?.data?.status === 1) {
        saveTokenToLocalStorage(res?.data?.result?.accessToken);
        setCookie("refreshToken", res?.data?.result?.refreshToken);
        localStorage.setItem(
          "authUser",
          JSON.stringify(res?.data?.result?.user)
        );
        setUser(res?.data?.result?.user);
        return { success: true };
      }
    } catch (error: any) {
      if (error?.response?.data?.statusCode === 401) {
        setError(error?.response?.data?.message);
        return { success: false, message: error?.response?.data?.message };
      }
    }
  };

  const registerUser = async (
    fullname: string,
    phone_number: string,
    email: string,
    password: string
  ) => {
    try {
      setError(false);
      const dataRegister = {
        fullname,
        phoneNumber: phone_number,
        password,
        email,
        address: "",
      };
      const res = await register(dataRegister);
      if (res?.data?.status === 1) {
        // saveTokenToLocalStorage(res?.data?.result?.accessToken);
        // setCookie(
        //   "refreshToken",
        //   JSON.stringify(res?.data?.result?.refreshToken)
        // );
        // localStorage.setItem(
        //   "authUser",
        //   JSON.stringify(res?.data?.result)
        // );
        // setUser(res?.data?.result);
      }
      return { success: true };
    } catch (error: any) {
      if (error?.response?.data?.statusCode === 400) {
        setError(error?.response?.data?.message);
        return { success: false, message: error?.response?.data?.message };
      }
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authUser");
    setUser(null);
  };

  const updateAuthUser = (user: IUser) => {
    localStorage.setItem("authUser", JSON.stringify(user));
    setUser(user);
  };

  const provider = {
    user,
    setUser,
    authUser,
    registerUser,
    error,
    setError,
    logOutUser,
    isLogin,
    isRegister,
    isForgetPassword,
    setIsLogin,
    setIsForgetPassword,
    setIsRegister,
    showLogin,
    showForgetPassword,
    showRegister,
    updateAuthUser,
  };

  useEffect(() => {
    const token = getTokenFromLocastorage();
    const checkToken = checkExpireToken(token);
    if (checkToken && localStorage.getItem("authUser")) {
      setUser(JSON.parse(localStorage.getItem("authUser") as string));
    } else {
      expiredSession();
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getInitListCart());
      dispatch(initAddress());
    } else {
      dispatch(updateListCart([]));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
