import AdviseOrder from "@/containers/ProductDetail/AdviseOrder";
import DescriptionAndRateProduct from "@/containers/ProductDetail/DescriptionAndRateProduct";
import InformationProduct from "@/containers/ProductDetail/InformationProduct";
import PreviewProduct from "@/containers/ProductDetail/PreviewProduct";
import RelativeProduct from "@/containers/ProductDetail/RelativeProduct";
import React from "react";
import Breadcrumb from "@/app/components/breadcrumb";
import {
  getCoBuyByProduct,
  getProductBySlug,
  getProductsRelativeById,
} from "@/apis/product";
import { IProduct } from "@/interfaces";

const getData = async (slug: string) => {
  try {
    const result = await getProductBySlug(slug || "");
    const relativeRes = await getProductsRelativeById(
      result?.data?.result?.id || "",
      1,
      4
    );
    const coBuyRes = await getCoBuyByProduct(slug || "");
    return {
      product: result?.data?.result,
      relativeProducts: relativeRes.data?.result?.data || [],
      coBuyProducts: coBuyRes?.data?.result || [],
    };
  } catch (error) {
    return {
      product: null,
      relativeProducts: [],
      coBuyProducts: [],
    };
  }
};

async function ProjectDetailPage({ params }: any) {
  const {
    product,
    relativeProducts,
    coBuyProducts,
  }: {
    product: IProduct;
    relativeProducts: IProduct[];
    coBuyProducts: IProduct[];
  } = await getData(params?.id);

  return (
    <>
      <Breadcrumb
        data={[
          { title: "Cá", link: "/" },
          {
            title: product?.name,
            link: `/chi-tiet-san-pham/${product?.slug}`,
          },
        ]}
      />
      <main className="container mx-auto">
        <div className="grid grid-cols-12 gap-x-2 gap-y-4">
          <div className="col-span-12 lg:col-span-4">
            <PreviewProduct product={product} />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <InformationProduct
              product={product}
              coBuyProducts={coBuyProducts}
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <AdviseOrder />
          </div>
        </div>

        {/* description and rate */}
        <DescriptionAndRateProduct product={product} />

        {/* sản phẩm liên quan */}
        <RelativeProduct relativeProducts={relativeProducts} />
      </main>
    </>
  );
}

export default React.memo(ProjectDetailPage);
