"use client";
import Link from "next/link";
import React from "react";

const options = [
  {
    image: "/images/sheld.png",
    link: "/",
    title: "Thương Hiệu Hàng Đầu",
    extra: "Bán Lẻ Hải Sản",
  },
  {
    image: "/images/change.png",
    link: "/",
    title: "Đổi Trả Miễn Phí Tận Nhà",
    extra: "Nhanh & Miễn Phí",
  },
  {
    image: "/images/shopping.png",
    link: "/",
    title: "Hơn 300 Sản Phẩm Từ Hải Sản",
    extra: "Phong Phú, An Toàn, Chất Lượng",
  },
  {
    image: "/images/free.png",
    link: "/",
    title: "Giao Hàng Tận Nhà 2H",
    extra: "Hoá đơn từ 150,000đ",
  },
];

function AdviseOrder() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-[#FAFAFA] rounded-[4px] mt-4 px-3 shadow-gray">
        <div className="border-b-[#E6E6E6] border-b py-[10px]">
          TƯ VẤN ĐẶT HÀNG
        </div>

        <div className="flex items-center gap-x-2 pb-[10px]">
          <img
            src="/images/phone.png"
            className="w-[32px] h-[32px]"
            alt="Tư vấn khách hàng"
          />

          <div>
            <div className="font-semibold text-orangeFF">1900 0098</div>
            <div className="text-sm">(8h-21h từ T2-Chủ Nhật)</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-[#FAFAFA] rounded-[4px] mt-2 px-3 py-[12px] shadow-gray">
        {options?.map((item, index) => (
          <Link
            href={item?.link}
            className="flex items-center gap-x-2 py-[10px]"
            key={index}
          >
            <img
              src={item.image}
              className="w-[32px] h-[32px]"
              alt={item.title}
            />

            <div>
              <div className="font-semibold uppercase">{item?.title}</div>
              <div className="text-xs text-[#7A7A7A]">{item?.extra}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] rounded-[4px] mt-2 px-3 py-[12px] shadow-gray">
        <div>
          <img src="/images/house.png" alt="" />
        </div>

        <div className="mt-3">NHÀ HÀNG & MUA SỈ</div>
        <div className="font-semibold">
          Liên hệ qua số <span className="text-orangeFF">1900 0098</span>
        </div>
        <div className="">để được tư vấn và báo giá tốt</div>
      </div>
    </>
  );
}

export default AdviseOrder;
