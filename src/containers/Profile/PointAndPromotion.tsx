import EmptyOrderIcon from "@/app/components/icons/EmptyOrderIcon";
import GiftIcon from "@/app/components/icons/GiftIcon";
import PercentIcon from "@/app/components/icons/PercentIcon";
import ShoppingIcon from "@/app/components/icons/ShoppingIcon";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const data = [
  {
    title: "0 VND",
    extra: "Tổng tiền",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40.666 20C40.666 31.0457 31.7117 40 20.666 40C9.62032 40 0.666016 31.0457 0.666016 20C0.666016 8.9543 9.62032 0 20.666 0C31.7117 0 40.666 8.9543 40.666 20ZM20.666 19.25C18.8711 19.25 17.416 17.7949 17.416 16C17.416 14.2051 18.8711 12.75 20.666 12.75C22.4609 12.75 23.916 14.2051 23.916 16C23.916 16.4142 24.2518 16.75 24.666 16.75C25.0802 16.75 25.416 16.4142 25.416 16C25.416 13.6318 23.683 11.6685 21.416 11.3089V9C21.416 8.58579 21.0802 8.25 20.666 8.25C20.2518 8.25 19.916 8.58579 19.916 9V11.3089C17.649 11.6685 15.916 13.6318 15.916 16C15.916 18.6234 18.0427 20.75 20.666 20.75C22.4609 20.75 23.916 22.2051 23.916 24C23.916 25.7949 22.4609 27.25 20.666 27.25C18.8711 27.25 17.416 25.7949 17.416 24C17.416 23.5858 17.0802 23.25 16.666 23.25C16.2518 23.25 15.916 23.5858 15.916 24C15.916 26.3682 17.649 28.3315 19.916 28.6911V31C19.916 31.4142 20.2518 31.75 20.666 31.75C21.0802 31.75 21.416 31.4142 21.416 31V28.6911C23.683 28.3315 25.416 26.3682 25.416 24C25.416 21.3766 23.2894 19.25 20.666 19.25Z"
          fill="#28303F"
          fill-opacity="0.3"
        />
      </svg>
    ),
    color: "#28A745",
  },
  {
    title: "0",
    extra: "Hóa đơn thành công",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="42"
        viewBox="0 0 41 42"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.332031 2C0.332031 1.17157 1.0036 0.5 1.83203 0.5H5.83203C8.8696 0.5 11.332 2.96243 11.332 6H32.332C36.2376 6 39.4895 8.79871 40.1916 12.5H8.33203V10V6C8.33203 4.61929 7.21274 3.5 5.83203 3.5H1.83203C1.0036 3.5 0.332031 2.82843 0.332031 2ZM15.332 42C16.9889 42 18.332 40.6569 18.332 39C18.332 37.3431 16.9889 36 15.332 36C13.6752 36 12.332 37.3431 12.332 39C12.332 40.6569 13.6752 42 15.332 42ZM33.332 42C34.9889 42 36.332 40.6569 36.332 39C36.332 37.3431 34.9889 36 33.332 36C31.6752 36 30.332 37.3431 30.332 39C30.332 40.6569 31.6752 42 33.332 42ZM8.33203 15.5H40.332V24C40.332 28.4183 36.7503 32 32.332 32H16.332C11.9138 32 8.33203 28.4183 8.33203 24V15.5Z"
          fill="#28303F"
          fill-opacity="0.3"
        />
      </svg>
    ),
    color: "#17A2B8",
  },
  {
    title: "0 VND",
    extra: "Số tiền đã sử dụng mã giảm giá",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.2045 6.5H8.79652C6.47161 3.35964 9.60386 -1.03545 13.4947 0.219696L15.3502 0.818282C15.7727 0.954566 16.2284 0.954567 16.6509 0.818282L18.5064 0.219696C22.3972 -1.03545 25.5294 3.35964 23.2045 6.5ZM9.01286 9.5H22.9882C25.6268 10.961 27.6881 13.4003 28.632 16.4207L31.132 24.4207C33.5467 32.1479 27.7739 40 19.6782 40H12.3228C4.22714 40 -1.54568 32.1479 0.86906 24.4207L3.36906 16.4207C4.31295 13.4003 6.3743 10.961 9.01286 9.5ZM16.7505 15C16.7505 14.5858 16.4147 14.25 16.0005 14.25C15.5863 14.25 15.2505 14.5858 15.2505 15V17.3036C13.0501 17.6202 11.2505 19.3067 11.2505 21.5C11.2505 23.9382 13.4743 25.75 16.0005 25.75C17.8926 25.75 19.2505 27.0722 19.2505 28.5C19.2505 29.9278 17.8926 31.25 16.0005 31.25C14.1084 31.25 12.7505 29.9278 12.7505 28.5C12.7505 28.0858 12.4147 27.75 12.0005 27.75C11.5863 27.75 11.2505 28.0858 11.2505 28.5C11.2505 30.6933 13.0501 32.3798 15.2505 32.6964V35C15.2505 35.4142 15.5863 35.75 16.0005 35.75C16.4147 35.75 16.7505 35.4142 16.7505 35V32.6964C18.9509 32.3798 20.7505 30.6933 20.7505 28.5C20.7505 26.0618 18.5266 24.25 16.0005 24.25C14.1084 24.25 12.7505 22.9278 12.7505 21.5C12.7505 20.0722 14.1084 18.75 16.0005 18.75C17.8926 18.75 19.2505 20.0722 19.2505 21.5C19.2505 21.9142 19.5863 22.25 20.0005 22.25C20.4147 22.25 20.7505 21.9142 20.7505 21.5C20.7505 19.3067 18.9509 17.6202 16.7505 17.3036V15Z"
          fill="#28303F"
          fill-opacity="0.3"
        />
      </svg>
    ),
    color: "#DC3545",
  },
];

const CardItem = ({
  extra,
  icon,
  title,
  color,
}: {
  title: string;
  extra: string;
  icon: React.ReactElement;
  color: string;
}) => {
  return (
    <div
      className="col-span-1 p-4 relative text-white rounded-[10px]"
      style={{
        background: color,
      }}
    >
      <div className="font-bold text-lg">{title}</div>
      <div className="text-sm mt-2">{extra}</div>
      <div
        className="absolute right-4"
        style={{
          top: "calc(50% - 20px)",
        }}
      >
        {icon}
      </div>
    </div>
  );
};

function PointAndPromotion() {
  return (
    <div>
      <div className="font-semibold text-[20px]">Điểm thưởng và ưu đãi</div>
      <div className="mt-8 p-4 w-full border rounded-[10px] bg-white">
        <div className="w-full flex flex-row gap-4 items-stretch justify-between">
          <div
            className="flex-1 p-1 bg-white rounded-[4px] py-4 px-2 lg:px-6"
            style={{
              boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex items-center gap-2">
              <GiftIcon />
              <span className="font-semibold text-sm lg:text-lg">ĐIỂM THƯỞNG</span>
            </div>

            <div className="mt-4 pl-4">
              <div className="flex items-center gap-2 mt-2">
                <GiftIcon color="#0BC742" />
                <span className="text-sm">
                  Điểm thưởng tương ứng với số tiền:
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <ShoppingIcon />
                <span className="text-sm">Đơn hàng mới nhất:</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <PercentIcon />
                <span className="text-sm">Giá trị trung bình đơn</span>
              </div>
            </div>
          </div>

          {/* <div
            className="flex-1 p-1 bg-white rounded-[4px] py-4 px-6"
            style={{
              boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
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
                  fill="#28303F"
                />
              </svg>
              <span className="font-semibold text-sm lg:text-base">Phạm Thanh Hoàng</span>
              <span className="text-orangeFF text-sm lg:text-base font-semibold">1089098397</span>
            </div>
          </div> */}
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data?.map((item) => (
            <CardItem {...item} key={item?.title} />
          ))}
        </div>
      </div>

      <div className="mt-4 px-4 py-6 w-full border rounded-[10px] bg-white">
        <div className="text-sm lg:text-lg font-semibold">MÃ GIẢM GIÁ CỦA BẠN:</div>
        {/* header */}
        <div className="mt-4 border rounded-[12px]">
          <div className="grid grid-cols-3 border-b p-4 bg-[#F8F8F8] rounded-t-[12px]">
            <div className="text-sm">Mã voucher</div>
            <div className="text-sm">Ngày nhận mã</div>
            <div className="text-sm">Ngày hết hạn</div>
          </div>

          <div className="py-12 w-full flex flex-col items-center">
            <EmptyOrderIcon />
            <div className="mt-6 text-secondary text-sm">
              Không tìm thấy mã giảm giá
            </div>
          </div>
        </div>
        {/* body */}
      </div>

      <div className="mt-4 p-4 w-full bg-white rounded-[10px]">
        <div className="flex gap-x-6 gap-y-2 lg:items-center w-full flex-col lg:flex-row">
          <div className="flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.75 1C1.75 0.585786 1.41421 0.25 1 0.25C0.585786 0.25 0.25 0.585786 0.25 1V17C0.25 19.6234 2.37665 21.75 5 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21C21.75 20.5858 21.4142 20.25 21 20.25H5C3.20507 20.25 1.75 18.7949 1.75 17V1ZM6.75 10C6.75 9.58579 6.41421 9.25 6 9.25C5.58579 9.25 5.25 9.58579 5.25 10V16C5.25 16.4142 5.58579 16.75 6 16.75C6.41421 16.75 6.75 16.4142 6.75 16V10ZM11 5.25C11.4142 5.25 11.75 5.58579 11.75 6V16C11.75 16.4142 11.4142 16.75 11 16.75C10.5858 16.75 10.25 16.4142 10.25 16V6C10.25 5.58579 10.5858 5.25 11 5.25ZM16.75 8C16.75 7.58579 16.4142 7.25 16 7.25C15.5858 7.25 15.25 7.58579 15.25 8V16C15.25 16.4142 15.5858 16.75 16 16.75C16.4142 16.75 16.75 16.4142 16.75 16V8Z"
                fill="#E31F1F"
              />
            </svg>

            <div className="font-semibold text-lg whitespace-nowrap">
              TOP 10 SẢN PHẨM MUA SẮM
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between items-center w-full">
            <div className="relative">
              <div className="flex items-center text-orangeFF font-semibold text-sm gap-x-2 cursor-pointer">
                <span>THEO DOANH THU</span>
                <FiChevronDown size={20} />
              </div>
              <div></div>
            </div>

            <div className="relative">
              <div className="flex items-center text-orangeFF font-semibold text-sm gap-x-2 cursor-pointer">
                <span>6 THÁNG QUA</span>
                <FiChevronDown size={20} />
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center text-sm font-semibold text-orangeFF gap-x-2">
          <div>Từ ngày: 13/03/2023</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 16L18 12M18 12L14 8M18 12L6 12"
              stroke="#FF6100"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>14/09/2023</div>
        </div>
      </div>
    </div>
  );
}

export default PointAndPromotion;
