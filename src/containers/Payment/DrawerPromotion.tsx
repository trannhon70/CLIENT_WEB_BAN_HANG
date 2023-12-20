import EmptyOrderIcon from "@/app/components/icons/EmptyOrderIcon";
import { PromotionType } from "@/contants/common";
import { IOrder, IPromotion } from "@/interfaces";
import { updatePromotion } from "@/redux/slices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import { Checkbox, Drawer } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  initPromotion: IPromotion | any;
  listPromotions: IPromotion[];
  order: IOrder;
};

function DrawerPromotion({
  onClose,
  open,
  initPromotion,
  listPromotions,
  order,
}: Props) {
  const [promotion, setPromotion] = useState<IPromotion>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (open) {
      setPromotion(initPromotion);
    }
  }, [initPromotion, open]);

  const canUsePromotion = (min: number) => {
    return (order?.totalPrice || 0) >= min;
  };

  return (
    <Drawer
      title="Chọn mã giảm giá"
      placement={"right"}
      closable
      onClose={onClose}
      open={open}
    >
      {listPromotions?.length === 0 ? (
        <div className="py-12 w-full flex flex-col items-center">
          <EmptyOrderIcon />
          <div className="mt-6 text-secondary text-sm">
            Hiện tại không có mã khuyến mãi
          </div>
        </div>
      ) : (
        <div className="relative min-h-full">
          <div className="px-0">
            {listPromotions?.map((item) => (
              <div
                className={`flex items-center mb-2 ${
                  canUsePromotion(item?.minimumBill || 0)
                    ? "bg-white"
                    : "cursor-not-allowed"
                } rounded-e-[8px]`}
              >
                <img
                  src="/images/icon-promotion.png"
                  className="w-[80px] h-[80px]"
                />
                <div className="px-3 flex items-center w-full justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold">{item?.name}</div>
                    <div className="text-[14px] min-h-[28px]">
                      Đơn tối thiếu {formatString(item?.minimumBill || 0)}đ.
                      Giảm {formatString(item?.amount || 0)}
                      {item?.type === PromotionType.CASH ? "đ" : "%"}
                    </div>
                    <div className="text-[12px] text-secondary mt-1">
                      HSD: {dayjs(item?.availableDate)?.format("DD/MM/YYYY")}
                    </div>
                  </div>

                  <Checkbox
                    checked={item?.id === promotion?.id}
                    onChange={() =>
                      setPromotion(
                        item?.id !== promotion?.id ? item : undefined
                      )
                    }
                    disabled={!canUsePromotion(item?.minimumBill || 0)}
                    className="checkbox-circle"
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="bg-white absolute bottom-0 left-0 w-full"
            style={{
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            }}
          >
            <button
              onClick={() => {
                dispatch(updatePromotion(promotion));
                onClose();
              }}
              className="bg-orangeFF button-action w-full py-2 text-[16px] font-semibold text-white text-center rounded-[8px]"
            >
              Sử dụng
            </button>
          </div>
        </div>
      )}
    </Drawer>
  );
}

export default DrawerPromotion;
