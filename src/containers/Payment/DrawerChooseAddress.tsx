import { initDrawerAddress } from "@/contants/common";
import { IAddress } from "@/interfaces";
import { useAppSelector } from "@/redux/store";
import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";

type Props = {
  open: boolean;
  onClose: () => void;
  handleChoose: (e: any) => void;
  initAddress: IAddress | any;
  setDrawerAddAddress: (e: any) => void;
};

function DrawerChooseAddress({
  onClose,
  open,
  handleChoose,
  initAddress,
  setDrawerAddAddress,
}: Props) {
  const [address, setAddress] = useState<IAddress>();
  const { addresses } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (open) {
      setAddress(initAddress);
    }
  }, [initAddress, open]);

  return (
    <Drawer
      title="Chọn địa chỉ nhận hàng"
      placement={"right"}
      closable
      className="drawer-address-profile"
      onClose={onClose}
      open={open}
    >
      <div className="relative min-h-full">
        <div className="px-0">
          {addresses?.map((item) => (
            <div
              className="w-full p-4 border-b flex items-center gap-4 bg-white cursor-pointer"
              onClick={() => setAddress(item)}
            >
              <div className="shadow min-w-[48px] h-[48px] rounded-full bg-[#EDF0F3] flex items-center justify-center">
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
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="text-sm font-semibold pr-2 border-r">
                      {item?.username}
                    </div>
                    <div className="text-secondary text-sm">
                      {item?.phoneNumber}
                    </div>
                  </div>

                  {address?.id === item?.id && (
                    <BsFillCheckCircleFill
                      size={18}
                      className="text-orangeFF"
                    />
                  )}
                </div>
                <div className="text-secondary text-sm">
                  {`${item?.address}, ${item?.ward?.path_with_type}`}
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
            </div>
          ))}
          <div className="p-4 flex items-center gap-4 bg-white">
            <button
              className="w-[48px] h-[48px] bg-orangeFF flex items-center justify-center rounded-full"
              onClick={() => {
                onClose();
                setDrawerAddAddress({
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

        <div
          className="bg-white p-4 absolute bottom-0 left-0 w-full"
          style={{
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }}
        >
          <button
            onClick={() => handleChoose(address)}
            className="bg-orangeFF button-action w-full py-2 text-[16px] font-semibold text-white text-center rounded-[8px]"
          >
            Sử dụng
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerChooseAddress;
