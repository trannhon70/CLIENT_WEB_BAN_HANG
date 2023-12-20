import { AuthContext } from "@/context/AuthContext";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useMemo, useState } from "react";

const MainMenu = ({ barMenu }: any) => {
  const { showLogin, showRegister, user, logOutUser } = useContext(AuthContext);
  const { categories } = useAppSelector((state) => state.product);

  const menuItems = [
    {
      title: "BÁN CHẠY NHẤT",
      icon: "fire.svg",
    },
    {
      title: "KHUYẾN MÃI",
      icon: "sale.svg",
    },
    {
      title: "100% Tươi Sống",
      icon: "tuoi-song.svg",
    },
    {
      title: "Sushi & Sashimi Deli",
      icon: "sushi.svg",
    },
    {
      title: "Hải Sản Đông Lạnh",
      icon: "dong_lanh.svg",
    },
    {
      title: "Hải sản nhập khẩu",
      icon: "plane.svg",
    },
    {
      title: "Cá hồi",
      icon: "ca_hoi.svg",
      slug: "ca",
    },
    {
      title: "Ngao, Sò, Ốc",
      icon: "ngao.svg",
    },
    {
      title: "Cua - Ghẹ",
      icon: "cua.svg",
      slug: "cua",
    },
    {
      title: "Tôm Các Loại",
      icon: "tom.svg",
      slug: "tom",
    },
    {
      title: "Cá",
      icon: "ca.png",
    },
    {
      title: "Mực",
      icon: "muc.svg",
    },
    {
      title: "Ready To Eat/Cool",
      icon: "eat.svg",
    },
    {
      title: "Gia Vị - Sốt",
      icon: "sot.svg",
    },
  ];

  return (
    <>
      <ul className="w-[302px] min-w-[302px] min-h-[100vh] sm:min-h-0 max-h[100vh] bg-mainFF pb-12 sm:pb-0">
        <li
          className={`border-b bg-[#FF6100]  py-2 px-3 ${
            barMenu ? "block" : "hidden"
          }`}
        >
          <div className="flex gap-3 items-center">
            {/* <Image src={`/images/icon-menu/sot.svg`} height={24} width={24} alt='' quality={25} /> */}
            {user ? (
              <div>
                <div className="flex items-center gap-x-2">
                  <Image
                    alt=""
                    src={user ? user?.avatar : "/images/user.svg"}
                    className={user ? "rounded-full" : ""}
                    height={user ? 32 : 24}
                    width={user ? 32 : 24}
                  />
                  <div>
                    <Link
                      href={"/tai-khoan-cua-toi"}
                      className="text-mainFF text-sm font-semibold"
                    >
                      {user?.fullname}
                    </Link>
                    <p
                      className="text-mainFF text-xs mt-1"
                      onClick={logOutUser}
                    >
                      Đăng xuất
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-mainFF text-sm font-semibold  leading-22 mb-1">
                  TÀI KHOẢN CỦA TÔI
                </p>
                <p className="text-mainFF text-xs leading-5">
                  <span onClick={showLogin}>Đăng nhập</span> /{" "}
                  <span onClick={showRegister}>Đăng ký</span>{" "}
                </p>
              </div>
            )}
          </div>
        </li>
        <li
          className={`border-b border-mainEF bg-mainF4  py-2 px-3 ${
            barMenu ? "block" : "hidden"
          }`}
        >
          <div className="flex gap-3 items-center">
            <Image
              src={`/images/icon-menu/sot.svg`}
              height={24}
              width={24}
              alt=""
              quality={25}
            />
            <div>
              <p className="text-mainF2 text-base font-semibold  leading-22 mb-1">
                1900 0098
              </p>
              <p className="text-main7A text-xs leading-5">
                {"(8h-21h từ T2-Chủ Nhật)"}
              </p>
            </div>
          </div>
        </li>
        {categories?.map((item, key: number) => (
          <li key={key} className="border-b border-mainEF bg-mainF4  py-2 px-3">
            <Link
              className="flex gap-3 items-center"
              href={`/danh-muc/${item?.slug}`}
            >
              {/* <Image src={`/images/icon-menu/${item?.icon}`} height={24} width={24} alt='' quality={25} /> */}
              <img
                src={`/images/icon-menu/${
                  menuItems?.find((e) =>
                    item?.slug?.includes(e?.slug as string)
                  )?.icon || menuItems?.[0]?.icon
                }`}
                height={24}
                width={24}
                alt=""
              />
              <span className="text-main20 text-sm font-normal not-italic leading-22 ">
                {item?.name}
              </span>
            </Link>
          </li>
        ))}
        <div
          className={`text-[#000] fixed bottom-0 border-t bg-[#DADADA] border-[#DADADA] min-w-282 max-w-282 z-[888] ${
            barMenu ? "block" : "hidden"
          }`}
        >
          <div className="flex">
            <button className=" flex justify-center items-center py-3 w-[49%] text-sm gap-4">
              Gọi điện{" "}
              <Image
                src={`/images/icon-menu/sot.svg`}
                height={24}
                width={24}
                alt=""
                quality={25}
              />
            </button>
            <div className="w-px  bg-[#DADADA]"></div>
            <button className="flex justify-center items-center py-3 w-[49%]  text-sm gap-4">
              Nhắn tin{" "}
              <Image
                src={`/images/icon-menu/sot.svg`}
                height={24}
                width={24}
                alt=""
                quality={25}
              />
            </button>
          </div>
        </div>
      </ul>
    </>
  );
};

export default MainMenu;
