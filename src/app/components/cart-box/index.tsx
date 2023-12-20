import { logoLoading } from "@/contants/common";
import { AuthContext } from "@/context/AuthContext";
import { useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function CartBox() {
  const { user } = useContext(AuthContext);
  const { listCart } = useAppSelector((state) => state.order);

  return (
    <div className="hidden lg:block cart-box">
      {user && listCart?.length > 0 ? (
        <>
          <div className="mb-4 overflow-y-auto custom-scroll max-h-[350px]">
            {listCart?.map((item, index) => (
              <div
                key={index}
                className="border-b pb-4 [&:not(:first-child)]:pt-4 flex gap-x-4"
              >
                <div className="min-w-[80px]">
                  <Image
                    src={item?.product?.file?.[0]?.link}
                    alt=""
                    width={80}
                    height={60}
                    className="rounded-[4px] h-[60px]"
                    placeholder="blur"
                    blurDataURL={logoLoading}
                    loading="lazy"
                  />
                </div>

                <div className="w-full pr-2 flex flex-col justify-between items-stretch">
                  <div className="flex items-start justify-between gap-x-2">
                    <Link
                      href={`/chi-tiet-san-pham/${item?.product?.slug}`}
                      className="font-semibold text-sm"
                    >
                      {item?.product?.name}
                    </Link>
                    <button className="min-w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 8V18C5 20.2091 6.79086 22 9 22H15C17.2091 22 19 20.2091 19 18V8M14 11V17M10 11L10 17M16 5L14.5937 2.8906C14.2228 2.3342 13.5983 2 12.9296 2H11.0704C10.4017 2 9.7772 2.3342 9.40627 2.8906L8 5M16 5H8M16 5H21M8 5H3"
                          stroke="#8C9196"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-secondary">
                      Số lượng: {item?.quantity}
                    </div>
                    <div className="text-sm font-semibold">
                      {formatString((item?.product?.price as any)?.price)}đ
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href={"/gio-hang"} className="mt-4">
            <button className="bg-orangeFF w-full py-3 text-white font-semibold rounded-[8px]">
              Xem giỏ hàng
            </button>
          </Link>
        </>
      ) : (
        <div className="py-8 w-full flex flex-col items-center">
          <Image
            alt="Giỏ hàng trống"
            src={"/images/cart_empty_background.png"}
            width={200}
            height={100}
          />

          <div className="text-base font-semibold mt-4">
            “Hổng” có gì trong giỏ hết
          </div>
        </div>
      )}
    </div>
  );
}

export default CartBox;
