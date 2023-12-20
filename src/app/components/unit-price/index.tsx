import React from "react";

type Props = {
  checked?: boolean;
  onChoose?: (e: any) => void;
  title: string;
};

function UnitPrice({ checked = false, onChoose = () => null, title }: Props) {
  return (
    <div
      onClick={onChoose}
      className={`relative cursor-pointer px-4 py-2 text-sm border ${
        checked ? "border-[#FF6600]" : "border-[#D2D5D8]"
      } w-fit`}
    >
      {title}
      {checked && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "0 15px 15px 0",
            borderColor: "transparent #FF6600 transparent transparent",
          }}
        ></div>
      )}
    </div>
  );
}

export default UnitPrice;
