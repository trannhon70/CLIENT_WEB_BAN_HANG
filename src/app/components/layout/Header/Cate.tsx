"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { MainMenu } from "../../menu";
import useClickOutSide from "@/hooks/useClickOutSide";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { getProductPaging } from "@/apis/product";
import { IProduct } from "@/interfaces";
import { logoLoading } from "@/contants/common";
import formatString from "@/utils/formatString";
import Link from "next/link";
import Loading from "../../loading/Loading";

const Cate = () => {
  const ref = useRef(null);
  const refSearch = useRef(null);
  const [showHello, setShowHello] = useState(false);
  // show menu in pages other than home page
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const searchValue = useDebounce(search, 500);
  const [isSearching, setIsSearching] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalDoc, setTotalDoc] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const pointingDiv = document.getElementById("start-pointing");
  //     if (pointingDiv && pointingDiv.getBoundingClientRect().top <= 56) {
  //       setShowHello(true);
  //     } else {
  //       setShowHello(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useClickOutSide(ref, () => setShowMenu(false));

  useClickOutSide(refSearch, () => setShowSearch(false));

  useEffect(() => {
    const searchProduct = async (search: string) => {
      try {
        setIsSearching(true);
        if (search) {
          setShowSearch(true);
          const result = await getProductPaging(1, 4, search);
          setProducts(result.data?.result?.data || []);
          setTotalDoc(result.data?.result?.totalDoc || 0);
        } else {
          setShowSearch(false);
          setProducts([]);
          setTotalDoc(0);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSearching(false);
      }
    };

    searchProduct(searchValue);
  }, [searchValue]);

  return (
    <div className="cate-navbar bg-[#FF8133] sticky z-50 py-4 lg:py-0 top-0">
      <div className="container mx-auto">
        <div className="flex justify-start grid grid-cols-12 gap-6 items-center">
          <div className="hidden lg:block col-span-3">
            <div
              ref={ref}
              className={`hidden lg:block cursor-pointer relative cate-main bg-[#E85800] w-[302px] min-w-[302px] ${
                showHello ? "enable-show-menu" : "disable-show-menu"
              }`}
            >
              <div
                onClick={() => {
                  setShowMenu(true);
                }}
                className="w-full flex items-center justify-between px-3 py-4"
              >
                <div className="flex gap-3">
                  <Image
                    src="/images/bar-menu.svg"
                    alt=""
                    height={14}
                    width={14}
                  />
                  <p className="text-base text-mainFF font-semibold not-italic">
                    DANH MỤC
                  </p> 
                </div>

                <Image
                  src="/images/icon-down.svg"
                  alt=""
                  height={24}
                  width={24}
                />
              </div>
              <div
                className={`absolute top-full left-0 shadow overflow-hidden ${
                  pathname !== "/" && showMenu ? "block" : "hidden"
                }`}
              >
                <MainMenu />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9 flex basis-full gap-6">
            <div className="relative w-full" ref={refSearch}>
              <input
                value={search}
                onFocus={() => {
                  if (search) {
                    setShowSearch(true);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.keyCode === 13) {
                    setShowSearch(false);
                    router.push(`/tim-kiem?q=${search}`);
                  }
                }}
                onChange={(e) => setSearch(e?.target?.value || "")}
                placeholder="Tìm kiếm trên CUABIEN"
                className="w-full  px-3 py-2 pr-12  rounded-md outline-0 "
              />
              <button className="absolute h-full right-3 cursor-pointer">
                <Image src="/images/search.svg" alt="" height={24} width={24} />
              </button>

              <div
                className={`result-search-home shadow ${
                  showSearch ? "" : "hidden"
                }`}
              >
                {isSearching ? (
                  <div className="w-full text-center py-6">
                    <Loading size={60} />
                  </div>
                ) : totalDoc === 0 ? (
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
                  <>
                    {products?.map((product) => (
                      <div
                        key={product?.id}
                        className="py-4 [&:not(:first-child)]:border-t flex items-center justify-between"
                      >
                        <div className="text-sm">
                          <Link
                            onClick={() => setShowSearch(false)}
                            href={`/chi-tiet-san-pham/${product?.slug}`}
                          >
                            {product?.name}
                          </Link>
                          <div className="font-semibold mt-1">
                            {formatString(product?.price?.[0]?.price || 0)}đ{" "}
                            <span className="line-through text-secondary text-xs">
                              {formatString(
                                product?.price?.[0]?.fakePrice || 0
                              )}
                              đ
                            </span>
                          </div>
                        </div>

                        <Image
                          src={product?.file?.[0]?.link}
                          alt=""
                          width={60}
                          height={60}
                          className="w-[60px] h-[60px] rounded-[8px]"
                          placeholder="blur"
                          blurDataURL={logoLoading}
                          loading="lazy"
                        />
                      </div>
                    ))}
                    {totalDoc > 4 && (
                      <div className="px-4 pt-3 text-center border-t">
                        <Link
                          onClick={() => setShowSearch(false)}
                          href={`/tim-kiem?q=${searchValue}`}
                          className="w-full text-sm font-semibold"
                        >
                          Xem thêm {totalDoc - 4} sản phẩm
                        </Link>
                      </div>
                    )}
                    <div></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cate;
