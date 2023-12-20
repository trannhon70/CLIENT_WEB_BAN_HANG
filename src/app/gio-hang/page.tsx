"use client";

import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import Image from "next/image";
import SliderBuyTogetherProduct from "@/containers/Cart/SliderBuyTogetherProduct";
import ListCart from "@/containers/Cart/ListCart";
import OrderCart from "@/containers/Cart/OrderCart";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { getListPopularProducts } from "@/apis/product";
import { IProduct } from "@/interfaces";

function GioHang() {
  const { user } = useContext(AuthContext);
  const { listCart } = useAppSelector((state) => state.order);
  const [popularProduct, setPopularProduct] = useState<IProduct[]>([]);

  const getPopularProduct = async () => {
    try {
      const result = await getListPopularProducts();

      setPopularProduct(result.data?.result || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, [user]);

  useEffect(() => {
    getPopularProduct();
  }, []);

  const render = {
    empty: (
      <div className="py-8 w-full flex flex-col items-center">
        <Image
          alt="Giỏ hàng trống"
          src={"/images/cart_empty_background.png"}
          width={300}
          height={150}
        />

        <div className="text-xl font-semibold mt-4">
          “Hổng” có gì trong giỏ hết
        </div>
        <div className="mt-2 text-secondary text-sm">
          Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!
        </div>

        <Link href={"/"}>
          <button className="px-[18px] mt-4 py-[10px] text-orangeFF border border-orangeFF rounded-[8px]">
            Mua sắm ngay
          </button>
        </Link>
      </div>
    ),
    cart: (
      <div className="mt-[32px]">
        <div className="text-lg font-semibold">GIỎ HÀNG</div>

        <div className="grid grid-cols-12 gap-8 mt-[30px]">
          <div className="col-span-12 lg:col-span-8">
            <ListCart />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <OrderCart />
          </div>
        </div>
      </div>
    ),
  };

  return (
    <>
      <Breadcrumb
        data={[
          {
            link: "/gio-hang",
            title: "Giỏ hàng",
          },
        ]}
      />
      <main className="container mx-auto">
        {listCart?.length ? render.cart : render?.empty}

        {/* SẢN PHẨM THƯỜNG ĐƯỢC MUA CÙNG */}
        <SliderBuyTogetherProduct products={popularProduct || []} />
      </main>
    </>
  );
}

export default React.memo(GioHang);
