"use client";
import Image from "next/image";
import ImageLegacy from "next/legacy/image";
import React from "react";
import SlidesGeneral from "./SlidesGeneral/SlidesGeneral";
import { MainMenu } from "@/app/components/menu";
import Link from "next/link";
import { logoLoading } from "@/contants/common";
import { faker } from "@faker-js/faker";

type Props = {
  banner: {
    right: any;
    bottom: any;
    swiper: any;
  };
};

const General = ({ banner }: Props) => {
  return (
    <div className="flex grid grid-cols-12 pt-4 sm:pt-6 mb-8 sm:mb-11 lg:mb-10 gap-6">
      <div className="col-span-3 hidden lg:block">
        <MainMenu />
      </div>
      <div className="col-span-12 lg:col-span-9 flex flex-col w-full lg:justify-between overflow-hidden gap-6 sm:gap-0">
        {/* content 1 */}
        <div className="flex grid grid-cols-9 overflow-hidden w-full gap-6 ">
          <div className="col-span-9 lg:col-span-6 border rounded-lg basis-full lg:basis-4/6 overflow-hidden xl:min-h-[360px] max-h-[360px] flex-shrink-0">
            <SlidesGeneral sliders={banner?.swiper?.images || []} />
          </div>
          <div className="col-span-3 hidden lg:flex flex-col justify-between">
            <Link
              href={"/"}
              className="max-h-[174px] w-full rounded-lg overflow-hidden mb-3 animation-link"
            >
              <div className="max-w-full max-h-full overflow-hidden">
                <Image
                  src={
                    banner?.right?.images?.[0]?.link ||
                    "/images/bannerOfGeneral/banner001.png"
                  }
                  alt=""
                  width={342}
                  height={174}
                  className="w-full h-[174px] rounded-[4px]"
                  placeholder="blur"
                  blurDataURL={logoLoading}
                  loading="lazy"
                />
              </div>
            </Link>
            <Link
              href={"/"}
              className="max-h-[174px] w-full rounded-lg overflow-hidden animation-link"
            >
              {/* <Image src="/images/bannerOfGeneral/banner002.png" height={100} width={100} alt='' className='w-full h-full ' /> */}
              <Image
                src={
                  banner?.right?.images?.[1]?.link ||
                  "/images/bannerOfGeneral/banner001.png"
                }
                alt=""
                width={342}
                height={174}
                className="w-full h-[174px] rounded-[4px]"
                placeholder="blur"
                blurDataURL={logoLoading}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        {/* content 2 */}
        <div className="hidden lg:flex mt-4 justify-between gap-6">
          <Link
            href={"/"}
            className="h-full basis-1/2 rounded-lg overflow-hidden mb-3 animation-link"
          >
            <Image
              src={
                banner?.bottom?.images?.[0]?.link ||
                "/images/bannerOfGeneral/banner003.png"
              }
              alt=""
              width={550}
              height={250}
              className="w-full h-full"
              placeholder="blur"
              blurDataURL={logoLoading}
              loading="lazy"
            />
          </Link>
          <Link
            href={"/"}
            className="h-full basis-1/2 rounded-lg overflow-hidden animation-link"
          >
            <Image
              src={
                banner?.bottom?.images?.[1]?.link ||
                "/images/bannerOfGeneral/banner004.png"
              }
              alt=""
              width={550}
              height={250}
              className="w-full h-full"
              placeholder="blur"
              blurDataURL={logoLoading}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default General;
