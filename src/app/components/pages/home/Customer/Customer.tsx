"use client";
import Heading from "@/app/components/heading/Heading";
import Image from "next/image";
import React from "react";

const Customer = () => {
  return (
    <div className="my-20">
      <Heading className="flex items-center justify-center pb-10">
        CẢM ƠN TRIỆU KHÁCH HÀNG
      </Heading>
      <div className="relative w-full h-[400px] lg:h-[1200px]">
        <Image
          src="/images/vietnam_map_split.svg"
          className="w-full h-full object-contain"
          fill
          alt=""
        />
      </div>
    </div>
  );
};

export default Customer;
