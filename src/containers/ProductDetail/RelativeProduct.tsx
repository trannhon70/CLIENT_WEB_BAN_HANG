"use client";
import React from "react";
import RelativeProductItem from "./RelativeProductItem";
import { IProduct } from "@/interfaces";

type Props = {
  relativeProducts?: IProduct[];
};

function RelativeProduct({ relativeProducts = [] }: Props) {
  return (
    <div className="mt-8">
      <div className="border-b block border-orangeFF">
        <div className="pointer text-white font-semibold flex items-center justify-center uppercase text-sm">
          Sản phẩm liên quan
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-x-8 gap-y-4">
        {relativeProducts?.map((item, index) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-3" key={index}>
            <RelativeProductItem
              isBestSeller={item?.bestSeller}
              product={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelativeProduct;
