import { IOrder } from "@/interfaces";
import React from "react";

type Props = {
  order: IOrder;
};

function InformationOrder({ order }: Props) {
  return (
    <div className="mt-6 p-4 border border-[#D9D9D9] rounded-[10px] cursor-pointer">
      <div className="text-[18px] font-semibold">Thông tin đơn hàng</div>
      <div className="mt-2 text-sm">Thông tin giao hàng</div>

      <div className="mt-1 text-sm text-secondary">
        <div>{order?.address?.split(" - ")?.[0]}</div>
        <div>{order?.address?.split(" - ")?.[1]}</div>
        <div>{order?.address?.split(" - ")?.[2]?.split(",")?.[0]}</div>
        <div>{order?.address?.split(" - ")?.[2]?.split(",")?.[1]}</div>
        <div>{order?.address?.split(" - ")?.[2]?.split(",")?.[2]}</div>
        <div>{order?.address?.split(" - ")?.[2]?.split(",")?.[3]}</div>
        <div>Vietnam</div>
      </div>

      <div className="mt-4 text-sm">Phương thức thanh toán</div>
      <div className="mt-1 text-sm text-secondary">
        Thanh Toán Khi Nhận Hàng (COD)
      </div>
    </div>
  );
}

export default InformationOrder;
