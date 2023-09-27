import style from "@/components/container/style.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
};

function Container(props: ContainerProps) {
  const { children } = props;

  return <div className={clsx(style.container)}>{children}</div>;
}

export default Container;
