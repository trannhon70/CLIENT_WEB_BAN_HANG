import React from "react";

type Props = {
  color?: string;
};

function AddressIcon({ color = "#000000" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
    >
      <path
        d="M12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6C11.1046 6 12 6.89543 12 8Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M17 7.85714C17 10.1415 15.302 12.9966 13.4424 14.9028C12.2191 16.1567 10.9259 17 10 17C9.07413 17 7.78087 16.1567 6.55756 14.9028C4.69796 12.9966 3 10.1415 3 7.85714C3 4.07005 6.13401 1 10 1C13.866 1 17 4.07005 17 7.85714Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M13.1542 15.1875C16.569 15.6135 19 16.7112 19 17.9981C19 19.6549 14.9706 20.9981 10 20.9981C5.02944 20.9981 1 19.6549 1 17.9981C1 16.7112 3.43101 15.6135 6.84581 15.1875"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default AddressIcon;
