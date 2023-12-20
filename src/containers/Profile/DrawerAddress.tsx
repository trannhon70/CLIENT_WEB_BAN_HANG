import { Drawer, Select, Switch } from "antd";
import React, { useMemo, useState } from "react";
import cities from "../../../public/data/cities.json";
import districts from "../../../public/data/districts.json";
import wards from "../../../public/data/wards.json";
import { addNewAddress } from "@/redux/slices";
import useShowToast from "@/hooks/useShowToast";
import { IAddress } from "@/interfaces";
import { useAppDispatch } from "@/redux/store";
import { initDrawerAddress } from "@/contants/common";


type Props = {
  drawer: any;
  setDrawer: (e: any) => void;
};

function DrawerAddress({ drawer, setDrawer }: Props) {
  const [isActing, setIsActing] = useState(false);
  const dispatch = useAppDispatch();
  const showToast = useShowToast();

  const districtsData = useMemo(() => {
    if (drawer?.city) {
      return districts
        ?.filter((item) => item?.parent_code === drawer?.city)
        ?.map((item) => ({
          value: item?.code,
          label: item?.name,
        }));
    }

    return [];
  }, [drawer?.city]);

  const wardsData = useMemo(() => {
    if (drawer?.district) {
      return wards
        ?.filter((item) => item?.parent_code === drawer?.district)
        ?.map((item) => ({
          value: item?.code,
          label: item?.name,
        }));
    }

    return [];
  }, [drawer?.district]);

  const handleSubmit = async () => {
    try {
      setIsActing(true);
      const {
        id,
        address,
        city,
        district,
        isDefault,
        phoneNumber,
        username,
        ward,
      } = drawer;
      if (!drawer?.id) {
        const data = {
          phoneNumber,
          username,
          ward,
          address,
          city,
          isDefault,
          district,
        };
        const result = await dispatch(addNewAddress(data as any)).unwrap();
        if (result?.status === 1) {
          showToast("success", "Thêm địa chỉ thành công");
          setDrawer(initDrawerAddress);
        } else {
          showToast("error", "Thêm địa chỉ thất bại");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsActing(false);
    }
  };

  return (
    <Drawer
      title="Thêm địa chỉ mới"
      placement={"right"}
      closable
      className="drawer-address-profile"
      onClose={() => setDrawer(initDrawerAddress)}
      open={drawer.open}
    >
      <div className="relative min-h-full">
        <div className="px-4">
          <div>Thông tin người nhận</div>
          <input
            className="mt-3 outline-none bg-white border rounded-[10px] h-[45px] px-4 w-full border-[#D0D5DD]"
            placeholder="Họ và tên"
            onChange={(e) => {
              setDrawer({
                ...drawer,
                username: e?.target?.value,
              });
            }}
          />
          <input
            className="mt-3 outline-none bg-white border rounded-[10px] h-[45px] px-4 w-full border-[#D0D5DD]"
            placeholder="Số điện thoại"
            onChange={(e) => {
              setDrawer({
                ...drawer,
                phoneNumber: e?.target?.value,
              });
            }}
          />

          <div className="mt-8">Địa chỉ nhận hàng</div>

          <Select
            className="w-full mt-3 address-profile-select"
            placeholder="Chọn Tỉnh/Thành phố"
            value={drawer?.city}
            options={cities?.map((item) => ({
              value: item?.code,
              label: item?.name,
            }))}
            onChange={(value) => {
              setDrawer({
                ...drawer,
                city: value,
                district: null,
                ward: null,
              });
            }}
            showSearch
            filterOption={(input, option) => {
              return (option?.label ?? "")?.toLowerCase()?.includes(input);
            }}
          ></Select>

          <Select
            className="w-full mt-3 address-profile-select"
            placeholder="Chọn Quận/Huyện"
            value={drawer?.district}
            options={districtsData}
            onChange={(value) => {
              setDrawer({
                ...drawer,
                district: value,
                ward: null,
              });
            }}
            showSearch
            filterOption={(input, option) => {
              return (option?.label ?? "")?.toLowerCase()?.includes(input);
            }}
          ></Select>

          <Select
            className="w-full mt-3 address-profile-select"
            placeholder="Chọn Phường/Xã"
            value={drawer?.ward}
            options={wardsData}
            onChange={(value) => {
              setDrawer({
                ...drawer,
                ward: value,
              });
            }}
            showSearch
            filterOption={(input, option) => {
              return (option?.label ?? "")?.toLowerCase()?.includes(input);
            }}
          ></Select>

          <textarea
            rows={8}
            className="resize-none mt-3 w-full outline-none border border-[#D0D5DD] rounded-[10px] px-4 py-2"
            placeholder="Nhập địa chỉ cụ thể"
            value={drawer?.address}
            onChange={(e) => {
              setDrawer({
                ...drawer,
                address: e?.target?.value,
              });
            }}
          ></textarea>

          <div className="mt-3 flex items-center justify-between w-full">
            <div>Đặt làm địa chỉ mặc định</div>
            <Switch
              checked={drawer?.isDefault}
              onChange={() => {
                setDrawer({
                  ...drawer,
                  isDefault: !drawer?.isDefault,
                });
              }}
            />
          </div>
        </div>

        <div
          className="bg-white p-4 absolute bottom-0 left-0 w-full"
          style={{
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }}
        >
          <button
            onClick={handleSubmit}
            disabled={isActing}
            className="bg-orangeFF button-action w-full py-2 text-[16px] font-semibold text-white text-center rounded-[8px]"
          >
            Lưu
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerAddress;
