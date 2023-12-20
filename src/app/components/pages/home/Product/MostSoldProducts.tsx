"use client";
import { Option, SeeMore } from "@/app/components/button";
import { IntroduceTitle } from "@/app/components/introduce-title";
import React, { useState } from "react";
import { Sidles } from "@/app/components/slides";
const OptionItems = [
    "Tất cả",
    "Ngao, Sò, Ốc",
    "Cua - Nghẹ",
    "Tôm",
    "Cá",
    "Mực",
    "Cá hồi",
    "Sushi&Sashimi",
];
const MostSoldProducts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="mb-14 lg:mb-20">
            <div className="mb-6 sm:mb-10">
                <IntroduceTitle icon="burning.svg" title="Sản phẩm bán chạy" />
            </div>

            <div className="flex gap-3 mb-4 sm:mb-6 whitespace-nowrap flex-wrap overflow-y-hidden pb-3 ">
                {OptionItems.map((item, key) => (
                    <Option
                        title={item}
                        key={key}
                        index={key}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                ))}
            </div>
            <div className="mb-6 sm:mb-10">
                <Sidles />
            </div>
            <div className="flex justify-center">
                <SeeMore />
            </div>
        </div>
    );
};

export default MostSoldProducts;
