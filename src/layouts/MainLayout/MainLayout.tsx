"use client";
import style from "@/layouts/MainLayout/style.module.scss";
import React, { ReactNode } from "react";
import MainHeader from "../MainHeared";
import MainFooter from "../MainFooter";
import Container from "@/components/Container";

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
