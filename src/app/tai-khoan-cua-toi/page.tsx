"use client";
import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import Image from "next/legacy/image";
import { logoLoading } from "@/contants/common";
import { AuthContext } from "@/context/AuthContext";
import DiamondIcon from "../components/icons/DiamondIcon";
import UserIcon from "../components/icons/UserIcon";
import OrderIcon from "../components/icons/OrderIcon";
import AddressIcon from "../components/icons/AddressIcon";
import { FiChevronRight } from "react-icons/fi";
import LogoutIcon from "../components/icons/LogoutIcon";
import InformationProfile from "@/containers/Profile/InformationProfile";
import AddressProfile from "@/containers/Profile/AddressProfile";
import MyListOrder from "@/containers/Profile/MyListOrder";
import PointAndPromotion from "@/containers/Profile/PointAndPromotion";
import { redirect } from "next/navigation";
import useShowToast from "@/hooks/useShowToast";

const tabs = [
  {
    title: "Thông tin tài khoản",
    icon: (color: string) => <UserIcon color={color} />,
    value: 1,
  },
  {
    title: "Điểm thưởng và ưu đãi",
    icon: (color: string) => <DiamondIcon color={color} />,
    value: 2,
  },
  {
    title: "Đơn hàng của tôi",
    icon: (color: string) => <OrderIcon color={color} />,
    value: 3,
  },
  {
    title: "Sổ địa chỉ",
    icon: (color: string) => <AddressIcon color={color} />,
    value: 4,
  },
];

const TabItem = ({
  item,
  active,
  onChose = () => null,
  showIcon = false,
  color = "#ff6600",
  showBorder = true,
}: any) => {
  return (
    <div
      onClick={onChose}
      className={`cursor-pointer px-4 border-l border-l-[3px] ${
        !active || !showBorder ? "border-[transparent]" : "border-orangeFF bg-[#EDF0F3]"
      } py-3 flex items-center justify-between gap-4`}
    >
      <div className="text-white">{item?.icon(active ? color : "#000000")}</div>

      <div
        className={`flex-1 text-left text-sm font-semibold`}
        style={{
          color: active ? color : "#000000",
        }}
      >
        {item?.title}
      </div>
      {showIcon ? (
        <div>
          <FiChevronRight
            size={20}
            style={{
              color: active ? color : "#000000",
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

function ProfilePage() {
  const { user, logOutUser } = useContext(AuthContext);
  const [tab, setTab] = useState(1);
  const showToast = useShowToast();

  // useEffect(() => {
  //   if (!user) {
  //     redirect("/");
  //   }
  // }, [user]);

  const render = {
    1: <InformationProfile />,
    2: <PointAndPromotion />,
    3: <MyListOrder />,
    4: <AddressProfile />,
  };

  const handleLogout = () => {
    logOutUser();
    showToast("success", "Đăng xuất tài khoản thành công!");
  };

  return (
    <>
      <Breadcrumb
        data={[
          {
            link: "/tai-khoan-cua-toi",
            title: "Thông tin tài khoản",
          },
        ]}
      />
      <main className="bg-[#EDF0F3] pt-4 pb-12 mt-[-10px] mb-[-35px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3 mb-4">
              <div
                className="text-white rounded-[12px] pt-4 pb-8 flex items-center flex-col"
                style={{
                  background:
                    "linear-gradient(179deg, #FCE07D 0.89%, #FF800B 99.17%)",
                }}
              >
                <div className="rounded-full w-[60px] h-[60px] wrapper-image-legacy">
                  <Image
                    src={user?.avatar}
                    alt=""
                    width={60}
                    height={60}
                    className="w-full rounded-full"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={logoLoading}
                  />
                </div>

                <div className="mt-3 font-semibold">
                  {user?.fullname || "Trống"}
                </div>
                <div className="mt-2 text-white text-sm font-semibold">
                  {user?.phoneNumber}
                </div>
              </div>

              <div className="mt-4 bg-white ">
                {tabs?.map((item) => (
                  <TabItem
                    active={Boolean(item?.value === tab)}
                    item={item}
                    key={item?.value}
                    showIcon
                    onChose={() => setTab(item?.value)}
                  />
                ))}
                <TabItem
                  item={{
                    title: "Đăng xuất",
                    icon: (color: string) => <LogoutIcon color={color} />,
                  }}
                  color={"#F6484F"}
                  active
                  showBorder={false}
                  onChose={handleLogout}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9 pl-0 lg:pl-6">
              {render[tab as 1]}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default React.memo(ProfilePage);
