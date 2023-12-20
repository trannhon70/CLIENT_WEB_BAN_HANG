"use client";
import { IProduct } from "@/interfaces";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import { getProductPaging } from "@/apis/product";
import Loading from "../components/loading/Loading";
import RelativeProductItem from "@/containers/ProductDetail/RelativeProductItem";
import Image from "next/image";

function SearchPage({ searchParams }: any) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async (search: string) => {
    try {
      setIsLoading(true);
      const result = await getProductPaging(1, 100, search);
      setProducts(result.data?.result?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams?.q) {
      getProducts(searchParams?.q || "");
    } else {
      router.push("/");
    }
  }, [searchParams]);
  return (
    <>
      <Breadcrumb
        data={[
          {
            link: `/tim-kiem?q=${searchParams?.q}`,
            title: `Tìm kiếm: "Kết quả tìm kiếm "${searchParams?.q}" - CUABIEN"`,
          },
        ]}
      />
      <main className="pt-4 pb-12 mt-[-10px] mb-[-35px]">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="w-full text-center py-12">
              <Loading size={60} />
            </div>
          ) : products?.length === 0 ? (
            <div className="py-8 w-full flex flex-col items-center">
              <Image
                alt="Giỏ hàng trống"
                src={"/images/cart_empty_background.png"}
                width={200}
                height={100}
              />

              <div className="text-base font-semibold mt-4">
                Không tìm thấy sản phẩm
              </div>
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-12 gap-4">
              {products?.map((item, index) => (
                <div
                  className="col-span-12 md:col-span-6 lg:col-span-3"
                  key={index}
                >
                  <RelativeProductItem
                    isBestSeller={item?.bestSeller}
                    product={item}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default React.memo(SearchPage);
