import { OrderStatus, PromotionType } from "@/contants/common";
import { IOrder } from "@/interfaces";
import { useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import React, { useMemo } from "react";

type Props = {
  order: IOrder;
};

function CalculateOrder({ order }: Props) {
  const { promotion, transport } = useAppSelector((state) => state.order);

  const genTransportPrice = () => {
    if (order?.status === OrderStatus.SUCCESS)
      return order?.transportPrice || 0;

    return transport ? 20000 : 0;
  };

  const genPromotionPrice = () => {
    if (order?.status === OrderStatus.SUCCESS) return order?.discount || 0;
    else if (promotion?.type === PromotionType.PERCENTAGE)
      return ((order?.basePrice || 0) * promotion?.amount) / 100;
    return promotion ? promotion?.amount : 0;
  };

  const genTotalPrice = () => {
    if (order?.status === OrderStatus.SUCCESS) return order?.totalPrice || 0;
    return (
      (order?.basePrice || 0) +
      (transport ? 20000 : 0) -
      (promotion?.type === PromotionType.PERCENTAGE
        ? ((order?.totalPrice || 0) * promotion?.amount) / 100
        : promotion?.type === PromotionType.CASH
        ? promotion?.amount
        : 0)
    );
  };

  return (
    <>
      <div className="mt-6 pb-6 border-b border-[#E1E3E5]">
        <div className="flex items-center justify-between text-sm">
          <div>Tạm tính</div>
          <div className="font-semibold">
            {formatString(order?.basePrice || 0)}đ
          </div>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <div>Phí vận chuyển</div>
          <div className="font-semibold">
            {formatString(genTransportPrice())}đ
          </div>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <div>Giảm giá</div>
          <div className="font-semibold">
            -{formatString(genPromotionPrice())}đ
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>Tổng cộng</div>
        <div className="text-[24px] font-semibold">
          {formatString(genTotalPrice())}đ
        </div>
      </div>
    </>
  );
}

export default CalculateOrder;
