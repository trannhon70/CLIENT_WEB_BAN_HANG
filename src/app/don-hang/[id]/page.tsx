"use client";
import { getOrderByCode } from "@/apis/order";
import Breadcrumb from "@/app/components/breadcrumb";
import UserIcon from "@/app/components/icons/UserIcon";
import { OrderStatus, UserStatus, logoLoading } from "@/contants/common";
import { IOrder } from "@/interfaces";
import { genPaymentStatus, genStatusOrder, genTransportStatus } from "@/utils";
import formatString from "@/utils/formatString";
import { Badge } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function OrderDetailPage({ params }: any) {
  const router = useRouter();
  const [order, setOrder] = useState<IOrder>();

  const getData = async (code: string) => {
    try {
      const result = await getOrderByCode(code as string);
      if (
        result?.data?.result?.id &&
        result?.data?.result?.status === OrderStatus.SUCCESS
      ) {
        setOrder(result?.data?.result);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(params?.id);
  }, []);

  return (
    <>
      <Breadcrumb
        data={[
          {
            link: "/tai-khoan-cua-toi",
            title: "Lịch sử đơn hàng",
          },
          {
            link: `/don-hang/${order?.code}`,
            title: "Chi tiết đơn hàng",
          },
        ]}
      />
      <main className="bg-[#EDF0F3] pt-4 pb-12 mt-[-10px] mb-[-35px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 mb-4">
              <div className="bg-white rounded-[12px]">
                {/*  */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div>Mã đơn hàng: {order?.code}</div>
                  <div>
                    <Badge
                      status={
                        genTransportStatus(order?.transportStatus || "")
                          ?.status as any
                      }
                      text={
                        genTransportStatus(order?.transportStatus || "")?.text
                      }
                    />
                  </div>
                </div>

                {/*  */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-base">
                        Thời gian đặt hàng
                      </div>
                      <div className="text-secondary text-sm">
                        {dayjs(order?.created_at)?.format("HH:mm DD/MM/YYYY")}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold text-base">
                        Thời gian giao hàng
                      </div>
                      <div className="text-secondary text-sm">
                        {order?.userStatus === UserStatus.NORMAL
                          ? dayjs(order?.created_at)?.format("HH:mm DD/MM/YYYY")
                          : `Càng sớm càng tốt - ${dayjs(
                              order?.userRecieveDate
                            ).format("DD/MM/YYYY")}`}
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="grid grid-cols-3 p-4">
                  {/* Thông tin người nhận */}
                  <div className="col-span-3 lg:col-span-1 border-b lg:border-b-0 lg:border-r py-4 lg:py-0">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8ZM7 18C10.866 18 14 16.2091 14 14C14 11.7909 10.866 10 7 10C3.13401 10 0 11.7909 0 14C0 16.2091 3.13401 18 7 18Z"
                          fill="#FF6100"
                        />
                      </svg>

                      <div className="text-sm font-semibold">
                        Thông tin người nhận
                      </div>
                    </div>
                    <div className="mt-4 font-semibold">
                      {order?.address?.split(" - ")?.[0]}
                    </div>
                    <div className="mt-1">
                      {order?.address?.split(" - ")?.[1]}
                    </div>
                  </div>

                  {/* Nhận hàng tại */}
                  <div className="col-span-3 lg:col-span-1 border-b lg:border-b-0 lg:border-r pl-0 lg:pl-4 py-4 lg:py-0">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.5 7.5C15.5 11.4274 10.625 17 8 17C5.375 17 0.5 11.0385 0.5 7.11111C0.5 3 4.13401 0 8 0C11.866 0 15.5 3 15.5 7.5ZM10.5 7C10.5 8.38071 9.38071 9.5 8 9.5C6.61929 9.5 5.5 8.38071 5.5 7C5.5 5.61929 6.61929 4.5 8 4.5C9.38071 4.5 10.5 5.61929 10.5 7ZM2 19.25C1.58579 19.25 1.25 19.5858 1.25 20C1.25 20.4142 1.58579 20.75 2 20.75H14C14.4142 20.75 14.75 20.4142 14.75 20C14.75 19.5858 14.4142 19.25 14 19.25H2Z"
                          fill="#FF6100"
                        />
                      </svg>

                      <div className="text-sm font-semibold">Nhận hàng tại</div>
                    </div>
                    <div className="mt-4 font-semibold">
                      {order?.address?.split(" - ")?.[2]?.split(",")?.[0]},
                      {order?.address?.split(" - ")?.[2]?.split(",")?.[1]},
                      {order?.address?.split(" - ")?.[2]?.split(",")?.[2]},
                      {order?.address?.split(" - ")?.[2]?.split(",")?.[3]}
                    </div>
                  </div>

                  {/* Trạng thái*/}
                  <div className="col-span-3 lg:col-span-1 border-b lg:border-b-0 pl-0 lg:pl-4 py-4 lg:py-0">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.23146 0H14.7689C16.5863 0 18.2206 1.24475 18.8955 3.14305L19.6535 5.27487C19.8829 5.92019 20.0415 6.61074 19.8742 7.27488C19.4778 8.84776 18.192 10 16.6669 10C14.8259 10 13.3335 8.32107 13.3335 6.25C13.3335 8.32107 11.8412 10 10.0002 10C8.15926 10 6.66687 8.32107 6.66687 6.25C6.66687 8.32107 5.17449 10 3.33354 10C1.80844 10 0.522566 8.84776 0.126221 7.27488C-0.041132 6.61074 0.117471 5.92019 0.346918 5.27487L1.1049 3.14305C1.77985 1.24476 3.41411 0 5.23146 0ZM2.00024 11.3005V15.9999C2.00024 18.2091 3.79111 19.9999 6.00024 19.9999H14.0002C16.2094 19.9999 18.0002 18.2091 18.0002 15.9999V11.3005C17.5814 11.4298 17.1351 11.4999 16.667 11.4999C15.3299 11.4999 14.1775 10.9373 13.3337 10.0559C12.4898 10.9373 11.3374 11.4999 10.0003 11.4999C8.66319 11.4999 7.5108 10.9373 6.66698 10.0559C5.82317 10.9373 4.67077 11.4999 3.33365 11.4999C2.86552 11.4999 2.41911 11.4297 2.00024 11.3005ZM13.6534 14.6315C13.8569 14.9923 13.7293 15.4497 13.3685 15.6531C12.1533 16.3382 11.1066 16.7477 10.003 16.7498C8.89794 16.7519 7.84923 16.3457 6.62928 15.6517C6.26925 15.4469 6.14342 14.989 6.34823 14.629C6.55305 14.2689 7.01095 14.1431 7.37098 14.3479C8.50718 14.9943 9.28225 15.2512 10.0001 15.2498C10.7193 15.2484 11.4945 14.9877 12.6318 14.3465C12.9926 14.1431 13.45 14.2707 13.6534 14.6315Z"
                          fill="#FF6100"
                        />
                      </svg>

                      <div className="text-sm font-semibold">Trạng thái</div>
                    </div>
                    <div className="mt-4 font-semibold">
                      Trạng thái mua hàng
                    </div>
                    <div>
                      <Badge
                        status={
                          genStatusOrder(order?.status || "")?.status as any
                        }
                        text={genStatusOrder(order?.status || "")?.text}
                      />
                    </div>

                    <div className="mt-2 font-semibold">
                      Trạng thái thanh toán
                    </div>
                    <div>
                      <Badge
                        status={
                          genPaymentStatus(order?.paymentStatus || "")
                            ?.status as any
                        }
                        text={
                          genPaymentStatus(order?.paymentStatus || "")?.text
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4 font-semibold">Danh sách sản phẩm</div>
              <div className="p-4 bg-white rounded-[12px]">
                {order?.orderItems?.map((item, index) => (
                  <div
                    key={index}
                    className="py-4 [&:not(:last-child)]:border-b flex items-center gap-4"
                  >
                    <Image
                      src={item?.product?.file?.[0]?.link}
                      alt=""
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] rounded-[8px]"
                      placeholder="blur"
                      blurDataURL={logoLoading}
                      loading="lazy"
                    />

                    <div className="flex-1 flex items-center justify-center">
                      <div className="min-w-[70%] font-semibold text-sm">
                        {item?.product?.name}/
                        <span className="text-secondary">
                          {item?.product?.price?.unit?.name}
                        </span>
                      </div>
                      <div className="min-w-[30%] flex items-center justify-between text-sm">
                        <div className="text-secondary">x{item?.quantity}</div>
                        <div>{formatString(item?.product?.price?.price)}đ</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 pl-4">
              <div className="bg-white rounded-[12px] p-4">
                <div className="pb-6 border-b">
                  <div className="font-semibold">Thông tin thanh toán</div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div>Tạm tính</div>
                    <div className="font-semibold">
                      {formatString(order?.basePrice || 0)} đ
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <div>Phí vận chuyển</div>
                    <div className="font-semibold">
                      {formatString(order?.transportPrice || 0)} đ
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <div>Giảm giá</div>
                    <div className="font-semibold">
                      -{formatString(order?.discount || 0)} đ
                    </div>
                  </div>
                </div>

                <div className="py-4 border-b flex items-center justify-between text-sm">
                  <div>Tổng tiền</div>
                  <div className="font-semibold text-lg">
                    {formatString(order?.totalPrice || 0)} đ
                  </div>
                </div>

                <div className="py-4 text-sm">
                  <div className="font-semibold">Phương thức thanh toán</div>
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={"/images/cod.svg"}
                      className="w-[40px] h-[40px]"
                    />
                    <div>Thanh toán khi nhận hàng (COD)</div>
                  </div>
                </div>

                <button
                  //   onClick={handleCreateDraftOrder}
                  //   disabled={isDisableOrder()}
                  className="bg-linear-secondary mt-4 text-white font-semibold w-full py-[10px] rounded-[10px] shadow button-action"
                >
                  Mua lại
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default React.memo(OrderDetailPage);
