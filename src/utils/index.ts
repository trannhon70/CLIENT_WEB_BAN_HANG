import { OrderStatus, PaymentStatus, TransportStatus } from "@/contants/common";
import { IProduct } from "@/interfaces";
import jwtDecode from "jwt-decode";

export const expiredSession = () => {
  localStorage.removeItem("authUser");
  localStorage.removeItem("accessToken");
};

export const checkExpireToken = (token: string) => {
  try {
    const decodedToken = jwtDecode<{ exp: number; iat: number }>(token);

    if (decodedToken?.exp * 1000 < new Date().getTime()) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("authUser");
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    expiredSession();
  }
};

export const getTokenFromLocastorage = () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      return JSON.parse(token);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem("accessToken", JSON.stringify(token));
};

export const genDiscountProduct = (product: IProduct) => {
  const discount = Math.abs(
    100 -
      ((product?.price?.[0]?.price || 0) /
        (product?.price?.[0]?.fakePrice || 1)) *
        100
  );

  return `-${(discount < 100 ? discount : 100)?.toFixed(0)}%`;
};

export const genTransportStatus = (status: string) => {
  switch (status) {
    case TransportStatus.PENDING:
      return {
        status: "warning",
        text: "Đang xử lý",
      };

    case TransportStatus.TRANSPORTING:
      return {
        status: "processing",
        text: "Đang giao",
      };

    case TransportStatus.SUCCESS:
      return {
        status: "success",
        text: "Đã giao",
      };

    case TransportStatus.CANCELED:
      return {
        status: "error",
        text: "Đã hủy",
      };

    case TransportStatus.RETURN:
      return {
        status: "default",
        text: "Trả hàng",
      };

    default:
      return {
        status: "error",
        text: "Lỗi",
      };
  }
};

export const genStatusOrder = (status: string) => {
  switch (status) {
    case OrderStatus.SUCCESS:
      return {
        status: "success",
        text: "Đã đặt mua",
      };

    default:
      return {
        status: "warning",
        text: "Chưa đặt mua",
      };
  }
};

export const genPaymentStatus = (status: string) => {
  switch (status) {
    case PaymentStatus.PAID:
      return {
        status: "success",
        text: "Đã thanh toán",
      };

    default:
      return {
        status: "warning",
        text: "Chưa thanh toán",
      };
  }
};
