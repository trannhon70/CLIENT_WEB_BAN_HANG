import { altLogo } from "@/contants/common";
import useClickOutSide from "@/hooks/useClickOutSide";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ToggleSwitch from "@/app/components/switch";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";
import useShowToast from "@/hooks/useShowToast";

type Props = {
  open: boolean;
  onClose: () => void;
};

const schema = yup
  .object({
    fullname: yup.string().required("Chưa nhập họ và tên"),
    email: yup.string().email("Email không hợp lệ"),
    phone_number: yup
      .string()
      .required("Chưa nhập số điện thoại")
      .matches(/^(0\d{9,10})$/, {
        message: "Số điện thoại không hợp lệ",
      }),
    password: yup
      .string()
      .required("Chưa nhập mật khẩu")
      .matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])(.{6,20})$/, {
        message: "Mật khẩu không hợp lệ",
      }),
    re_password: yup.string(),
  })
  .required();

function ModalRegister({ onClose, open }: Props) {
  const { showLogin, registerUser } = useContext(AuthContext);
  const ref = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const showToast = useShowToast();
  useClickOutSide(ref, () => onClose());

  const onSubmit = async (data: any) => {
    try {
      if (data?.password !== data?.re_password) {
        setError("re_password", {
          message: "Xác nhận mật khẩu không khớp",
        });

        return;
      }
      clearErrors("re_password");

      const result = await registerUser(
        data?.fullname,
        data?.phone_number,
        data?.email,
        data?.password
      );
      if (result?.success) {
        showToast("success", "Đăng ký tài khoản thành công!");
        onClose();
      } else {
        showToast("error", "Đăng ký tài khoản thất bại!");
      }
    } catch (error) {
      showToast("error", "Đăng ký tài khoản thất bại!");
    }
  };

  return (
    <div className={`c-modal ${open ? "block" : "hidden"}`}>
      <div
        className="c-modal-wrapper w-[340px] md:w-[750px] lg:w-[1000px]"
        ref={ref}
      >
        <div className="relative flex min-h-full w-full mt-[60px] lg:mt-[60px]">
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-[-20px] right-[-10px] bg-[#eee] shadow p-2 rounded-full"
          >
            <IoMdClose />
          </button>

          <div className="min-h-full hidden md:block md:w-[55%]">
            <img
              src="/images/banner-login.jpg"
              alt="banner-login"
              className="h-full w-full rounded-s-[12px]"
            />
          </div>

          <div className="w-full md:w-[45%] rounded-[12px] max-h-[700px] custom-scroll overflow-y-auto md:rounded-s-none bg-white flex flex-col px-6 py-8 items-center">
            <Image
              alt={altLogo}
              width={160}
              height={50}
              src="/images/logo-footer.png"
            />
            <div className="mt-1 font-semibold text-[22px]">ĐĂNG KÝ</div>
            <div className="mt-1 text-[14px]">
              Bạn đã có tài khoản?{" "}
              <span
                onClick={showLogin}
                className="font-semibold text-orangeFF cursor-pointer"
              >
                Đăng nhập
              </span>
            </div>

            <form className="mt-8 min-w-full" onSubmit={handleSubmit(onSubmit)}>
              {/* ho va ten */}
              <div className="flex items-center justify-between">
                <div className="text-[#202223] text-[16px] font-semibold">
                  Họ và tên
                </div>
              </div>
              <input
                {...register("fullname")}
                className="w-full mt-2 h-[40px] px-2 border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                placeholder="Nhập số điện thoại"
              />
              <div className="text-sm mt-1 text-red">
                {errors?.fullname?.message}
              </div>

              {/* email */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-[#202223] text-[16px] font-semibold">
                  Email
                </div>
              </div>
              <input
                {...register("email")}
                className="w-full mt-2 h-[40px] px-2 border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                placeholder="Nhập email"
              />
              <div className="text-sm mt-1 text-red">
                {errors?.email?.message}
              </div>

              {/* tai khoan */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-[#202223] text-[16px] font-semibold">
                  Số điện thoại
                </div>

                {/* <div className="text-sm font-semibold text-orangeFF cursor-pointer">
                  Sử dụng email
                </div> */}
              </div>
              <input
                {...register("phone_number")}
                className="w-full mt-2 h-[40px] px-2 border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                placeholder="Nhập số điện thoại"
              />
              <div className="text-sm mt-1 text-red">
                {errors?.phone_number?.message}
              </div>

              {/* Mã xác minh điện thoại di động */}
              {/* <div className="text-[#202223] text-[16px] font-semibold mt-4">
                Mã xác minh điện thoại di động
              </div>
              <div className="relative mt-2">
                <input
                  className="w-full h-[40px] pl-2 pr-[60px] border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                  placeholder="Nhập mã xác minh"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute p-0 w-fit h-fit right-[10px] top-[13px] text-orangeFF text-xs font-semibold leading-[14px]"
                >
                  Gửi mã
                </button>
              </div> */}

              {/* mat khau */}
              <div className="text-[#202223] text-[16px] font-semibold mt-4">
                Mật khẩu
              </div>
              <div className="relative mt-2">
                <input
                  {...register("password")}
                  type={!showPassword ? `password` : "text"}
                  className="w-full h-[40px] pl-2 pr-[40px] border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                  placeholder="Nhập mật khẩu"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute p-0 w-fit h-fit right-[10px] top-[10px] text-[#28303F]"
                >
                  {showPassword ? (
                    <BsEye size={20} />
                  ) : (
                    <BsEyeSlash size={20} />
                  )}
                </button>
              </div>
              <div className="text-sm mt-1 text-red">
                {errors?.password?.message}
              </div>
              <ul className="mt-2 text-sm text-[#777]">
                <li className="mb-1">
                  - Phải chứa số, chữ cái và ký tự đặc biệt
                </li>
                <li>- Phải từ 6-20 ký tự</li>
              </ul>

              {/* Xác nhận mật khẩu */}
              <div className="text-[#202223] text-[16px] font-semibold mt-4">
                Xác nhận mật khẩu
              </div>
              <div className="relative mt-2">
                <input
                  {...register("re_password")}
                  type={!showPassword ? `password` : "text"}
                  className="w-full h-[40px] pl-2 pr-[40px] border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                  placeholder="Xác nhận mật khẩu"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute p-0 w-fit h-fit right-[10px] top-[10px] text-[#28303F]"
                >
                  {showPassword ? (
                    <BsEye size={20} />
                  ) : (
                    <BsEyeSlash size={20} />
                  )}
                </button>
              </div>
              <div className="text-sm mt-1 text-red">
                {errors?.re_password?.message}
              </div>

              <button
                type="submit"
                className="mt-4 bg-orangeFF w-full text-white py-[10px] px-[18px] rounded-[8px] font-semibold"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRegister;
