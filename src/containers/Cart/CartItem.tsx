import { logoLoading } from "@/contants/common";
import { ICartItem } from "@/interfaces";
import { updateQuantityCartItem } from "@/redux/slices";
import { useAppDispatch } from "@/redux/store";
import formatString from "@/utils/formatString";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

type Props = {
  cartItem: ICartItem;
};

function CartItem({ cartItem }: Props) {
  const dispatch = useAppDispatch();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateQuantityCartItem = async (quantity: number) => {
    try {
      setIsUpdating(true);

      const data = {
        cartItem: cartItem?.id,
        body: {
          quantity,
          note: "",
        },
      };

      await dispatch(updateQuantityCartItem(data)).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="[&:not(:last-child)]:border-b flex items-center gap-2 lg:gap-4 py-4">
      <div className="flex items-center gap-x-2 lg:gap-x-4">
        <button className="text-secondary">
          <IoMdClose />
        </button>

        <Image
          src={cartItem?.product?.file?.[0]?.link}
          alt=""
          width={70}
          height={60}
          className="lg:w-[120px] lg:h-[100px]"
          placeholder="blur"
          blurDataURL={logoLoading}
          loading="lazy"
        />
      </div>

      <div className="flex items-center flex-col lg:flex-row gap-x-4 flex-1">
        <div className="flex items-center justify-between lg:items-start gap-x-4 w-full lg:w-[70%] flex-row lg:flex-col">
          <Link
            href={`/chi-tiet-san-pham/${cartItem?.product?.slug}`}
            className="font-semibold text-xs lg:text-sm"
          >
            {cartItem?.product?.name}/{" "}
            <span className="text-secondary font-normal text-[11px] lg:text-xs">
              {(cartItem?.product?.price as any)?.unit?.name}
            </span>
          </Link>
          <div className="leading-[24px] mt-1 text-xs lg:text-sm">
            {formatString((cartItem?.product?.price as any)?.price)}đ
          </div>
        </div>

        <div className="flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-[30%]">
          <div className="text-orangeFF font-semibold text-xs lg:text-base">
            {formatString(
              (cartItem?.product?.price as any)?.price * cartItem?.quantity
            )}
            đ
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={() =>
                handleUpdateQuantityCartItem(cartItem?.quantity - 1)
              }
              disabled={isUpdating}
              className=" border p-1 rounded-full text-secondary"
            >
              <AiOutlineMinus className="text-xs lg:text-sm" />
            </button>

            <input
              className="w-[20px] lg:w-[50px] text-center outline-none text-xs lg:text-base"
              type="number"
              value={cartItem?.quantity}
            />

            <button
              onClick={() =>
                handleUpdateQuantityCartItem(cartItem?.quantity + 1)
              }
              disabled={isUpdating}
              className=" border p-1 rounded-full text-secondary"
            >
              <AiOutlinePlus className="text-xs lg:text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
