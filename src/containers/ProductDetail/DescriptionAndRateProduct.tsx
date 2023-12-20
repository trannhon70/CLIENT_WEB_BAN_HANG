"use client";
import { IProduct } from "@/interfaces";
import React, { useEffect, useState } from "react";

const tabData = [
  {
    title: "MÔ TẢ",
    value: "description",
  },
  {
    title: "ĐÁNH GIÁ SẢN PHẨM",
    value: "rate",
  },
];

type Props = {
  product: IProduct;
};

function DescriptionAndRateProduct({ product }: Props) {
  const [tab, setTab] = useState<"description" | "rate">("description");
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
  const [isHigher, setIsHigher] = useState(false);

  useEffect(() => {
    const el = document.getElementById("product-description");
    if ((el?.scrollHeight || 0) > 500) {
      setIsHigher(true);
    }
  }, []);

  const render = {
    description: (
      <div>
        <div className="relative">
          <div
            id="product-description"
            className={`overflow-hidden ${
              seeMoreDescription ? "max-h-full" : "max-h-[500px]"
            }`}
            dangerouslySetInnerHTML={{
              __html: product?.description,
            }}
          ></div>

          {!seeMoreDescription && isHigher && (
            <div
              className="w-[full] absolute left-0 right-0 bottom-0 h-[100px] z-10"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.29) 50%, #FFF 100%)`,
              }}
            ></div>
          )}
        </div>

        {isHigher && (
          <div className="block text-center mt-8">
            {seeMoreDescription ? (
              <button
                onClick={() => setSeeMoreDescription(false)}
                className="py-2 w-[300px] border rounded-[10px] text-orangeFF border-orangeFF"
              >
                Thu gọn
              </button>
            ) : (
              <button
                onClick={() => setSeeMoreDescription(true)}
                className="py-2 w-[300px] border rounded-[10px] text-orangeFF border-orangeFF"
              >
                Xem thêm
              </button>
            )}
          </div>
        )}
      </div>
    ),
    rate: <div></div>,
  };

  return (
    <div className="mt-12">
      <ul className="flex items-center justify-center gap-x-4 border-t">
        {tabData?.map((item) => (
          <li
            onClick={() => setTab(item.value as any)}
            className={`cursor-pointer py-2 border-t-[2px] ${
              tab === item.value ? "border-[#FF6600]" : "border-[transparent]"
            }`}
            key={item.value}
          >
            {item.title}
          </li>
        ))}
      </ul>

      {render[tab]}
    </div>
  );
}

export default DescriptionAndRateProduct;
