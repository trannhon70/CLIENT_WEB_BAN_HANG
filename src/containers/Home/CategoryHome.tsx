"use client";
import { SingleCate } from "@/app/components/pages/home/SingleCate";
import { ICategory } from "@/interfaces";
import React from "react";

type Props = {
  categories: ICategory[];
};

function CategoryHome({ categories }: Props) {
  return (
    <>
      {categories?.map((item, index) => (
        <React.Fragment key={index}>
          {item?.product?.length ? <SingleCate category={item} /> : null}
        </React.Fragment>
      ))}
    </>
  );
}

export default CategoryHome;
