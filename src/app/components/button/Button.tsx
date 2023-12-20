"use client";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
interface IButton {
  children: React.ReactNode;
  className?: string;
  icon?: any;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}
const Button = ({
  className,
  icon: Icon,
  href,
  children,
  type = "button",
  onClick,
}: IButton) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`flex items-center justify-center gap-2 ${className}`}
        >
          {Icon && <Icon size={20} />}
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={twMerge(
            `rounded-lg flex items-center justify-center gap-1 text-base font-semibold text-white bg-orangeFF py-2.5 px-[18px] ${className}`
          )}
          onClick={onClick}
        >
          {Icon && <Icon size={20} />}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
