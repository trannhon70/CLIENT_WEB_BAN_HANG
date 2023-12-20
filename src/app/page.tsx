import {
  BannerFlashSale,
  CommonProduct,
  General,
  MostSoldProducts,
  OnPromotion,
  Services,
  SuggestedProduct,
} from "./components/pages/home";
import { SingleCate } from "./components/pages/home/SingleCate";
import Customer from "./components/pages/home/Customer/Customer";
import Recipe from "./components/pages/home/Recipe/Recipe";
import Policy from "./components/pages/home/Policy/Policy";
import Partner from "./components/pages/home/Partner/Partner";
import { getBannerHome } from "@/apis/home";
import { getCategoryHome, getListCategories } from "@/apis/product";
import { ICategory } from "@/interfaces";
import CategoryHome from "@/containers/Home/CategoryHome";
import CategoryParentHome from "@/containers/Home/CategoryParentHome";

const getData = async (): Promise<{ banner: any; categories: ICategory[] }> => {
  try {
    // const [bannerRes, categoryRes] = await Promise.all([
    //   getBannerHome(),
    //   getListCategories(),
    // ]);
    const bannerRes = await getBannerHome();
    const categoryRes = await getCategoryHome();
    const categories = categoryRes.data?.result?.filter(
      (item: ICategory) =>
        item?.isShow &&
        item?.slug !== "san-pham-ban-chay" &&
        item?.slug !== "goi-y-cho-ban"
    );

    return {
      banner: bannerRes?.data?.result || [],
      categories: categories || [],
    };
  } catch (error) {
    return {
      banner: [],
      categories: [],
    };
  }
};

export default async function Home() {
  const { banner, categories } = await getData();

  return (
    <main className="container mx-auto">
      <General banner={banner} />
      <div id="start-pointing" className="none"></div>
      <Services />
      {/* <BannerFlashSale /> */}
      {/* <CommonProduct /> */}
      <CategoryParentHome
        icon="burning.svg"
        title="Sản phẩm bán chạy"
        slug="san-pham-ban-chay"
      />

      <CategoryParentHome
        icon="best-seller.svg"
        title="Gợi ý cho bạn"
        slug="goi-y-cho-ban"
      />
      {/* <SuggestedProduct /> */}
      {/* <OnPromotion /> */}
      <CategoryHome categories={categories?.slice(0, 5)} />
      {/* <SingleCate />
      <SingleCate />
      <SingleCate />
      <SingleCate /> */}
      <Customer />
      <Recipe />
      <Policy />
      {/* <Partner /> */}
    </main>
  );
}
