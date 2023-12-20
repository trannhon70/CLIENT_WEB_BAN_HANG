import { logoLoading } from "@/contants/common";
import { faker } from "@faker-js/faker";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

function BlogItem() {
  return (
    <div className="w-full">
      <Link href={"/"} className="block w-full">
        <Image
          src={faker.image.url()}
          alt=""
          width={500}
          height={300}
          className="w-full rounded-[10px]"
          loading="lazy"
          placeholder="blur"
          blurDataURL={logoLoading}
        />
      </Link>

      <Link href={"/"} className="font-semibold">
        Cách làm món ghẹ nấu rau muống thơm ngon, đơn giản cho bữa cơm gia đình
      </Link>

      <div className="mt-4 flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M2.25 6.75H15.75M6 1.5V3.75M12 1.5V3.75M5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V5.625C15.75 3.96815 14.4069 2.625 12.75 2.625H5.25C3.59315 2.625 2.25 3.96815 2.25 5.625V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5Z"
              stroke="#5C5F62"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-xs text-[#616161]">Ngày 8 Tháng 4, 2023</span>
        </div>

        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_1087_8459)">
              <path
                d="M9 9H8.25C8.25 9.32282 8.45657 9.60943 8.76283 9.71151L9 9ZM9.75 5.25C9.75 4.83579 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.83579 8.25 5.25H9.75ZM11.0128 10.4615C11.4058 10.5925 11.8305 10.3801 11.9615 9.98717C12.0925 9.59421 11.8801 9.16947 11.4872 9.03849L11.0128 10.4615ZM9.75 9V5.25H8.25V9H9.75ZM8.76283 9.71151L11.0128 10.4615L11.4872 9.03849L9.23717 8.28849L8.76283 9.71151ZM15.75 9C15.75 12.7279 12.7279 15.75 9 15.75V17.25C13.5563 17.25 17.25 13.5563 17.25 9H15.75ZM9 15.75C5.27208 15.75 2.25 12.7279 2.25 9H0.75C0.75 13.5563 4.44365 17.25 9 17.25V15.75ZM2.25 9C2.25 5.27208 5.27208 2.25 9 2.25V0.75C4.44365 0.75 0.75 4.44365 0.75 9H2.25ZM9 2.25C12.7279 2.25 15.75 5.27208 15.75 9H17.25C17.25 4.44365 13.5563 0.75 9 0.75V2.25Z"
                fill="#5C5F62"
              />
            </g>
            <defs>
              <clipPath id="clip0_1087_8459">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-xs text-[#616161]">12 giờ 54 phút</span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
