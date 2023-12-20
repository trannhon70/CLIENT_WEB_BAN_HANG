"use client";
import React from "react";
import { IntroduceTitle } from "@/app/components/introduce-title";
import { Sidles } from "@/app/components/slides";
import { SeeMore } from "@/app/components/button";
import { ICategory, IProduct } from "@/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { GeneralProduct } from "@/app/components/general-product";

type Props = {
  category: ICategory;
};

const SingleCate = ({ category }: Props) => {
  return (
    <div className="flex flex-col gap-10 mb-20 ">
      <div>
        <div className="mb-6">
          <IntroduceTitle icon="" title={category?.name} />
        </div>
        <div
          className="relative overflow-clip"
          style={{ overflowClipMargin: "8px" }}
        >
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={24}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: { slidesPerView: 3, spaceBetween: 16 },
              992: { slidesPerView: 4, spaceBetween: 16 },
            }}
            className="mySwiper mySwiper-custom"
            style={{
              overflow: "visible",
            }}
          >
            {category?.product?.map((item: IProduct, index: number) => (
              <SwiperSlide key={index}>
                <GeneralProduct
                  product={item}
                  index={index}
                  key={index}
                  isBestSeller={item?.bestSeller}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center">
        <SeeMore link={`/danh-muc/${category?.slug}`} />
      </div>
    </div>
  );
};

export default SingleCate;
