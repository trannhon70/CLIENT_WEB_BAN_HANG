import { AuthContext } from "@/context/AuthContext";
import { IAddress } from "@/interfaces";
import { useAppSelector } from "@/redux/store";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import DrawerChooseAddress from "./DrawerChooseAddress";
import { initDrawerAddress } from "@/contants/common";
import DrawerAddress from "../Profile/DrawerAddress";

type Props = {
  address: any;
  setAddress: (e: any) => void;
};

function InfoPayment({ address, setAddress }: Props) {
  const { user } = useContext(AuthContext);
  const { addresses } = useAppSelector((state) => state.user);

  const [drawerChooseAddress, setDrawerChooseAddress] = useState(false);
  const [drawerAddAddress, setDrawerAddAddress] = useState(initDrawerAddress);

  useEffect(() => {
    setAddress(addresses?.find((item) => item?.isDefault) || addresses?.[0]);
  }, [addresses]);

  return (
    <div>
      <img src="/images/banner-payment.png" className="w-full h-auto" />

      <div className="mt-6 flex items-center font-semibold gap-2">
        <Link href={"/gio-hang"} className="text-orangeFF">
          Giỏ hàng
        </Link>
        <div>/</div>
        <div> Thông tin giao hàng</div>
      </div>

      <div className="font-semibold mt-6">Thông tin giao hàng</div>

      {/* avatar, name */}
      {/* <div className="mt-4 flex items-center gap-4">
        <img src={user?.avatar} className="w-[50px] h-[50px] rounded-[8px]" />

        <div className="text-sm">
          <div className="">
            {user?.fullName || "Trống"} ({user?.phoneNumber})
          </div>
          <div className="text-sm text-orangeFF mt-1 cursor-pointer font-semibold">
            Đăng xuất
          </div>
        </div>
      </div> */}

      {/* address */}
      {address ? (
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="p-3 rounded-full bg-[#EDF0F3]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Huge-Icon/ecommerce/solid/location">
                  <g id="location">
                    <g id="Subtract">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 22.1279C15.375 22.1279 21 15.926 21 11.0168C21 6.10762 16.9706 2.12793 12 2.12793C7.02944 2.12793 3 6.10762 3 11.0168C3 15.926 8.625 22.1279 12 22.1279ZM12 14.1279C13.6569 14.1279 15 12.7848 15 11.1279C15 9.47108 13.6569 8.12793 12 8.12793C10.3431 8.12793 9 9.47108 9 11.1279C9 12.7848 10.3431 14.1279 12 14.1279Z"
                        fill="#5C5F62"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="pr-2 border-e font-semibold text-sm">
                  {address?.username}
                </div>
                <div>{address?.phoneNumber}</div>
                {address?.isDefault && (
                  <div className="px-2 py-1 text-xs rounded-[4px] border border-orangeFF text-orangeFF bg-[#FFF0E6]">
                    Mặc định
                  </div>
                )}
              </div>
              <div className="text-sm text-secondary mt-1">
                {address?.address}, {address?.ward?.path_with_type}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => setDrawerChooseAddress(true)}
              className="text-sm text-[#2E9ED5]"
            >
              Thay đổi
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 mt-4">
          <div className="p-3 rounded-full bg-[#EDF0F3]">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-Icon/ecommerce/solid/location">
                <g id="location">
                  <g id="Subtract">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 22.1279C15.375 22.1279 21 15.926 21 11.0168C21 6.10762 16.9706 2.12793 12 2.12793C7.02944 2.12793 3 6.10762 3 11.0168C3 15.926 8.625 22.1279 12 22.1279ZM12 14.1279C13.6569 14.1279 15 12.7848 15 11.1279C15 9.47108 13.6569 8.12793 12 8.12793C10.3431 8.12793 9 9.47108 9 11.1279C9 12.7848 10.3431 14.1279 12 14.1279Z"
                      fill="#5C5F62"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <div className="text-orangeFF text-base font-semibold cursor-pointer">
            Chọn địa chỉ
          </div>
        </div>
      )}

      {/* input information */}
      {/* <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <input
            placeholder="Họ và tên"
            className="h-[40px] border rounded-[8px] w-full text-sm px-[14px] outline-none text-secondary"
          />
        </div>

        <div className="col-span-1">
          <input
            placeholder="Số điện thoại"
            className="h-[40px] border rounded-[8px] w-full text-sm px-[14px] outline-none text-secondary"
          />
        </div>

        <div className="col-span-1">
          <select
            placeholder="Tỉnh/thành"
            className="h-[40px] border rounded-[8px] w-full text-sm px-[14px] outline-none text-secondary"
          >
            <option value="" disabled selected>
              Tỉnh/thành
            </option>
          </select>
        </div>

        <div className="col-span-1">
          <select
            placeholder="Quận/huyện"
            className="h-[40px] border rounded-[8px] w-full text-sm px-[14px] outline-none text-secondary"
          >
            <option value="" disabled selected>
              Quận/huyện
            </option>
          </select>
        </div>

        <div className="col-span-2">
          <input
            placeholder="Địa chỉ cụ thể"
            className="h-[40px] border rounded-[8px] w-full text-sm px-[14px] outline-none text-secondary"
          />
        </div>
      </div> */}

      <DrawerChooseAddress
        initAddress={address}
        open={drawerChooseAddress}
        onClose={() => setDrawerChooseAddress(false)}
        setDrawerAddAddress={setDrawerAddAddress}
        handleChoose={(e: any) => {
          setAddress(e);
          setDrawerChooseAddress(false);
        }}
      />

      <DrawerAddress
        drawer={drawerAddAddress}
        setDrawer={setDrawerAddAddress}
      />
    </div>
  );
}

export default InfoPayment;
