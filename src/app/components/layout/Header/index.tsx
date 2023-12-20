"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cate from "./Cate";
import LoadingPage from "../../loading-page";

function HeaderAndCate() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {loading && <LoadingPage />}
      <div className="bg-main2E sticky lg:relative top-0 z-50">
        <Header />
        <Cate />
      </div>
    </>
  );
}

export default HeaderAndCate;
