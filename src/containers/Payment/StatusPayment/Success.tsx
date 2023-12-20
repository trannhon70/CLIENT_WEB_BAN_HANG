import React from "react";
import InformationOrder from "./InformationOrder";
import { IOrder } from "@/interfaces";

type Props = {
  order: IOrder;
};

function Success({ order }: Props) {
  return (
    <div className="flex items-start gap-x-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g clip-path="url(#clip0_1006_9183)">
          <path
            d="M25 49C38.255 49 49 38.255 49 25C49 11.745 38.255 1 25 1C11.745 1 1 11.745 1 25C1 38.255 11.745 49 25 49Z"
            stroke="#E85800"
            stroke-width="2"
          />
          <path
            d="M15 24.51L22.307 31.818L35.125 19"
            stroke="#E85800"
            stroke-width="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1006_9183">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>
        <div className="text-lg font-bold">Đặt Hàng Thành Công</div>
        <div className="text-secondary text-sm">Mã đơn hàng #{order?.code}</div>

        <div className="text-sm mt-2">
          Cảm ơn Bạn đã cho CUABIEN.VN cơ hội phục vụ!
        </div>

        {/* <div className="text-sm mt-2">
          Chúng tôi đã gởi thông tin đơn hàng đến email tpgaming2702@gmail.com,
          vui lòng theo dõi đơn hàng.
        </div> */}

        <div className="mt-2 bg-[#D1ECF1] rounded-[4px] p-3 text-[#0C5460] text-sm">
          CUABIEN tiến hành xử lý đơn hàng của Bạn. Nếu cảm thấy hài lòng, hãy
          giúp CUABIEN chia sẻ đến người thân của Bạn nhé. Chúc Bạn có nhiều
          niềm vui! 
        </div>

        <InformationOrder order={order} />
      </div>
    </div>
  );
}

export default Success;
