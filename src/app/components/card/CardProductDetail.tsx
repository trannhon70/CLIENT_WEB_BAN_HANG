import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

function CardProductDetail({ children, title, className = "" }: Props) {
  return (
    <div className={`border border-[#D0021B] rounded-[10px] ${className}`}>
      <div className="bg-[#D0021B] px-3 py-2 rounded-t-[10px] flex items-center gap-x-2">
        <img src="/images/gift.png" className="w-4 h-4" />
        <div className="text-white font-semibold">{title}</div>
      </div>
      <div className="p-2 block">{children}</div>
    </div>
  );
}

export default CardProductDetail;
