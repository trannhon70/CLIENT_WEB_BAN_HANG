import { getListPromotions } from "@/apis/product";
import { IOrder, IPromotion } from "@/interfaces";
import React, { useEffect, useState } from "react";
import DrawerPromotion from "./DrawerPromotion";
import { useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import { PromotionType } from "@/contants/common";

type Props = {
  order: IOrder;
};

function PromotionCode({ order }: Props) {
  const [listPromotions, setListPromotions] = useState<IPromotion[]>([]);
  const [drawer, setDrawer] = useState(false);
  const { promotion } = useAppSelector((state) => state.order);

  const getPromotions = async () => {
    try {
      const result = await getListPromotions();
      setListPromotions(result?.data?.result || []);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getPromotions();
  }, []);

  return (
    <>
      <div className="mt-4 pb-4 border-b border-[#E1E3E5] flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 18C1.79086 18 0 16.2091 0 14V13C0 12.4477 0.460003 12.0163 0.981894 11.8356C2.15653 11.4289 3 10.313 3 9C3 7.68703 2.15653 6.57105 0.981894 6.16437C0.460003 5.98368 0 5.55228 0 5V4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V5C20 5.55228 19.54 5.98368 19.0181 6.16437C17.8435 6.57105 17 7.68703 17 9C17 10.313 17.8435 11.4289 19.0181 11.8356C19.54 12.0163 20 12.4477 20 13V14C20 16.2091 18.2091 18 16 18H4ZM7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7ZM14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967C13.2374 5.17678 12.7626 5.17678 12.4697 5.46967L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303C6.76256 12.8232 7.23744 12.8232 7.53033 12.5303L13.5303 6.53033Z"
              fill="#FF6100"
            />
          </svg>

          {promotion ? (
            <div className="text-xs font-semibold text-white bg-orangeFF px-2 py-1 rounded-[4px]">
              {formatString(promotion?.amount || 0)}
              {promotion?.type === PromotionType.CASH ? "đ" : "%"}
            </div>
          ) : (
            <div className="font-semibold">Mã giảm giá</div>
          )}
        </div>
        <button
          onClick={() => setDrawer(true)}
          className="text-sm text-[#2E9ED5]"
        >
          Chọn mã giảm giá
        </button>
      </div>

      <DrawerPromotion
        order={order as any}
        initPromotion={promotion}
        listPromotions={listPromotions}
        open={drawer}
        onClose={() => setDrawer(false)}
      />
    </>
  );
}

export default PromotionCode;
