import React from "react";
type Props = {
  size?: number;
};

const Loading = ({ size = 80 }: Props) => {
  return (
    <div
      className="spinner"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default Loading;
