"use client";
import React, { ReactNode, useEffect, useState } from "react";

import MainHeader from "@/src/layouts/MainLayout/MainHeared";
import MainFooter from "@/src/layouts/MainLayout/MainFooter";

interface LayoutPropsType {
  children: ReactNode;
}

function Layout(props: LayoutPropsType) {
  const { children } = props;
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setIsScroll(window.scrollY > 200);
  };

  return (
    <>
      <MainHeader isScroll={isScroll} />
      {children}
      <MainFooter />
    </>
  );
}

export default Layout;
