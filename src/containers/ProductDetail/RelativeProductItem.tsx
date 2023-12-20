import { logoLoading } from "@/contants/common";
import useShowToast from "@/hooks/useShowToast";
import { IAddCartItem, IProduct } from "@/interfaces";
import { addCartItem } from "@/redux/slices";
import { useAppDispatch } from "@/redux/store";
import { genDiscountProduct } from "@/utils";
import formatString from "@/utils/formatString";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  product?: IProduct;
  showFrame?: boolean;
  isBestSeller?: boolean;
};

function RelativeProductItem({
  product,
  showFrame = false,
  isBestSeller = false,
}: Props) {
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useAppDispatch();
  const showToast = useShowToast();

  const handleAddCartItem = async () => {
    try {
      setIsAdding(true);
      const data: IAddCartItem = {
        note: "",
        product: product?.id || 0,
        unit: product?.price?.[0]?.unit?.id as any,
        quantity: 1,
      };
      const result = await dispatch(addCartItem([data] as any)).unwrap();
      if (result?.status === 1) {
        showToast("success", "Sản phẩm đã được thêm vào giỏ hàng");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full border rounded-b-[10px]">
      <Link href={product?.slug ? `/chi-tiet-san-pham/${product?.slug}` : "/"}>
        <div className="relative">
          {/* show frame */}
          <img
            src="/images/khung.png"
            className="absolute top-0 left-0 w-full h-full"
          />

          {product?.price?.[0]?.price !== product?.price?.[0]?.fakePrice && (
            <div className="relative-product-discount min-w-[48px] h-[48px] top-[10px] left-[10px]">
              <div className="relative-product-discount-value w-[34px] h-[34px] text-xs text-orangeFF font-semibold">
                {genDiscountProduct(product as any)}
              </div>
            </div>
          )}

          {isBestSeller && (
            <img
              src="/images/best-seller-new-version.svg"
              className="absolute min-w-[48px] h-[48px] bottom-[10px] right-[10px]"
            />
          )}

          <Image
            src={product?.file?.[0]?.link}
            alt=""
            width={300}
            height={300}
            className="w-full h-[300px]"
            placeholder="blur"
            blurDataURL={logoLoading}
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link
          href={product?.slug ? `/chi-tiet-san-pham/${product?.slug}` : "/"}
          className="leading-[22px] min-h-[44px] line-clamp-2 font-semibold line-clamp-2 hover:text-orangeFF"
        >
          {product?.name}
        </Link>

        <div className="font-semibold text-orangeFF">
          {formatString(product?.price?.[0]?.price || 0)}đ
          <span className="text-secondary font-[400] text-sm">
            /{product?.price?.[0]?.unit?.name}
          </span>
        </div>

        <div className="text-secondary line-through text-sm">
          {formatString(product?.price?.[0]?.fakePrice || 0)}đ
        </div>

        <div className="mt-8 flex justify-between items-center gap-4">
          <div className="bg-linear-secondary py-1 w-full relative text-center rounded-[20px] font-semibold text-white text-[13px]">
            Đã bán {product?.detail?.ordered || 0}
            <img
              src="/images/burning.svg"
              alt=""
              className="absolute bottom-0 left-1 h-[130%]"
            />
          </div>
          <button
            onClick={handleAddCartItem}
            disabled={isAdding}
            className={`button rounded-full flex p-2 ms:p-3 justify-center items-center h-[36px] min-w-[36px]`}
          >
            <Image
              src="/images/cart.svg"
              height={20}
              width={20}
              alt=""
              className="h-full w-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RelativeProductItem;
