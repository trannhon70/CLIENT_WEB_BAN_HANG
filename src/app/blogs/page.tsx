"use client";

import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import CategoryBlog from "@/containers/Blog/CategoryBlog";

const cate = [
  {
    title: "Góc ẩm thực",
  },
  {
    title: "MẸO VẶT",
  },
];

function BlogsPage() {
  return (
    <>
      <Breadcrumb
        data={[
          {
            title: "Blogs",
            link: "/blogs",
          },
        ]}
      />

      <main className="container mx-auto">
        <Link
          href={"/blogs"}
          className="h-auto lg:h-[350px] overflow-hidden w-full rounded-lg animation-link my-4"
        >
          <Image
            src="/images/frame-blogs.png"
            height={240}
            width={1200}
            alt=""
            className="w-full h-full"
          />
        </Link>

        <div>
          {cate?.map((item, index) => (
            <CategoryBlog
              wrapperClassName="mt-4"
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default React.memo(BlogsPage);
