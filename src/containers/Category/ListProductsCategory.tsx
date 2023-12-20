"use client";
import React, { useEffect, useState } from "react";
import CPagination from "@/app/components/pagination";
import RelativeProductItem from "@/containers/ProductDetail/RelativeProductItem";
import { getProductsByCategorySlug } from "@/apis/product";
import { IProduct } from "@/interfaces";
import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = () => {
  const data = [
    "",
    "",
    "hidden md:hidden lg:block",
    "hidden md:hidden lg:block",
  ];
  return (
    <div className="grid grid-cols-12 gap-6">
      {data?.map((item, index) => (
        <div className={`col-span-12 md:col-span-6 lg:col-span-3 ${item}`}>
          <Skeleton className="h-[250px]" />
        </div>
      ))}
    </div>
  );
};

type Props = {
  slug: string;
};

function ListProductsCategory({ slug }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showPagination, setShowPagination] = useState(false);

  const getProducts = async (slug: string, pageIndex: number) => {
    try {
      setIsLoading(true);
      const result = await getProductsByCategorySlug(slug, pageIndex, 20);

      setProducts(result?.data?.result?.products || []);
      setTotal(result?.data?.result?.totalDocs || 0);
      setShowPagination(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts(slug, 1);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-12 gap-6">
          {products?.map((item, index) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              key={item?.id}
            >
              <RelativeProductItem product={item} />
            </div>
          ))}
        </div>
      )}
      {total > 0 && showPagination ? (
        <CPagination
          total={total}
          className="mt-6"
          pageIndex={pageIndex}
          pageSize={20}
          onChange={(page) => {
            setPageIndex(page);
            getProducts(slug, page);
          }}
        />
      ) : total === 0 && showPagination ? (
        <div className="text-center my-4 font-semibold text-lg">Hiện tại danh mục chưa có sản phẩm</div>
      ) : null}
    </>
  );
}

export default ListProductsCategory;
