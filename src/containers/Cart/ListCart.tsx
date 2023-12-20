import React from "react";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateInfoCart } from "@/redux/slices";

function ListCart() {
  const { listCart, infoCart } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center gap-x-4">
        <img src="/images/delivery.png" alt="" className="w-[48px] h-[48px]" />
        <div className="text-sm">GIAO HÀNG NHANH 2H nội thành TPHCM.</div>
      </div>

      <div className="mt-[20px]">
        {listCart?.map((item, index) => (
          <CartItem cartItem={item} key={index} />
        ))}
      </div>

      <div className="mt-[20px]">
        <div className="font-semibold">Ghi chú đơn hàng</div>
        <textarea
          placeholder="Ghi chú cho đơn hàng của bạn"
          className="mt-4 w-full border outline-none rounded-[8px] px-[18px] py-[10px]"
          style={{
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            resize: "none",
          }}
          rows={7}
          value={infoCart?.note}
          onChange={(e) =>
            dispatch(
              updateInfoCart({
                note: e?.target?.value || "",
              })
            )
          }
        ></textarea>
      </div>
    </>
  );
}

export default ListCart;
