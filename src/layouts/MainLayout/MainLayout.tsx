"use client";
import style from "@/src/layouts/MainLayout/style.module.scss";
import React, { ReactNode } from "react";
import MainHeader from "@/src/layouts/MainLayout/MainHeared";
import MainFooter from "@/src/layouts/MainLayout/MainFooter";

interface LayoutPropsType {
  children: ReactNode;
}

function Layout(props: LayoutPropsType) {
  const { children } = props;

  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}

export default Layout;
