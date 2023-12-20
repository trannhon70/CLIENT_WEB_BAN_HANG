import Link from "next/link";
import React, { Fragment } from "react";

type Props = {
  data: Array<{ title: string; link: string }>;
};

function Breadcrumb({ data }: Props) {
  return (
    <div className="py-4 px-3 bg-[#F7F7F7] mb-2">
      <div className="container mx-auto flex gap-x-2">
        <Link className="text-orangeFF font-semibold" href={"/"}>
          Trang chủ
        </Link>
        {data?.map((item, index) => (
          <Fragment key={index}>
            <div>/</div>
            <Link href={item?.link}>{item.title}</Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
