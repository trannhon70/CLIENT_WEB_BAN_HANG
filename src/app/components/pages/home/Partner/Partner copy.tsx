import Heading from "@/app/components/heading/Heading";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="my-20">
      <Heading className="flex items-center justify-center pb-10">
        Đối tác của DAOHAISAN
      </Heading>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-12 w-[304px] relative">
              <Image
                src="/images/king-food.png"
                className="w-full h-full object-cover"
                fill
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-12 w-[168px] relative">
              <Image
                src="/images/emart.png"
                className="w-full h-full object-cover"
                fill
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
