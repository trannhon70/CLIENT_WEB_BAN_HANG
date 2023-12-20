import React from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

type Props = {
  className?: string;
  total?: number;
  pageIndex?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
};

function CPagination({
  className = "",
  total = 0,
  pageIndex = 0,
  pageSize = 10,
  onChange = () => null,
}: Props) {
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <a className="flex items-center border py-1/2 px-2 rounded-lg">
          <HiOutlineArrowSmLeft size={20} className="mr-1" />
          <span>Trước</span>
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className="flex items-center border py-1/2 px-2 rounded-lg">
          <span>Sau</span>
          <HiOutlineArrowSmRight size={20} className="ml-1" />
        </a>
      );
    }

    return originalElement;
  };

  return (
    <div className={className}>
      <Pagination
        className="relative flex justify-center pagination-category"
        total={total}
        itemRender={itemRender}
        showSizeChanger={false}
        pageSizeOptions={[]}
        current={pageIndex}
        pageSize={pageSize}
        onChange={onChange}
      />
    </div>
  );
}

export default CPagination;
