import { axiosInstanceNonAuth } from "./instance";

export const getListCategories = () =>
  axiosInstanceNonAuth.get("/products/categories?pageIndex=1&pageSize=20");

export const getCategoryBySlug = (slug: string) =>
  axiosInstanceNonAuth.get(`/products/categories/getBySlug/${slug}`);

export const getCategoryHome = () =>
  axiosInstanceNonAuth.get(`/products/categories/getCateHome`);

export const getSidebarCategory = () =>
  axiosInstanceNonAuth.get(`/products/categories/getCateSidebar`);

export const getProductsByCategorySlug = (
  slug: string,
  pageIndex: number,
  pageSize: number
) =>
  axiosInstanceNonAuth.get(
    `/products/product/get-by-category-slug/${slug}?pageIndex=${pageIndex}&pageSize=${pageSize}`
  );

export const getProductBySlug = (slug: string) =>
  axiosInstanceNonAuth.get(`/products/product/getBySlug/${slug}`);

export const getProductsRelativeById = (
  id: string,
  pageIndex: number,
  pageSize: number
) =>
  axiosInstanceNonAuth.get(
    `/products/product/getRelative/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`
  );

export const getListPromotions = () =>
  axiosInstanceNonAuth.get(`/products/promotions`);

export const getListTransports = () =>
  axiosInstanceNonAuth.get(`/products/transportations`);

export const getListPopularProducts = () =>
  axiosInstanceNonAuth.get(`/products/product/popular-product`);

export const getChildCategoriesByParent = (slug: string) =>
  axiosInstanceNonAuth.get(
    `/products/categories/get-all-cate-children/${slug}`
  );

export const getCoBuyByProduct = (slug: string) =>
  axiosInstanceNonAuth.get(
    `/products/product/get-decorator-by-product-slug/${slug}`
  );

export const getProductPaging = (
  pageIndex: number,
  pageSize: number,
  search: string
) =>
  axiosInstanceNonAuth.get(
    `/products/product?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`
  );
