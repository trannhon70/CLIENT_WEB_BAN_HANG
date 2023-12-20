"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryBlog from "@/containers/Blog/CategoryBlog";
import Breadcrumb from "@/app/components/breadcrumb";

function CategoryBlogPage() {
  return (
    <>
      <Breadcrumb
        data={[
          {
            title: "Blogs",
            link: "/blogs",
          },
          {
            title: "Góc ẩm thực",
            link: "/blogs/1",
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
          <CategoryBlog
            showSeeAll={false}
            wrapperClassName="mt-4"
            title={"Góc ẩm thực"}
          />
        </div>
      </main>
    </>
  );
}

export default React.memo(CategoryBlogPage);
