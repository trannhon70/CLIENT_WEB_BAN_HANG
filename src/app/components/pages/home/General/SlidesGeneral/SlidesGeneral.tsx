"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { logoLoading } from "@/contants/common";

type Props = {
  sliders: any[];
};

const SlidesGeneral = ({ sliders }: Props) => {
  return (
    <div className="relative h-full">
      <Swiper
        spaceBetween={20}
        modules={[Autoplay, Navigation, Pagination]}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper h-full mySwiper-custom-general-component "
      >
        {sliders?.length
          ? sliders?.map((item: any, key) => (
              <SwiperSlide key={key}>
                {/* <Image src="/images/bannerOfGeneral/banner005.png" height={100} width={100} alt='' className='w-full h-full' /> */}
                <Image
                  src={item?.link || "/images/bannerOfGeneral/banner005.png"}
                  alt=""
                  width={710}
                  height={340}
                  className="w-full h-full rounded-[4px]"
                  placeholder="blur"
                  blurDataURL={logoLoading}
                  loading="lazy"
                />
              </SwiperSlide>
            ))
          : [1, 2, 3, 4, 5].map((item: any, key) => (
              <SwiperSlide key={key}>
                {/* <Image src="/images/bannerOfGeneral/banner005.png" height={100} width={100} alt='' className='w-full h-full' /> */}
                <Image
                  src={item?.link || "/images/bannerOfGeneral/banner005.png"}
                  alt=""
                  width={710}
                  height={340}
                  className="w-full h-full rounded-[4px]"
                  placeholder="blur"
                  blurDataURL={logoLoading}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default SlidesGeneral;
