"use client";
import { Option, SeeMore } from "@/app/components/button";
import { IntroduceTitle } from "@/app/components/introduce-title";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ICategory, IProduct } from "@/interfaces";
import {
  getChildCategoriesByParent,
  getProductsByCategorySlug,
} from "@/apis/product";
import { GeneralProduct } from "@/app/components/general-product";
import Skeleton from "react-loading-skeleton";

const SkeletonProducts = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <Skeleton className="w-full min-h-[200px]" />

        <Skeleton className="w-full min-h-[24px] mt-4" />
        <Skeleton className="max-w-[150px] min-h-[18px] mt-4" />

        <Skeleton className="w-full min-h-[40px] mt-6" />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hidden sm:block">
        <Skeleton className="w-full min-h-[200px]" />

        <Skeleton className="w-full min-h-[24px] mt-4" />
        <Skeleton className="max-w-[150px min-h-[18px] mt-4" />

        <Skeleton className="w-full min-h-[40px] mt-6" />

      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hidden md:block">
        <Skeleton className="w-full min-h-[200px]" />

        <Skeleton className="w-full min-h-[24px] mt-4" />
        <Skeleton className="max-w-[150px min-h-[18px] mt-4" />

        <Skeleton className="w-full min-h-[40px] mt-6" />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hidden lg:block">
        <Skeleton className="w-full min-h-[200px]" />

        <Skeleton className="w-full min-h-[24px] mt-4" />
        <Skeleton className="max-w-[150px min-h-[18px] mt-4" />

        <Skeleton className="w-full min-h-[40px] mt-6" />
      </div>
    </div>
  )
}

type Props = {
  title: string;
  icon: string;
  slug: string;
};

const CategoryParentHome = ({ icon, slug, title }: Props) => {
  const [category, setCategory] = useState<ICategory>();
  const [currentIndex, setCurrentIndex] = useState("");
  const [child, setChild] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getParentCategory = async (slug: string) => {
    try {
      const result = await getChildCategoriesByParent(slug || "");
      setChild(result.data?.result?.child || []);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductByCategory = async (slug: string, child: string) => {
    try {
      setIsLoading(true);

      const result = await getProductsByCategorySlug(child || slug, 1, 4);
      setProducts(result?.data?.result?.products || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (slug) getParentCategory(slug || "");
  }, [slug]);

  useEffect(() => {
    if (slug) {
      getProductByCategory(slug, currentIndex);
    }
  }, [slug, currentIndex]);

  return (
    <div className="mb-14 lg:mb-20">
      <div className="mb-6 sm:mb-10">
        <IntroduceTitle icon={icon} title={title} />
      </div>

      <div className="flex gap-3 mb-4 sm:mb-6 whitespace-nowrap flex-wrap overflow-y-hidden pb-3 ">
        <Option
          title={"Tất cả"}
          value={""}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {child?.map((item, key) => (
          <Option
            title={item?.name}
            key={key}
            value={item?.slug}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>
      <div className="mb-6 sm:mb-10">
        {
          isLoading ?
            <SkeletonProducts />
            :
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
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                  },
                  768: { slidesPerView: 3, spaceBetween: 8 },
                  992: { slidesPerView: 4, spaceBetween: 16 },
                }}
                className="mySwiper mySwiper-custom"
                style={{
                  overflow: "visible",
                }}
              >
                {products?.map((item: IProduct, index: number) => (
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
        }

      </div>
      <div className="flex justify-center">
        <SeeMore link={`/danh-muc/${slug}`} />
      </div>
    </div>
  );
};

export default CategoryParentHome;
