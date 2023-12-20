"use client";
import { getOrderByCode } from "@/apis/order";
import CalculateOrder from "@/containers/Payment/CalculateOrder";
import DeliveryMethod from "@/containers/Payment/DeliveryMethod";
import InfoPayment from "@/containers/Payment/InfoPayment";
import ListCartItem from "@/containers/Payment/ListCartItem";
import PaymentMethod from "@/containers/Payment/PaymentMethod";
import PromotionCode from "@/containers/Payment/PromotionCode";
import { OrderStatus, PromotionType } from "@/contants/common";
import { AuthContext } from "@/context/AuthContext";
import useShowToast from "@/hooks/useShowToast";
import { IAddress, IOrder, IPlaceOrder } from "@/interfaces";
import { placeOrder, updatePromotion, updateTransport } from "@/redux/slices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { redirect, useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

function PaymentPage() {
  const router = useRouter();
  const params = useParams();
  const { user } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<IOrder>();
  const [isPaying, setPaying] = useState(false);
  const { promotion, transport } = useAppSelector((state) => state.order);
  const showToast = useShowToast();
  const [address, setAddress] = useState<IAddress>();

  const getOrder = async () => {
    try {
      const result = await getOrderByCode(params?.id as string);
      if (
        result?.data?.result?.id &&
        result?.data?.result?.status === OrderStatus.DRAFT
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
    getOrder();

    return () => {
      dispatch(updatePromotion(undefined));
      dispatch(updateTransport(undefined));
    };
  }, [user]);

  const handlePlaceOrder = async () => {
    try {
      setPaying(true);

      const body: IPlaceOrder = {
        promotionId: promotion?.id ? [promotion?.id as number] : [],
        transportationId: transport?.id || 0,
        transportationPrice: 20000,
        address: `${address?.username} - ${address?.phoneNumber} - ${address?.address}, ${address?.ward?.path_with_type}`,
        discount:
          promotion?.type === PromotionType.PERCENTAGE
            ? ((order?.totalPrice || 0) * promotion?.amount) / 100
            : promotion?.type === PromotionType.CASH
            ? promotion?.amount
            : 0,
      };

      const data = {
        id: order?.id,
        body,
      };

      const result = await dispatch(placeOrder(data)).unwrap();
      if (result?.status === 1) {
        showToast("success", "Đặt mua đơn hàng thành công.");
        router.push(`/thanh-toan/${result?.result?.code}/thanh-cong`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPaying(false);
    }
  };

  return (
    <main className="container mx-auto">
      <div className="mt-8 relative grid grid-cols-6 lg:grid-cols-12 gap-8">
        <div
          className="hidden lg:block  w-[1px] min-h-full absolute bg-[#E1E3E5] translate-x-[-50%] left-[50%]"
          style={{ transform: "" }}
        ></div>
        <div className="col-span-6">
          <InfoPayment address={address} setAddress={setAddress} />
        </div>
        <div className="col-span-6">
          <ListCartItem order={order as any} />
          <PromotionCode order={order as any} />
          <CalculateOrder order={order as any} />
        </div>
        <div className="col-span-6">
          <DeliveryMethod />
          <PaymentMethod />

          <div className="flex items-center justify-between mt-6">
            <Link href={"/gio-hang"} className="text-orangeFF font-semibold">
              Giỏ hàng
            </Link>

            <button
              onClick={handlePlaceOrder}
              disabled={isPaying}
              className="text-white font-semibold bg-linear-secondary text-sm w-[170px] rounded-[10px] h-[40px] button-action"
            >
              ĐẶT MUA
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(PaymentPage);
