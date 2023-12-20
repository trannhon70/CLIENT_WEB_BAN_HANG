"use client";
import Heading from "@/app/components/heading/Heading";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { partnerList } from "@/contants/common";

const Partner = () => {
  return (
    <div className="pb-12 lg:my-20">
      <Heading className="flex items-center justify-center pb-10">
        Đối tác của DAOHAISAN
      </Heading>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {partnerList.map((item, index) => (
            <SwiperSlide key={index} className={`!${item.width}`}>
              <div className="h-12 w-full  relative">
                <Image
                  src={item.url}
                  className="w-full h-full object-contain"
                  fill
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {partnerList.map((item, index) => (
            <SwiperSlide key={index} className={`!${item.width}`}>
              <div className="h-12 w-full  relative">
                <Image
                  src={item.url}
                  className="w-full h-full object-contain"
                  fill
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
