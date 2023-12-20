import React from "react";
import { twMerge } from "tailwind-merge";

interface IHeading {
  children: React.ReactNode;
  className?: string;
}
const Heading = ({ children, className }: IHeading) => {
  return (
    <div className={twMerge(`text-xl font-semibold uppercase ${className}`)}>
      {children}
    </div>
  );
};

export default Heading;
