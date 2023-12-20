import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import RelativeProductItem from "../ProductDetail/RelativeProductItem";
import { GeneralProduct } from "@/app/components/general-product";
import { IProduct } from "@/interfaces";

type Props = {
  products: IProduct[];
};

function SliderBuyTogetherProduct({ products }: Props) {
  return (
    <div>
      <div className="font-semibold text-[18px] mt-[60px]">
        SẢN PHẨM THƯỜNG ĐƯỢC MUA CÙNG
      </div>

      <div className="relative mt-6">
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={24}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 6,
            },
            768: { slidesPerView: 3, spaceBetween: 16 },
            992: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="mySwiper mySwiper-custom-general-component swiper-relative-product"
        >
          {products?.map((item, index) => (
            <SwiperSlide key={index}>
              <RelativeProductItem
                product={item}
                showFrame
                isBestSeller={item?.bestSeller}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderBuyTogetherProduct;
