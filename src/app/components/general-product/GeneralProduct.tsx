"use client";
import Image from "next/image";
import Link from "next/link";
import subString from "@/utils/subString";
import formatString from "@/utils/formatString";
import React, { useState, useEffect } from "react";
import { IAddCartItem, IProduct } from "@/interfaces";
import { logoLoading } from "@/contants/common";
import { genDiscountProduct } from "@/utils";
import useShowToast from "@/hooks/useShowToast";
import { addCartItem } from "@/redux/slices";
import { useAppDispatch } from "@/redux/store";

type Props = {
  product?: IProduct;
  index?: number;
  isBestSeller?: boolean;
};

const GeneralProduct = ({ index, product, isBestSeller }: Props) => {
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useAppDispatch();
  const showToast = useShowToast();

  const [widthOfScreen, setWidthOfScreen] = useState(992);
  const productName = [
    "Thân cá hồi Phile Tươi Thân cá hồi Phile Tươi ",
    "Tôm hùm Alaska Nhỏ Tôm hùm Alaska N Thân cá Thân cá hồi cá Thân cá hồi ",
    "Gunkan cá hồi sốt cay",
    "Combo 200g Cá Tuyết + 500g Cá Hồi Khoanh",
  ];
  const elmProductName =
    productName[Math.floor(Math.random() * productName.length)];
  const productAvatar = ["demo001.png", "tom.jpg", "cua001.png"];
  const elmProductAvatar =
    productAvatar[Math.floor(Math.random() * productAvatar.length)];
  const promotion = [
    "Mua 1 tặng 1 Tặng 1 chai muối ớt xanh Tặng 1 chai muối ",
    "Mua 2 Tặng 1 Tặng 1 chai muối ớt xanh Tặng 1 chai muối",
    "Mua Combo 3 Con Chỉ Còn 450K/Con  Tặng 1 chai muối ớt xanh Tặng 1 chai muối",
    "Giảm 30% Mua Sốt Chế Biến Tặng 1 chai muối ớt xanh Tặng 1 chai muối",
    "Tặng 1 chai muối ớt xanh Tặng 1 chai muối ớt xanh Tặng 1 chai muối ớt xanh",
  ];
  const emlPromotion = promotion[Math.floor(Math.random() * promotion.length)];
  const property = ["booking", "alive", "fresh", "new"];
  const eml = property[Math.floor(Math.random() * property.length)];
  const cssForProperty = {
    booking: {
      top: "-4px",
      right: "-4px",
      height: "77px",
      width: "77px",
    },
    alive: {
      top: "0px",
      right: "-7px",
      height: "35px",
      width: "60px",
    },
    fresh: {
      top: "0px",
      right: "-7px",
      height: "35px",
      width: "60px",
    },
    new: {
      height: "55px",
      width: "55px",
      top: "-7px",
      right: "-5px",
    },
  };
  useEffect(() => {
    setWidthOfScreen(window.innerWidth);
  }, []);

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

      showToast("success", "Sản phẩm đã được thêm vào giỏ hàng");
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full h-full" key={index}>
      <Link
        href={product ? `/chi-tiet-san-pham/${product?.slug}` : "/"}
        className="avatar-product md:w-full lg:max-h-282 relative"
      >
        {/* Hình ảnh của khung sản phẩm */}
        <Image
          src="/images/khung.png"
          height={282}
          width={282}
          alt=""
          className="w-full"
        />
        {/* Hình ảnh chính của sản phẩm */}
        <Image
          src={
            product?.file?.[0]?.link || `/images/products/${elmProductAvatar}`
          }
          height={282}
          width={282}
          alt=""
          className="absolute top-0 -z-10 object-fill w-full h-full"
          quality={25}
          placeholder="blur"
          blurDataURL={logoLoading}
          loading="lazy"
        />
        {/* Hình ảnh chop phần giảm giá (discount) */}
        {product?.price?.[0]?.price !== product?.price?.[0]?.fakePrice && (
          <div className="relative-product-discount min-w-[48px] h-[48px] top-[10px] left-[10px]">
            <div className="relative-product-discount-value w-[34px] h-[34px] text-xs text-orangeFF font-semibold">
              {genDiscountProduct(product as any)}
            </div>
          </div>
        )}

        {/* Hình ảnh cho best seller */}
        {isBestSeller && (
          <div className="absolute bottom-3 right-3 ">
            <div className="hidden relative rounded-full flex justify-center items-center cursor-pointer h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]">
              <Image
                src="/images/best-seller-new-version.svg"
                height={50}
                width={50}
                alt=""
                className="promotion-frame w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Hình ảnh cho thuộc tính của sản phẩm (đặt trước, tươi,sống)*/}

        <div
          className="absolute object-contain z-50"
          style={{
            //@ts-ignore
            top: cssForProperty[eml].top,
            //@ts-ignore
            right: cssForProperty[eml].right,
            //@ts-ignore
            height: cssForProperty[eml].height,
            //@ts-ignore
            width: cssForProperty[eml].width,
          }}
        >
          <Image
            src={`/images/product-properties/${eml}.png`}
            height={35}
            width={60}
            alt=""
            unoptimized
            className="h-full w-full hidden"
          />
        </div>
        {/* Hình ảnh cho đặt trước */}
      </Link>
      {/* Nội dung chính */}
      <div className="info-product p-4 border rounded-b-[10px]">
        <div className="flex flex-col h-full justify-between gap-3">
          <div className="">
            {/* Tên sản phẩm */}
            <div className="min-h-[44px] max-h-[44px] overflow-hidden text-ellipsis">
              <Link
                href={product ? `/chi-tiet-san-pham/${product?.slug}` : "/"}
                className="text-sm lg:text-base leading-6 text-main20 font-semibold line-clamp-2 hover:text-orangeFF"
              >
                {product?.name}
              </Link>
            </div>
            <div className="my-1">
              <span className="text-lg lg:text-xl leading-7 font-medium text-orangeFF">
                {formatString(product?.price?.[0]?.price || 0)}đ
              </span>
              <span className="text-xs font-normal leading-5 text-main7A">
                /Phần
              </span>
            </div>
            <div className="mb-1">
              <span className="text-base font-medium leading-6 text-main8C line-through">
                {formatString(product?.price?.[0]?.fakePrice || 0)}đ
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center gap-4">
            <div className="bg-linear-secondary py-1 w-full relative text-center rounded-[20px] font-semibold text-white text-[13px]">
              Đã bán {product?.popularity || 0}
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
    </div>
  );
};

export default React.memo(GeneralProduct);
