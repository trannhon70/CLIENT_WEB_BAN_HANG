"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { MainMenu } from "@/app/components/menu";
import Link from "next/link";
import ModalLogin from "@/containers/Auth/ModalLogin";
import { AuthContext } from "@/context/AuthContext";
import ModalRegister from "@/containers/Auth/ModalRegister";
import ModalForgotPassword from "@/containers/Auth/ModalForgotPassword";
import CartBox from "../../cart-box";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getListCategoriesHome } from "@/redux/slices/productSlice";
import useShowToast from "@/hooks/useShowToast";
import { useRouter } from "next/navigation";

const Header = () => {
  const {
    isLogin,
    showLogin,
    isRegister,
    showRegister,
    isForgetPassword,
    user,
    setIsLogin,
    setIsRegister,
    setIsForgetPassword,
    logOutUser,
  } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const { listCart } = useAppSelector((state) => state.order);
  const showToast = useShowToast();
  const router = useRouter();

  useEffect(() => {
    dispatch(getListCategoriesHome());
  }, []);

  const handleClickOutside = (event: any) => {
    // console.log(`vao day`);
    const menuTaskbar = document.querySelector("#menu-taskbar");
    const iconBarsMenu = document.querySelector("#icon-bars-menu");
    const mainMenu = document.querySelector("#main-menu");

    // Kiểm tra xem sự kiện click có xuất phá từ bên trong #iconBarsMenu hay không
    // @ts-ignore
    if (iconBarsMenu.contains(event.target)) {
      // console.log(`vao day 001`);
      // @ts-ignore
      menuTaskbar.style.left = "0";
    } else {
      // console.log(`vao day 002`);

      // @ts-ignore
      if (!mainMenu.contains(event.target)) {
        // console.log(`vao day 003`);

        // @ts-ignore
        menuTaskbar.style.left = "-100%";
      } else {
        // console.log(`vao day 004`);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const goToCart = () => {
    if (user) {
      router.push("/gio-hang");
    } else {
      showToast("warning", "Bạn chưa đăng nhập");
    }
  };

  return (
    <>
      <div>
        <div className="hidden lg:block header-top-bar h-16 w-full bg-no-repeat bg-center bg-cover overflow-hidden"></div>
        <div className="header-nav-bar">
          <div className="container mx-auto pt-4 pb-0 sm:pb-4">
            <div className="flex justify-between items-center pl-4 lg:pl-0">
              <div id="icon-bars-menu" className="min-w-[22px] lg:hidden">
                <Image
                  src="/images/bar-menu.svg"
                  alt=""
                  height={22}
                  width={22}
                />
              </div>
              <Link
                href={"/"}
                className="header-nav-bar-left header-nav-bar-logo h-[80px] lg:h-[80px] w-[148px] sm:w-[282px]"
              >
                <Image
                  alt="Đảo hải sản"
                  src="/images/logo-header.png"
                  height={80}
                  width={282}
                  className="h-full w-full"
                />
              </Link>
              <div className="header-nav-bar-right flex gap-8">
                {/* Hot line */}
                <div className="box hidden lg:flex">
                  <div className="pt-1">
                    <Image
                      alt=""
                      src="/images/call.svg"
                      height={24}
                      width={24}
                    />
                  </div>
                  <div className="">
                    <p className="text-fs28 font-semibold leading-9 not-italic text-[#FBEB5B]">
                      1900&nbsp;0098
                    </p>
                    <p className="text-mainFF text-sm font-normal not-italic leading-22">
                      {"(8h-21h từ T2-Chủ nhật)"}
                    </p>
                  </div>
                </div>
                {/* Giao hành 2h */}
                <div className="box hidden lg:flex items-center gap-2">
                  <Image alt="" src="/images/bars.svg" height={16} width={22} />
                  <p className="text-fs28 font-semibold leading-9 not-italic text-[#FBEB5B]">
                    Giao hàng 2H
                  </p>
                </div>
                {/* Tài khoản của tôi */}
                <div className="box hidden lg:flex items-center gap-2">
                  <div className="mt-[-18px]">
                    <Image
                      alt=""
                      src={user ? user?.avatar : "/images/user.svg"}
                      className={user ? "rounded-full" : ""}
                      height={user ? 32 : 24}
                      width={user ? 32 : 24}
                    />
                  </div>
                  <div className="">
                    {user ? (
                      <Link
                        href={"/tai-khoan-cua-toi"}
                        className="text-mainFF text-sm font-semibold leading-22 truncate max-w-[100px]"
                      >
                        {user?.fullname}
                      </Link>
                    ) : (
                      <p className="text-mainFF text-sm font-semibold leading-22">
                        TÀI KHOẢN CỦA TÔI
                      </p>
                    )}
                    {user ? (
                      <p className="text-mainFF text-xs leading-5">
                        <span
                          onClick={() => {
                            logOutUser();
                            showToast(
                              "success",
                              "Đăng xuất tài khoản thành công!"
                            );
                          }}
                          className="cursor-pointer"
                        >
                          Đăng xuất
                        </span>
                      </p>
                    ) : (
                      <p className="text-mainFF text-xs leading-5">
                        {" "}
                        <span onClick={showLogin} className="cursor-pointer">
                          Đăng nhập
                        </span>{" "}
                        /{" "}
                        <span onClick={showRegister} className="cursor-pointer">
                          Đăng ký
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                {/* Giỏ hàng */}
                <div className="relative cart-box-wrapper">
                  <div
                    className="box flex flex-col items-center justify-center relative cursor-pointer"
                    onClick={goToCart}
                  >
                    <div className="w-fit">
                      <Image
                        alt=""
                        src="/images/bag.svg"
                        height={24}
                        width={24}
                      />
                      <div className="absolute -top-2 -right-2 flex justify-center items-center lg:top-0 lg:right-[5px] w-[18px] rounded-full px-1 py-0.5 text-center text-fs10 font-medium text-mainFF bg-[#D72C0D]">
                        {listCart?.length || 0}
                      </div>
                    </div>
                    <p className=" hidden lg:block text-mainFF text-xs leading-5 ">
                      {" "}
                      Giỏ hàng
                    </p>
                  </div>

                  <CartBox />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* menu taskbar */}
        <div
          className="absolute top-0 -left-full z-[9999] min-h-[100vh] max-h-[100vh]  w-full overflow-y-scroll"
          id="menu-taskbar"
          style={{
            background: "rgba(0,0,0,.6)",
            transition: ".3s",
          }}
        >
          <div id="main-menu"></div>
          <MainMenu barMenu={true} />
        </div>
      </div>

      <ModalLogin open={isLogin} onClose={() => setIsLogin(false)} />
      <ModalRegister open={isRegister} onClose={() => setIsRegister(false)} />
      <ModalForgotPassword
        open={isForgetPassword}
        onClose={() => setIsForgetPassword(false)}
      />
    </>
  );
};

export default Header;
