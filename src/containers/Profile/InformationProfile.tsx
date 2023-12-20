import { Gender, logoLoading } from "@/contants/common";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/legacy/image";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUser } from "@/apis/user";
import useShowToast from "@/hooks/useShowToast";

const InformationItem = ({ title, value }: { title: any; value: string }) => {
  return (
    <div className="py-4 border-b flex items-center justify-between w-full text-sm">
      <div>{title}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
};

const InformationUpdateItem = ({
  title,
  children,
}: {
  title: any;
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-4 w-full text-sm">
      <div className="mb-2">{title}</div>
      {children}
    </div>
  );
};

const schema = yup
  .object({
    fullname: yup.string().required("Họ và tên không hợp lệ"),
  })
  .required();

function InformationProfile() {
  const { user, updateAuthUser } = useContext(AuthContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isActing, setIsActing] = useState(false);
  const [gender, setGender] = useState(Gender.NONE);
  const showToast = useShowToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("fullname", user?.fullname);
    setGender(user?.gender || "");
  }, [user]);

  const onSubmit = async (data: any) => {
    try {
      setIsActing(true);

      const body = {
        fullname: data?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        gender,
      };

      const result = await updateUser(user?.id, body);
      if (result?.data?.status === 1) {
        updateAuthUser(result.data?.result);
        showToast("success", "Cập nhật thông tin thành công");
        setIsUpdating(false);
      } else {
        showToast("error", "Cập nhật thông tin thất bại");
      }
    } catch (error) {
      console.log(error);
      showToast("error", "Cập nhật thông tin thất bại");
    } finally {
      setIsActing(false);
    }
  };

  return (
    <div className="bg-white rounded-[10px]">
      <div className="p-4 border-b border-[#E1E3E5] font-semibold text-[20px]">
        Thông tin tài khoản
      </div>
      <div className="py-6 px-4 lg:px-4 grid grid-cols-9">
        <div className="col-span-9 lg:col-start-3 lg:col-span-5">
          {!isUpdating ? (
            <div className="flex flex-col items-center w-full">
              <div className="mb-6 wrapper-image-legacy">
                <Image
                  src={user?.avatar}
                  alt=""
                  width={90}
                  height={90}
                  className="w-full rounded-full"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={logoLoading}
                />
              </div>

              <InformationItem
                title={"Họ và tên"}
                value={user?.fullname || "Trống"}
              />
              <InformationItem
                title={"Số điện thoại"}
                value={user?.phoneNumber || "Trống"}
              />
              <InformationItem title={"Email"} value={user?.email || "Trống"} />
              <InformationItem
                title={"Giới tính"}
                value={user?.gender || "Trống"}
              />

              <button
                onClick={() => setIsUpdating(true)}
                className="py-2 px-4 text-white font-semibold text-sm bg-orangeFF mt-6 rounded-[8px]"
              >
                Chỉnh sửa thông tin
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col items-center w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6 wrapper-image-legacy">
                <Image
                  src={user?.avatar}
                  alt=""
                  width={90}
                  height={90}
                  className="w-full rounded-full"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={logoLoading}
                />
              </div>

              <InformationUpdateItem title={"Họ và tên"}>
                <input
                  placeholder="Nhập họ và tên"
                  className="outline-none w-full border rounded-[8px] px-3 py-2"
                  {...register("fullname")}
                />
                <div className="text-sm mt-1 text-red">
                  {errors?.fullname?.message}
                </div>
              </InformationUpdateItem>

              <InformationUpdateItem title={"Số điện thoại"}>
                <input
                  placeholder="Nhập số điện thoại"
                  disabled
                  className="outline-none w-full border rounded-[8px] px-3 py-2"
                  value={user?.phoneNumber}
                />
              </InformationUpdateItem>

              <InformationUpdateItem title={"Email"}>
                <input
                  placeholder="Nhập email"
                  disabled
                  className="outline-none w-full border rounded-[8px] px-3 py-2"
                  value={user?.email}
                />
              </InformationUpdateItem>

              <InformationUpdateItem title={"Giới tính"}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={gender === Gender.MALE}
                    onChange={() => setGender(Gender.MALE)}
                  />
                  <label>Nam</label>

                  <input
                    type="radio"
                    className="ml-4"
                    checked={gender === Gender.FEMALE}
                    onChange={() => setGender(Gender.FEMALE)}
                  />
                  <label>Nữ</label>
                </div>
              </InformationUpdateItem>

              <button
                type="submit"
                className="py-2 px-4 text-white font-semibold text-sm bg-orangeFF mt-6 rounded-[8px] button-action"
                disabled={isActing}
              >
                Cập nhật thông tin
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default InformationProfile;
