import Dropdown from "@/app/components/dropdown";
import React, { use, useMemo, useState } from "react";
import { DatePicker } from "antd";
import "dayjs/locale/vi";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import formatString from "@/utils/formatString";
import { createDraftOrder, updateInfoCart } from "@/redux/slices";
import { ICreateDraftOrder, IOrderItem } from "@/interfaces";
import { UserStatus } from "@/contants/common";

const timeData = [
  {
    title: "Càng sớm càng tốt",
    value: "0",
  },
  {
    title: "7:00",
    value: "7",
  },
  {
    title: "8:00",
    value: "8",
  },
  {
    title: "9:00",
    value: "9",
  },
  {
    title: "10:00",
    value: "10",
  },
  {
    title: "11:00",
    value: "11",
  },
  {
    title: "12:00",
    value: "12",
  },
  {
    title: "13:00",
    value: "13",
  },
  {
    title: "14:00",
    value: "14",
  },
  {
    title: "15:00",
    value: "15",
  },
  {
    title: "16:00",
    value: "16",
  },
  {
    title: "17:00",
    value: "17",
  },
  {
    title: "18:00",
    value: "18",
  },
  {
    title: "19:00",
    value: "19",
  },
  {
    title: "20:00",
    value: "20",
  },
  {
    title: "21:00",
    value: "21",
  },
];

function OrderCart() {
  const { listCart, infoCart } = useAppSelector((state) => state.order);
  const [date, setDate] = useState<any>(dayjs().add(1, "day"));
  const [openDate, setOpenDate] = useState(false);
  const [time, setTime] = useState(timeData?.[0]);
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const totalPrice = useMemo(() => {
    let total = 0;
    listCart?.forEach((item) => {
      total += (item?.product?.price as any)?.price * item?.quantity;
    });
    return total;
  }, [listCart]);

  const isDisableOrder = () => {
    return totalPrice < 150000;
  };

  const handleContinueOrder = (code: string) => {
    router.push(`/thanh-toan/${code}`);
    dispatch(
      updateInfoCart({
        date,
        time,
      })
    );
  };

  const handleCreateDraftOrder = async () => {
    try {
      setIsCreating(true);

      const product: IOrderItem[] = listCart?.map((item) => {
        return {
          product: item?.product?.id,
          price: (item?.product?.price as any)?.price,
          quantity: item?.quantity,
          unit: (item?.product?.price as any)?.unit?.id,
          note: "",
        };
      });

      const data: ICreateDraftOrder = {
        userStatus:
          time?.value === "0" ? UserStatus.WARNING : UserStatus.NORMAL,
        userRecieveDate:
          time?.value === "0"
            ? date.endOf("day").toDate()
            : date.startOf("day").add(Number(time?.value), "hour").toDate(),
        product,
        note: infoCart?.note || "",
        totalPrice,
      };

      const result = await dispatch(createDraftOrder(data)).unwrap();
      if (result?.result?.code) {
        handleContinueOrder(result?.result?.code);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sticky top-4 bg-[#F7F7F7] py-6 px-4 rounded-[10px]">
      <div className="font-semibold">HẸN GIỜ NHẬN HÀNG</div>

      <div className="mt-8">Ngày nhận hàng</div>

      <div className="mt-6 flex items-center justify-between">
        <DatePicker
          className={`custom-datetime w-[170px] ${openDate ? "open" : ""}`}
          dropdownClassName="custom-datetime-dropdown"
          onOpenChange={(e) => setOpenDate(e)}
          suffixIcon={
            <FiChevronDown
              className="text-secondary"
              style={{
                transition: "all 0.3s",
                transform: openDate ? "rotate(0deg)" : "rotate(180deg)",
              }}
              size={20}
            />
          }
          allowClear={false}
          locale={viVN}
          nextIcon={<FiChevronRight size={20} />}
          prevIcon={<FiChevronLeft size={20} />}
          superPrevIcon={null}
          superNextIcon={null}
          value={date}
          onChange={(value) => {
            setDate(value);
          }}
          format={"DD/MM/YYYY"}
          cellRender={(e, info) => (
            <div className="font-semibold text-[12px]">{e.format("DD")}</div>
          )}
        />

        <Dropdown
          title={time?.title || "Chọn thời gian"}
          classNameDropdown="right-0 max-h-[300px] overflow-y-auto custom-scroll z-10"
          classNameButton="px-[12px] py-[10px] bg-white rounded-[8px] w-[170px]"
        >
          <div>
            {timeData?.map((item) => (
              <div
                className="px-[14px] py-[10px] text-sm font-semibold cursor-pointer hover:bg-[#eee]"
                key={item?.title}
                onClick={() => setTime(item)}
              >
                {item?.title}
              </div>
            ))}
          </div>
        </Dropdown>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>TỔNG CỘNG</div>
        <div className="text-red font-semibold text-[24px]">
          {formatString(totalPrice || 0)}đ
        </div>
      </div>

      {isDisableOrder() ? (
        <div className="mt-6 p-3 bg-[#FFF3DB] text-[#E69C0C] text-sm rounded-[4px]">
          CUA BIỂN chỉ xử lý đơn hàng từ 150,000đ trở lên. Bạn vui lòng mua thêm
          sản phẩm nhé!
        </div>
      ) : (
        <div className="mt-6 p-3 bg-[#e5ffe3] text-[#10ab03] text-sm rounded-[4px]">
          Bạn có thể đặt hàng các sản phẩm trong giỏ hàng.
        </div>
      )}

      <button
        onClick={handleCreateDraftOrder}
        disabled={isDisableOrder()}
        className="bg-linear-secondary mt-4 text-white font-semibold w-full py-[10px] rounded-[10px] shadow button-action"
      >
        Thanh toán
      </button>

      <div className="mt-4 block text-center">
        <Link href={"/"} className="text-orangeFF font-semibold">
          Tiếp tục mua hàng
        </Link>
      </div>
    </div>
  );
}

export default OrderCart;
