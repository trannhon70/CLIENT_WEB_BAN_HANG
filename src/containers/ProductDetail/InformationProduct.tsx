"use client";

import CardProductDetail from "@/app/components/card/CardProductDetail";
import UnitPrice from "@/app/components/unit-price";
import React, { useMemo, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import BuyTogetherItem from "./BuyTogetherItem";
import { IAddCartItem, IProduct } from "@/interfaces";
import formatString from "@/utils/formatString";
import { genDiscountProduct } from "@/utils";
import { useAppDispatch } from "@/redux/store";
import { addCartItem } from "@/redux/slices";
import useShowToast from "@/hooks/useShowToast";

const data = [
  {
    title: "Set Rau Ăn Kèm Sashimi",
    price: "25,000đ",
  },
  {
    title: "Rong Nho Tươi",
    price: "45,000đ",
  },
  {
    title: "Mù Tạt Nhật Tươi ( Wasabi Tươi )",
    price: "35,000đ",
  },
  {
    title: "Nước tương Kikkoman",
    price: "89,000đ",
  },
  {
    title: "Đuôi Cá Hồi Phile Tươi",
    price: "80,000đ",
    discount: "100,000đ",
  },
  {
    title: "Cá Hồi Phi Lê Tươi Nguyên Miếng",
    price: "1,100,000đ",
    discount: "1,400,000đ",
  },
];

type Props = {
  product: IProduct;
  coBuyProducts: IProduct[];
};

function InformationProduct({ product, coBuyProducts }: Props) {
  const [price, setPrice] = useState(product?.price?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useAppDispatch();
  const showToast = useShowToast();
  const [chosenCoBuy, setChosenCoBuy] = useState<IProduct[]>([]);
  const [isAddingCoBuy, setIsAddingCoBuy] = useState(false);

  const handleChangeQuantity = (quantity: number) => {
    if (quantity <= 0) return;

    setQuantity(quantity);
  };

  const handleAddCartItem = async () => {
    try {
      setIsAdding(true);
      const data: IAddCartItem = {
        note: "",
        product: product?.id,
        unit: price?.unit?.id,
        quantity,
      };

      const result = await dispatch(addCartItem([data] as any)).unwrap();
      if (result?.status === 1) {
        showToast("success", "Sản phẩm đã được thêm vào giỏ hàng");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleChangeChosenCoBuy = (product: IProduct, checked: boolean) => {
    if (checked) {
      setChosenCoBuy((prevState) => {
        return [...prevState, product];
      });
    } else {
      setChosenCoBuy((prevState) => {
        return prevState?.filter((item) => item?.id !== product?.id);
      });
    }
  };

  const totalPriceCoBuy = useMemo(() => {
    let total = 0;
    chosenCoBuy?.forEach((item) => {
      total += (item?.price?.[0]?.price || 0) * 1;
    });
    console.log(total);
    return total;
  }, [chosenCoBuy]);

  const handleAddCartItemCoBuy = async () => {
    try {
      setIsAddingCoBuy(true);

      const data: IAddCartItem[] = chosenCoBuy?.map((item) => {
        return {
          product: item?.id,
          quantity: 1,
          unit: item?.price?.[0]?.unit?.id,
          note: "",
        };
      });

      const result = await dispatch(addCartItem(data)).unwrap();

      showToast("success", "Sản phẩm mua chung đã được thêm vào giỏ hàng");
      setChosenCoBuy([]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsAddingCoBuy(false);
    }
  };

  return (
    <>
      <div className="text-[24px] font-bold">{product?.name}</div>
      {/* <p>
        <span className="font-bold">Mã SP:</span> 1020016
      </p> */}

      <div className="py-4">
        {product?.detail?.parameter?.map((item, index) => (
          <p className="mb-2">
            <span className="font-bold">{item?.key}:</span> {item?.value}
          </p>
        ))}
        {/* 
        <p className="mb-2">
          <span className="font-bold">Tình trạng:</span> Nauy- nhập khẩu bằng
          đường bay.
        </p>
        <p className="mb-2">
          <span className="font-bold">Xuất xứ:</span> Chất lượng chuẩn ăn sống
          sashimi.
        </p>
        <p className="mb-2">
          <span className="font-bold">HSD, bảo quản:</span> 04 ngày kể từ NSX.
          Bảo quản nhiệt độ tốt nhất từ 2-5 độ C.
        </p>
        <p className="mb-2">
          <span className="font-bold">Món ngon:</span> sashimi, cuốn sushi, các
          món cơm cuộn, nướng, áp chảo, ...
        </p> */}
        <p>
          * Lưu ý: Hình ảnh website có thể sẽ khác thực tế bạn nhận theo tuỳ
          trọng lượng và phần cắt.
        </p>
      </div>

      {/* price */}
      <div className="flex items-center gap-x-4">
        <div className="text-[#FF424E] text-[28px] font-semibold leading-1">
          {formatString(price?.price || 0)}đ
        </div>
        <div className="line-through text-sm text-[#7A7A7A]">
          {formatString(price?.fakePrice || 0)}đ
        </div>
        <div className="bg-[#FFF0F1] rounded-[2px] border-[#FF424E] border px-2 py-1 text-sm text-[#FF424E]">
          {genDiscountProduct(product)}
        </div>
      </div>

      <div className="text-xs text-[#7A7A7A]">
        Quy Cách: {price?.unit?.name}
      </div>

      {/* unit */}
      <div className="mt-4 flex items-center gap-x-2">
        <div className="font-semibold">Chọn</div>
        {product?.price?.map((item) => (
          <UnitPrice
            onChoose={() => {
              setQuantity(1);
              setPrice(item);
            }}
            title={item?.unit?.name}
            key={item?.id}
            checked={Boolean(price?.id === item?.id)}
          />
        ))}
      </div>

      {/* quantity */}
      <div className="flex items-center mt-4 gap-4">
        <div className="font-semibold">Số lượng</div>
        <div className="flex">
          <button
            onClick={() => handleChangeQuantity(quantity - 1)}
            className="border h-[32px] w-[32px] flex items-center justify-center rounded-s-[8px]"
          >
            <AiOutlineMinus />
          </button>
          <input
            onChange={(e) => handleChangeQuantity(Number(e?.target?.value))}
            type="number"
            value={quantity}
            className="min-w-[50px] max-w-[50px] text-center px-2 text-sm overflow-hidden h-[32px] border outline-none"
          />
          <button
            onClick={() => handleChangeQuantity(quantity + 1)}
            className="border h-[32px] w-[32px] flex items-center justify-center rounded-e-[8px]"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      {/* <CardProductDetail className="mt-4" title="Sản phẩm tặng kèm">
        <div className="flex items-center gap-x-4">
          <div className="min-w-[80px] flex items-center gap-2">
            <input type="radio" />
            <img className="w-[50px] h-[50px]" src={faker.image.url()} />
          </div>
          <div className="text-sm">
            <div>Khi mua 1 Thân Cá Hồi Phile Tươi</div>
            <div>Giảm 50% sản phẩm Rong Nho Tươi.</div>
          </div>
        </div>

        <div className="flex items-center gap-x-4 mt-4">
          <div className="min-w-[80px] flex items-center gap-2">
            <input type="radio" />
          </div>
          <div className="text-sm">Không Chọn Ưu Đãi</div>
        </div>
      </CardProductDetail>

      <CardProductDetail className="mt-4" title="Khuyến mãi">
        <div className="flex items-center">
          <div className="text-sm">
            HÓA ĐƠN {">"} 1.500K trở lên được TẶNG HÀU NƯỚNG VỊ PHÔ MAI/ BƠ TỎI
          </div>
        </div>
      </CardProductDetail> */}

      {/* add to cart */}
      <button
        className="w-[300px] py-2 text-white font-semibold mt-4 rounded-[10px] button-action"
        style={{ background: "linear-gradient(260deg, #F60 0%, #EC9F05 100%)" }}
        disabled={isAdding}
        onClick={handleAddCartItem}
      >
        Thêm vào giỏ
      </button>

      {/*  buy together */}
      <div className="mt-6">
        <div className="font-semibold text-sm">THƯỜNG ĐƯỢC MUA CÙNG</div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          {coBuyProducts?.map((item) => (
            <div className="col-span-2 lg:col-span-1">
              <BuyTogetherItem
                checked={Boolean(chosenCoBuy?.find((e) => e?.id === item?.id))}
                onChange={handleChangeChosenCoBuy}
                item={item}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="font-semibold">
            Tổng tiền:{" "}
            <span className="text-orangeFF">
              {formatString(totalPriceCoBuy || 0)}đ
            </span>
          </div>

          <button
            className="bg-orangeFF rounded-[10px] py-2 px-[14px] text-sm text-white button-action"
            onClick={handleAddCartItemCoBuy}
            disabled={isAddingCoBuy}
          >
            Thêm {chosenCoBuy?.length || 0} sp mua cùng
          </button>
        </div>
      </div>
    </>
  );
}

export default InformationProduct;
