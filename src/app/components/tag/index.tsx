import React from "react";

type Props = {
  type: "error" | "success" | "waring";
  content: string;
};

function Tag({ content, type }: Props) {
  return (
    <>
      <div className="px-2 py-1 text-xs">Tag</div>
      <div className="px-2 py-1 text-xs">Tag</div>
      <div className="px-2 py-1 text-xs">Tag</div>
    </>
  );
}

export default Tag;
