import Link from "next/link";
import React from "react";

type Props = {
  link?: string;
};

const SeeMore = ({ link = "/" }: Props) => {
  return (
    <div className=" full-withradius border w-fit h-full">
      <Link
        href={link}
        className="block py-2.5 px-[18px]  text-base font-semibold leading-6 not-italic"
        style={{
          background:
            "linear-gradient(260deg, rgb(255, 102, 0) 0%, rgb(236, 159, 5) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Xem thêm
      </Link>
    </div>
  );
};

export default SeeMore;
