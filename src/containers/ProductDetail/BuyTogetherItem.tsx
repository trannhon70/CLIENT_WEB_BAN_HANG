import { logoLoading } from "@/contants/common";
import { IProduct } from "@/interfaces";
import formatString from "@/utils/formatString";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import React from "react";

type Props = {
  item: IProduct;
  onChange: (product: IProduct, checked: boolean) => void;
  checked: boolean;
};

function BuyTogetherItem({ item, onChange, checked }: Props) {
  return (
    <div className="flex gap-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(item, e?.target?.checked)}
      />

      <div className="border h-fit p-[2px] rounded-[4px]">
        <Image
          src={item?.file?.[0]?.link}
          alt=""
          width={42}
          height={42}
          className="min-w-[42px] h-[42px] rounded-[4px]"
          placeholder="blur"
          blurDataURL={logoLoading}
          loading="lazy"
        />
      </div>

      <div className="font-semibold text-[12px]">
        <div className="line-clamp-2 leading-[18px] min-h-[36px]">
          {item?.name}{" "}
          <span className="text-secondary font-[400] text-[10px]">
            /{item?.price?.[0]?.unit?.name}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="leading-1">
            {formatString(item?.price?.[0]?.price || 0)}đ
          </div>
          <div className="text-[10px] line-through text-[#7A7A7A]">
            {formatString(item?.price?.[0]?.fakePrice || 0)}đ
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTogetherItem;
