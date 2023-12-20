"use client";
import { getOrderByCode } from "@/apis/order";
import CalculateOrder from "@/containers/Payment/CalculateOrder";
import ListCartItem from "@/containers/Payment/ListCartItem";
import Success from "@/containers/Payment/StatusPayment/Success";
import { OrderStatus, UserStatus } from "@/contants/common";
import { AuthContext } from "@/context/AuthContext";
import { IOrder } from "@/interfaces";
import { useAppDispatch } from "@/redux/store";
import { redirect, useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

function SuccessPaymentPage() {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<IOrder>();

  const getOrder = async () => {
    try {
      const result = await getOrderByCode(params?.id as string);
      if (
        result?.data?.result?.id &&
        result?.data?.result?.status === OrderStatus.SUCCESS
      ) {
        setOrder(result?.data?.result);
      } else {
        redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, [user]);

  return (
    <main className="container mx-auto">
      <div className="mt-8 relative grid grid-cols-6 lg:grid-cols-12 gap-8">
        <div
          className="hidden lg:block w-[1px] min-h-full absolute bg-[#E1E3E5] translate-x-[-50%] left-[50%]"
          style={{ transform: "" }}
        ></div>
        <div className="col-span-6">
          <Success order={order as any} />

          <div className="flex items-center justify-end mt-6 ">
            <button className="text-white font-semibold bg-linear-secondary text-sm w-[170px] rounded-[10px] h-[40px]">
              Tiếp tục mua hàng
            </button>
          </div>
        </div>

        <div className="col-span-6">
          <ListCartItem order={order as any} />
          <CalculateOrder order={order as any} />
        </div>
      </div>
    </main>
  );
}

export default React.memo(SuccessPaymentPage);
