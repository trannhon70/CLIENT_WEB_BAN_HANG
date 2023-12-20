import React from "react";
import BlogItem from "./BlogItem";
import Link from "next/link";

type Props = {
  wrapperClassName?: string;
  title: string;
  showSeeAll?: boolean;
};

function CategoryBlog({
  title,
  wrapperClassName = "",
  showSeeAll = true,
}: Props) {
  return (
    <div className={wrapperClassName}>
      <div className="uppercase font-semibold text-lg">{title}</div>

      <div className="grid grid-cols-12 gap-6 mt-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <BlogItem />
          </div>
        ))}
      </div>

      {showSeeAll && (
        <div className="mt-6 mb-4 text-center">
          <Link href={"/blogs/1"}>
            <button className="border border-orangeFF px-3 py-2 text-orangeFF rounded-[8px]">
              Xem tất cả
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoryBlog;
