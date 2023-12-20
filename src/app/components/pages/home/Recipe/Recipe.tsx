"use client";
import Heading from "@/app/components/heading/Heading";
import Image from "next/image";
import React from "react";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiCaretDoubleRight } from "react-icons/pi";
import Link from "next/link";

const Recipe = () => {
  return (
    <div className="pb-12 lg:my-20">
      <div className="flex items-center justify-between pb-6">
        <Heading className="text-base lg:text-xl">CÔNG THỨC HAY</Heading>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm text-orangeFF">Xem thêm</span>
          <PiCaretDoubleRight className="text-orangeFF" />
        </Link>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 ">
        <div className="col-span-1">
          <div className="relative w-full h-[200px] lg:h-[300px] ">
            <Image
              src="/images/recipe.png"
              className="w-full h-full object-cover rounded-t-lg"
              fill
              alt=""
            />
          </div>
          <div className="px-4 lg:px-[30px] py-6 border rounded-b-lg">
            <h3 className="text-black1C text-lg font-semibold pb-3">
              Mách bạn cách chế biến tôm càng xanh cháy bơ tỏi siêu hấp dẫn tại
              nhà
            </h3>
            <p className="lg:text-base line-clamp-3 text-gray5B text-sm">
              Chế biến món tôm càng xanh cháy bơ tỏi là một cách thú vị để tận
              hưởng hương vị độc đáo của món hải sản này. Trong bài viết này,
              chúng ta sẽ cùng khám phá cách làm tôm cháy bơ tỏi ngon nhất đậm
              đà hương vị ngay tại...
            </p>
            <div className="flex items-center gap-[30px] pt-6">
              <div className="flex items-center gap-2.5">
                <BsCalendar4 size={18} />
                <span className="text-gray61 text-xs">
                  Ngày 8 Tháng 4, 2023
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <AiOutlineClockCircle size={18} />
                <span className="text-gray61 text-xs">9 phút trước</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-6">
            {new Array(3).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex items-center flex-col lg:flex-row gap-4 border rounded-lg"
              >
                <div className="relative w-full h-[200px]  lg:w-[170px]   lg:h-[160px] flex-shrink-0">
                  <Image
                    src="/images/recipe1.png"
                    className="w-full h-full object-cover rounded-l-lg"
                    fill
                    alt=""
                  />
                </div>
                <div className="">
                  <h3 className="text-black1C text-lg font-semibold line-clamp-2">
                    Ra mắt Sushi bánh trung thu hải sản độc lạ ngày Tết Đoàn
                    Viên
                  </h3>
                  <p className="lg:hidden lg:text-base line-clamp-3 text-gray5B text-sm">
                    Chế biến món tôm càng xanh cháy bơ tỏi là một cách thú vị để
                    tận hưởng hương vị độc đáo của món hải sản này. Trong bài
                    viết này, chúng ta sẽ cùng khám phá cách làm tôm cháy bơ tỏi
                    ngon nhất đậm đà hương vị ngay tại...
                  </p>
                  <div className="flex items-center 2xl:gap-[30px] lg:gap-4 pt-6 ">
                    <div className="flex items-center gap-2.5">
                      <BsCalendar4 size={18} />
                      <span className="text-gray61 text-xs">
                        Ngày 8 Tháng 4, 2023
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <AiOutlineClockCircle size={18} />
                      <span className="text-gray61 text-xs">9 phút trước</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
