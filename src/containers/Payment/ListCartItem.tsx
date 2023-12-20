import { logoLoading } from "@/contants/common";
import { IOrder } from "@/interfaces";
import { useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import { faker } from "@faker-js/faker";
import Image from "next/legacy/image";
import React from "react";

type Props = {
  order: IOrder;
};

function ListCartItem({ order }: Props) {

  return (
    <div className="border-b border-[#E1E3E5]">
      {order?.orderItems?.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="border border-[#D0D5DD] rounded-[4px] w-[64px] h-[64px] relative">
              <Image
                src={item?.product?.file?.[0]?.link}
                alt=""
                width={64}
                height={64}
                className=""
                placeholder="blur"
                blurDataURL={logoLoading}
                loading="lazy"
              />

              <div className="absolute bg-[#A3A3A3] text-white text-xs h-[20px] w-[20px] flex items-center justify-center right-[-8px] top-[-8px] rounded-full">
                {item?.quantity}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">{item?.product?.name}</div>
              <div className="text-secondary text-xs mt-1">
                {(item?.product?.price as any)?.unit?.name}
              </div>
            </div>
          </div>

          <div className="text-sm font-semibold">
            {formatString((item?.product?.price as any)?.price)}đ
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListCartItem;
