import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { SeeMore } from "../../button";
const listItem = [
  {
    icon: <FiPhone size={24} />,
    name: "Số điện thoại",
    value: "1900.0098",
  },
  {
    icon: <AiOutlineMail size={24} />,
    name: "Email",
    value: "contact@daohaisan.vn",
  },
  {
    icon: <HiOutlineLocationMarker size={24} />,
    name: "Địa chỉ",
    value: "12A Núi Thành, P13, Tân Bình, TPHCM",
  },
  {
    icon: <HiOutlineShoppingBag size={24} />,
    name: "Mã số doanh nghiệp",
    value: "0313566925",
  },
];
const listfooter = [
  {
    name: "THÔNG TIN",
    list: [
      {
        link: "/",
        title: "Góc Ẩm Thực",
      },
      {
        link: "/",
        title: "Chính Sách / Ưu Đãi",
      },
      {
        link: "/",
        title: "Hệ Thống Cửa Hàng",
      },
      {
        link: "/",
        title: "Chương Trình KHTT",
      },
      {
        link: "/",
        title: "FeedBacK",
      },
      {
        link: "/",
        title: "Tươi sống mỗi ngày",
      },
    ],
  },
  {
    name: "CHÍNH SÁCH",
    list: [
      {
        link: "/",
        title: "Đăng Ký Đại Lý/CTV",
      },
      {
        link: "/",
        title: "Giao nhận hàng",
      },
      {
        link: "/",
        title: "Hướng dẫn đặt hàng",
      },
      {
        link: "/",
        title: "Chính sách đổi trả hàng",
      },
      {
        link: "/",
        title: "Chính sách Giải quyết khiếu nại",
      },
      {
        link: "/",
        title: "Cam kết chất lượng",
      },
    ],
  },
  {
    name: "GIỚI THIỆU",
    list: [
      {
        link: "/",
        title: "Về ĐẢO HẢI SẢN",
      },
      {
        link: "/",
        title: "Hướng dẫn đặt hàng",
      },
      {
        link: "/",
        title: "Chính sách bảo mật",
      },
      {
        link: "/",
        title: "Liên hệ",
      },
      {
        link: "/tuyen-dung",
        title: "Tuyển dụng",
      },
      {
        link: "/team-va-truyen-thong",
        title: "Team & truyền thông",
      },
    ],
  },
  {
    name: "SẢN PHẨM BÁN CHẠY",
    list: [
      {
        link: "/",
        title: "Tôm",
      },
      {
        link: "/",
        title: "Cua, ghẹ",
      },

      {
        link: "/",
        title: "Cá",
      },
      {
        link: "/",
        title: "Mực",
      },
      {
        link: "/",
        title: "Ốc các loại",
      },
      {
        link: "/",
        title: "Hải sản đông lạnh",
      },
    ],
  },
];
const listSocial = [
  {
    url: "/images/Facebook.png",
  },
  {
    url: "/images/youtube.png",
  },
  {
    url: "/images/zalo.png",
  },
  {
    url: "/images/instagram.png",
  },
  {
    url: "/images/tiktok.png",
  },
];

const listPayment = [
  {
    url: "/images/vnpay.png",
  },
  {
    url: "/images/visa.png",
  },
  {
    url: "/images/momo.png",
  },
  {
    url: "/images/ck.png",
  },
  {
    url: "/images/atm.png",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#F2F2F2] pt-10 mt-8">
      <div className="container max-w-[1200px]">
        <div className="w-[200px] lg:w-[282px] h-[120px] relative mb-5 lg:mb-10">
          <Image
            src="/images/logo-footer.png"
            className="w-full h-full"
            fill
            alt=""
          />
        </div>
        <div>
          <div className="grid grid-cols-4 justify-between gap-y-5 w-full">
            {listItem.map((item, index) => (
              <div className="col-span-2 lg:col-span-1">
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 ">{item.icon}</div>
                  <div className="flex flex-col flex-wrap">
                    <span className="lg:text-base text-sm">{item.name}</span>
                    <p className="text-orangeFF lg:text-base font-medium text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex  justify-between w-full py-10 border-b flex-wrap  ">
          {listfooter.map((item, index) => (
            <div className="w-[50%] lg:w-[20%] mb-5 lg:mb-0" key={index}>
              <h4 className="uppercase text-base font-semibold pb-6">
                {item.name}
              </h4>
              <div className="flex gap-3  flex-col">
                {item.list.map((v, i) => (
                  <Link className="text-sm text-main20" key={i} href={v?.link}>
                    {v?.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="lg:w-[20%] w-full">
            <h4 className="uppercase text-base font-semibold pb-6">
              KẾT NỐI VỚI CHÚNG TÔI
            </h4>
            <div className="flex lg:flex-col flex-row items-center justify-between lg:items-start gap-6">
              <div className="flex gap-4 flex-wrap">
                {listSocial.map((item, i) => (
                  <Link key={i} href="/" className="w-8 h-8 relative">
                    <Image
                      src={item.url}
                      className="w-full h-full object-contain"
                      fill
                      alt=""
                    />
                  </Link>
                ))}
              </div>

              <Link
                href="#"
                className="block py-2.5 px-[18px] rounded-[10px] bg-mainF6 text-sm 2xl:text-base font-semibold text-mainFF"
                style={{ boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
              >
                ĐĂNG KÝ ĐẠI LÝ/CTV
              </Link>

              <div className="w-[180px] h-[68px] relative">
                <Image
                  src="/images/confirm-footer.png"
                  className="w-full h-full object-contain"
                  fill
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 items-center justify-between">
          <p className="text-main7A">© Copyright 2023, All Rights Reserved</p>
          <div className="flex items-center justify-center gap-4">
            {listPayment.map((item, index) => (
              <div key={index} className="w-10 h-10 relative">
                <Image
                  src={item.url}
                  className="w-full h-full object-contain"
                  fill
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
