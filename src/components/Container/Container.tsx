import style from "@/src/components/Container/style.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  additionalStyle?: string;
};

function Container(props: ContainerProps) {
  const { children, additionalStyle: additional } = props;

  return <div className={clsx(style.container, additional)}>{children}</div>;
}

export default Container;
