import useClickOutSide from "@/hooks/useClickOutSide";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Props = {
  title: string;
  children: React.ReactNode;
  classNameWrapper?: string;
  classNameButton?: string;
  classNameDropdown?: string;
  open?: boolean;
  onOpen?: any;
  onClose?: any;
};
function Dropdown({
  children,
  title,
  classNameButton = "",
  classNameDropdown = "",
  classNameWrapper = "",
  open = false,
  onOpen,
  onClose,
}: Props) {
  const ref = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setOpenDropdown(open);
  }, [open]);

  useClickOutSide(ref, () => (onClose ? onClose() : setOpenDropdown(false)));

  return (
    <div className={`relative ${classNameWrapper}`} ref={ref}>
      <div
        onClick={() => (onOpen ? onOpen() : setOpenDropdown(true))}
        className={`text-secondary cursor-pointer flex items-center justify-between text-[13px] hover:border-orangeFF border ${
          openDropdown ? "border-orangeFF" : ""
        } ${classNameButton}`}
      >
        <div className="leading-1">{title}</div>
        <FiChevronDown
          size={20}
          className="text-secondary"
          style={{
            transition: "all 0.3s",
            transform: openDropdown ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
      </div>

      <div
        className={`absolute ${
          openDropdown ? "" : "hidden"
        } bg-white shadow mt-1 w-[250px] ${classNameDropdown}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
