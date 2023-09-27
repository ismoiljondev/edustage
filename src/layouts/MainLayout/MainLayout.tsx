"use client";
import style from "@/src/layouts/MainLayout/style.module.scss";
import React, { ReactNode } from "react";
import MainHeader from "../MainHeared";
import MainFooter from "../MainFooter";

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
