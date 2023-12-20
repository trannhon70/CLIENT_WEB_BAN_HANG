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
import { Switch } from "antd";

type Props = {
  open: boolean;
  onClose: () => void;
};

const schema = yup
  .object({
    username: yup.string().required("Bạn chưa nhập tài khoản"),
    password: yup.string().required("Bạn chưa nhập mật khẩu"),
  })
  .required();

function ModalLogin({ onClose, open }: Props) {
  const { showRegister, showForgetPassword, authUser, error } =
    useContext(AuthContext);
  const ref = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isRemember, setIsRemember] = useState(true);

  const showToast = useShowToast();

  useClickOutSide(ref, () => onClose());

  const onSubmit = async (data: any) => {
    try {
      const result = await authUser(data?.username, data?.password);
      if (result?.success) {
        showToast("success", "Đăng nhập thành công!");
        onClose();
      }
    } catch (error) {}
  };

  return (
    <div className={`c-modal ${open ? "block" : "hidden"}`}>
      <div
        className="c-modal-wrapper w-[340px] md:w-[750px] lg:w-[1000px]"
        ref={ref}
      >
        <div className="relative flex min-h-full w-full mt-[100px] lg:mt-[150px]">
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

          <div className="w-full md:w-[45%] rounded-[12px] md:rounded-s-none bg-white flex flex-col px-6 py-8 items-center">
            <Image
              alt={altLogo}
              width={160}
              height={50}
              src="/images/logo-footer.png"
            />
            <div className="mt-1 font-semibold text-[22px]">ĐĂNG NHẬP</div>
            <div className="mt-1 text-[14px]">
              Bạn chưa có tài khoản?{" "}
              <span
                onClick={showRegister}
                className="font-semibold text-orangeFF cursor-pointer"
              >
                Đăng ký
              </span>
            </div>

            <form className="mt-8 min-w-full" onSubmit={handleSubmit(onSubmit)}>
              {/* tai khoan */}
              <div className="text-[#202223] text-[16px] font-semibold">
                Tài khoản
              </div>
              <input
                {...register("username")}
                className="w-full mt-2 h-[40px] px-2 border border-[#E0E0E0] rounded-[12px] outline-none text-[15px]"
                placeholder="Nhập số điện thoại hoặc email"
              />
              <div className="text-sm mt-1 text-red">
                {errors?.username?.message}
              </div>

              {/* mat khau */}
              <div className="text-[#202223] text-[16px] font-semibold mt-8">
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

              {/* remember and forgot */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-x-2">
                  <Switch
                    checked={isRemember}
                    onChange={() => setIsRemember(!isRemember)}
                  />

                  <div className="text-sm font-semibold">Ghi nhớ tôi</div>
                </div>

                <div
                  className="text-sm font-semibold cursor-pointer"
                  onClick={showForgetPassword}
                >
                  Quên mật khẩu
                </div>
              </div>

              <div className="text-sm mt-1 text-red text-center mt-2">
                {error}
              </div>

              <button
                type="submit"
                className="mt-4 bg-orangeFF w-full text-white py-[10px] px-[18px] rounded-[8px] font-semibold"
              >
                Đăng nhập
              </button>
            </form>

            {/* Hoặc đăng nhập với */}
            <div className="text-[#7A7A7A] text-sm mt-6">
              Hoặc đăng nhập với
            </div>

            <div className="mt-6 flex gap-4">
              <button className="border-[#F7F7F7] bg-white shadow rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <img
                  className="w-[20px] h-[20px]"
                  src="/images/icons/Google.svg"
                  alt="Google"
                />
              </button>

              <button className="border-[#F7F7F7] bg-[#4285F4] shadow rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <FaFacebookF className="w-[20px] h-[20px] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
