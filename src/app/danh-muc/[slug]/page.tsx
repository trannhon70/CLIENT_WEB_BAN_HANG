import { getCategoryBySlug } from "@/apis/product";
import Breadcrumb from "@/app/components/breadcrumb";
import ListProductsCategory from "@/containers/Category/ListProductsCategory";
import { ICategory, IProduct } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const getData = async (slug: string) => {
  try {
    const [categoryRes] = await Promise.all([getCategoryBySlug(slug || "")]);

    return {
      category: categoryRes?.data?.result?.data,
    };
  } catch (error) {
    console.log(error);
    return {
      category: null,
    };
  }
};

async function CategoryProductPage({ params }: any) {
  const { category }: { category: ICategory } = await getData(
    params?.slug as string
  );

  if (!category) {
    redirect("/");
  }

  return (
    <>
      <Breadcrumb
        data={[
          {
            title: "Danh mục",
            link: "/",
          },
          {
            title: category?.name,
            link: `/danh-muc/${category?.slug}`,
          },
        ]}
      />

      <main className="container mx-auto">
        <Link
          href={"/"}
          className="h-auto lg:h-[350px] overflow-hidden w-full rounded-lg animation-link mt-4"
        >
          <Image
            src="/images/single-banner/baner001.png"
            height={240}
            width={1200}
            alt=""
            className="w-full h-full"
          />
        </Link>

        <div className="border-b block border-orangeFF mt-8 mb-6">
          <div className="pointer text-white font-semibold flex items-center justify-center uppercase text-sm">
            Bao rẻ - bao tươi ngon
          </div>
        </div>

        <ListProductsCategory slug={params?.slug || ""} />
      </main>
    </>
  );
}

export default React.memo(CategoryProductPage);
