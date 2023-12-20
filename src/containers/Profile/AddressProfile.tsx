import React, { useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { useAppSelector } from "@/redux/store";
import DrawerAddress from "./DrawerAddress";
import { initDrawerAddress } from "@/contants/common";

function AddressProfile() {
  const { addresses } = useAppSelector((state) => state.user);
  const [drawer, setDrawer] = useState(initDrawerAddress);

  return (
    <div>
      <div className="font-semibold text-[20px]">Sổ địa chỉ</div>
      {/* button add address */}
      <div className="mt-4 bg-white shadow rounded-[10px]">
        {addresses?.map((item) => (
          <div className="w-full p-4 border-b flex items-center gap-4">
            <div className="shadow w-[48px] h-[48px] rounded-full bg-[#EDF0F3] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 10.1503V17.9668C21 20.1943 19.2091 22 17 22H7C4.79086 22 3 20.1943 3 17.9668V10.1503C3 8.93937 3.53964 7.7925 4.46986 7.02652L9.46986 2.90935C10.9423 1.69689 13.0577 1.69688 14.5301 2.90935L19.5301 7.02652C20.4604 7.7925 21 8.93937 21 10.1503ZM15.25 17.25V19.5C15.25 20.0523 14.8023 20.5 14.25 20.5H9.75C9.19772 20.5 8.75 20.0523 8.75 19.5V17.25C8.75 15.4551 10.2051 14 12 14C13.7949 14 15.25 15.4551 15.25 17.25Z"
                  fill="#5C5F62"
                />
              </svg>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <div className="text-sm font-semibold pr-2 border-r">
                  {item?.username}
                </div>
                <div className="text-secondary text-sm">
                  {item?.phoneNumber}
                </div>
                {item?.isDefault && (
                  <div
                    className="px-2 py-1 border border-orangeFF text-sm font-semibold text-orangeFF rounded-[4px]"
                    style={{ background: "rgba(255, 102, 0, 0.1)" }}
                  >
                    Mặc định
                  </div>
                )}
              </div>
              <div className="text-secondary text-sm">
                {`${item?.address}, ${item?.ward?.path_with_type}`}
              </div>
            </div>
          </div>
        ))}
        <div className="p-4 flex items-center gap-4">
          <button
            className="w-[48px] h-[48px] bg-orangeFF flex items-center justify-center rounded-full"
            onClick={() => {
              setDrawer({
                ...initDrawerAddress,
                open: true,
              });
            }}
          >
            <PiPlusBold className="text-white" size={20} />
          </button>

          <div className="font-semibold">Thêm địa chỉ mới</div>
        </div>
      </div>

      {/* add address */}
      <DrawerAddress drawer={drawer} setDrawer={setDrawer} />
    </div>
  );
}

export default AddressProfile;
