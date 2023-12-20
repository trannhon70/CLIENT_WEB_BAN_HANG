import React from "react";

type Props = {
  title?: string;
  currentIndex: string;
  setCurrentIndex: (e: any) => void;
  value?: string;
};

const Option = ({ title, value, currentIndex, setCurrentIndex }: Props) => {
  return (
    <button
      className={`${
        currentIndex === value ? "text-mainFF bg-orangeFF" : ""
      } flex text-sm py-2 px-3.5 justify-center items-center border rounded-lg  shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05)]`}
      onClick={() => setCurrentIndex(value)}
    >
      {title}
    </button>
  );
};

export default Option;
