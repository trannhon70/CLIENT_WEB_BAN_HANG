import { getListOrders } from "@/apis/order";
import EmptyOrderIcon from "@/app/components/icons/EmptyOrderIcon";
import Loading from "@/app/components/loading/Loading";
import {
  OrderStatus,
  PaymentStatus,
  TransportStatus,
  logoLoading,
} from "@/contants/common";
import { IOrder } from "@/interfaces";
import { genTransportStatus } from "@/utils";
import formatString from "@/utils/formatString";
import { Badge, Pagination, Tag } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const tabs = [
  {
    id: "",
    title: "Tất cả",
  },
  {
    id: TransportStatus.PENDING,
    title: "Đang xử lý",
  },
  {
    id: TransportStatus.TRANSPORTING,
    title: "Đang giao",
  },
  {
    id: TransportStatus.SUCCESS,
    title: "Đã giao",
  },
  {
    id: TransportStatus.CANCELED,
    title: "Đơn huỷ",
  },
  {
    id: TransportStatus.RETURN,
    title: "Trả hàng",
  },
];

function MyListOrder() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalDoc, setTotalDoc] = useState(0);
  const [tab, setTab] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();

  const getOrders = async (
    pageIndex: number,
    tab: string,
    search: string,
    isInit?: boolean
  ) => {
    try {
      setIsLoading(true);

      const result = await getListOrders(pageIndex, 10, tab, search);

      setOrders(result.data?.result?.data || []);
      setTotalDoc(result.data?.result?.totalDoc || 0);
      if (isInit) {
        setPageIndex(1);
        setSearch("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrders(1, tab, "", true);
  }, [tab]);

  const handleFilter = () => {
    getOrders(1, tab, search, false);
  };

  const handleReset = () => {
    getOrders(1, tab, "", true);
  };

  const handleGoToOrder = (order: IOrder) => {
    if (order?.status === OrderStatus.DRAFT) {
      router.push(`/thanh-toan/${order?.code}`);
    } else {
      router.push(`/don-hang/${order?.code}`);
    }
  };

  return (
    <div>
      <div className="font-semibold text-[20px]">Đơn hàng của tôi</div>

      <ul className="mt-4 flex items-center justify-between bg-white rounded-t-[12px]">
        {tabs?.map((item, index) => (
          <li
            key={index}
            onClick={() => setTab(item?.id)}
            className={`flex-1 text-center py-3 cursor-pointer text-sm font-semibold border-b-[3px] ${
              tab === item?.id ? "border-orangeFF" : "border-[transparent]"
            }`}
          >
            {item?.title}
          </li>
        ))}
      </ul>

      <div className="flex items-stretch flex-col lg:flex-row mt-4 gap-4">
        <div className="flex-1 relative flex items-center justify-between">
          <input
            value={search}
            onChange={(e) => setSearch(e?.target?.value || "")}
            className="outline-none w-full border py-3 pl-4 pr-8 rounded-[8px] text-sm"
            placeholder="Nhập mã đơn hàng"
          />
          <img src="/images/search.svg" className="w-4 h-4 absolute right-4" />
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleFilter}
            className="bg-orangeFF h-full rounded-[8px] px-4 text-sm font-semibold text-white min-h-[32px]"
          >
            Tìm kiếm
          </button>
          <button
            onClick={handleReset}
            className="border bg-white h-full rounded-[8px] px-4 text-sm font-semibold min-h-[32px]"
          >
            Đặt lại
          </button>
        </div>
      </div>

      <div className="mt-4 w-[800px] lg:w-full rounded-[12px] max-w-full overflow-x-auto">
        <div className="w-fit xl:w-full border-b rounded-t-[12px] bg-orangeFF mb-4 text-white flex items-center justify-between text-sm font-semibold p-4">
          <div className="min-w-[120px] w-[15%]">Mã đơn hàng</div>
          <div className="min-w-[80px] w-[10%]">Ngày mua</div>
          <div className="min-w-[360px] w-[45%]">Sản phẩm</div>
          <div className="min-w-[120px] w-[15%] text-center">Tổng tiền</div>
          <div className="min-w-[120px] w-[15%] text-center">Trạng thái</div>
        </div>

        {isLoading ? (
          <div className="w-full text-center py-12">
            <Loading size={60} />
          </div>
        ) : orders?.length === 0 ? (
          <div className="py-12 w-full flex flex-col items-center">
            <EmptyOrderIcon />
            <div className="mt-6 text-secondary text-sm">
              Không tìm thấy đơn hàng
            </div>
          </div>
        ) : (
          <>
            {orders?.map((item, index) => (
              <div
                className="[&:not(:last-child)]:border-b px-4 py-3 text-xs bg-white w-fit xl:w-full mb-4 rounded-[8px] shadow"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <div className="min-w-[120px] w-[15%]">
                    <div
                      className="font-semibold cursor-pointer"
                      onClick={() => handleGoToOrder(item)}
                    >
                      {item?.code}
                    </div>
                  </div>
                  <div className="min-w-[80px] w-[10%]">
                    {dayjs(item?.created_at).format("DD/MM/YYYY")}
                  </div>
                  <div className="min-w-[360px] w-[45%]">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={item?.orderItem?.[0]?.product?.file?.[0]?.link}
                          alt=""
                          width={48}
                          height={48}
                          className="rounded-[4px] h-[48px] w-[48px]"
                          placeholder="blur"
                          blurDataURL={logoLoading}
                          loading="lazy"
                        />

                        <div>
                          <Link
                            className="text-xs"
                            href={`/chi-tiet-san-pham/${item?.orderItem?.[0]?.product?.slug}`}
                          >
                            {item?.orderItem?.[0]?.product?.name}
                          </Link>
                          <div className="text-secondary">
                            Đơn vị:{" "}
                            {item?.orderItem?.[0]?.product?.price?.unit?.name}
                          </div>
                          {(item?.orderItem?.length || 0) >= 2 ? (
                            <div className="text-secondary">
                              + {(item?.orderItem?.length || 0) - 1} sản phẩm
                              khác
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="min-w-fit">
                        x{item?.orderItem?.[0]?.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[120px] w-[15%] text-center">
                    {formatString(item?.totalPrice || 0)}đ
                  </div>
                  <div className="min-w-[120px] w-[15%] text-center">
                    <Badge
                      className="text-xs font-semibold"
                      status={
                        genTransportStatus(item?.transportStatus)?.status as any
                      }
                      text={genTransportStatus(item?.transportStatus)?.text}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div
                    className="text-orangeFF cursor-pointer"
                    onClick={() => handleGoToOrder(item)}
                  >
                    Xem chi tiết
                  </div>
                </div>

                <div className="border-t mt-4 py-4 text-right">
                  <button className="bg-orangeFF text-white py-2 px-4 rounded-[4px] font-semibold">
                    Mua lại
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {totalDoc > 0 && (
        <div className="mt-4 text-right">
          <Pagination
            className="pagination-order"
            current={pageIndex}
            total={totalDoc}
            onChange={(page) => {
              getOrders(page, tab, search, false);
              setPageIndex(1);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MyListOrder;
