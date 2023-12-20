"use client";
import React, { useEffect, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { logoLoading, notFoundImage } from "@/contants/common";
import { IProduct } from "@/interfaces";

type Props = {
  product: IProduct;
};

function PreviewProduct({ product }: Props) {
  const [current, setCurrent] = useState<any>(product?.file?.[0]?.link);
  const [showSlide, setShowSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlide(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const data = useMemo(() => {
    const result = Array.from({ length: 10 }).map(() => {
      return faker.image.url({
        height: 1080,
        width: 1920,
      });
    });

    // setCurrent(result?.[0]);

    return result;
  }, []);

  return (
    <>
      <div className="w-full max-w-full">
        <div className="max-w-full max-h-[400px] overflow-hidden">
          <Image
            src={current}
            alt=""
            width={1000}
            height={700}
            className="w-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL={logoLoading}
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = notFoundImage;
            }}
          />
        </div>

        {showSlide ? (
          <div className="relative mt-2">
            <Swiper
              loop={true}
              slidesPerView={5}
              spaceBetween={5}
              initialSlide={0}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper mySwiper-custom-rectangle hidden lg:block"
            >
              {product?.file?.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <div
                    className="cursor-pointer"
                    onClick={() => setCurrent(item?.link)}
                  >
                    <Image
                      layout="responsive"
                      width={62}
                      height={62}
                      src={item?.link}
                      loading="lazy"
                      alt="!w-full"
                      placeholder="blur"
                      blurDataURL={logoLoading}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-1 mt-2">
            {data?.slice(0, 5)?.map((item: any, index: number) => (
              <div key={index} className="cursor-pointer flex-1">
                <Image
                  layout="responsive"
                  width={62}
                  height={62}
                  src={item}
                  loading="lazy"
                  alt="!w-full"
                  placeholder="blur"
                  blurDataURL={logoLoading}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PreviewProduct;
