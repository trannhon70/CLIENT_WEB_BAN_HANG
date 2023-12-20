"use client";
import Heading from "@/app/components/heading/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCaretDoubleRight } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
const Policy = () => {
  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <Heading className="text-base lg:text-xl">
          CHÍNH SÁCH KHÁCH HÀNG
        </Heading>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm text-orangeFF">Xem thêm</span>
          <PiCaretDoubleRight className="text-orangeFF" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {new Array(3).fill(0).map((_, index) => (
          <div key={index} className="col-span-3 lg:col-span-1">
            <div className="w-full h-[200px] lg:h-[240px] relative">
              <Image
                src="/images/policy.png"
                className="w-full h-full object-cover rounded-t-lg"
                fill
                alt=""
              />
            </div>
            <div className="py-6 shadow rounded-b-lg px-4">
              <div className="flex items-center justify-between pb-4 lg:pb-4">
                <h3 className="text-lg font-semibold uppercase  text-main20">
                  CHƯƠNG TRÌNH TÍCH ĐIỂM
                </h3>
                <FiArrowUpRight size={20} />
              </div>
              
              <p className="line-clamp-3 text-sm text-main20 leading-6">
                Cá hồi được nhập nguyên con từ Nauy về ĐẢO HẢI SẢN. Sau đó được
                các đầu bếp nhiều kinh nghiệm sơ chế, phi lê trong không gian
                sạch sẽ để đạt chuẩn sử dụng sashimi Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nemo, totam.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
