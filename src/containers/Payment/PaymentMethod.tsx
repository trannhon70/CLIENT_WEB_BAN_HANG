import React from "react";

const data = [
  {
    id: 1,
    title: "Thanh Toán Khi Nhận Hàng (COD)",
    image: "/images/cod.svg",
    children: [],
  },
  // {
  //   id: 2,
  //   title: "Thanh Toán Chuyển Khoản",
  //   image: "/images/transfer.svg",
  //   children: [],
  // },
  // {
  //   id: 3,
  //   title: "Ví Momo",
  //   image: "/images/momo.svg",
  //   children: [],
  // },
  // {
  //   id: 4,
  //   title: "Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY",
  //   image: "/images/vnpay.svg",
  //   children: ["/images/option-vnpay.svg"],
  // },
];

function PaymentMethod() {
  return (
    <div className="mt-4">
      <div className="font-semibold">Phương thức thanh toán</div>
      <div className="mt-4  border border-[#D9D9D9] rounded-[10px]">
        {data?.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 text-sm p-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#D9D9D9]"
          >
            <input checked type="radio" />
            <img src={item.image} className="w-[40px] h-[40px]" />
            <div>
              <div>{item.title}</div>
              <div>
                {item?.children?.map((item) => (
                  <img src={item} key={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
