import { ReactNode } from "react";

import clsx from "clsx";

import style from "@/src/components/Typography/style.module.scss";

type TypographyPropsType = {
  children: ReactNode;
  additionalStyle?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

function Typography(props: TypographyPropsType) {
  const { children, additionalStyle: additional, as: Tag = "p" } = props;

  return <Tag className={clsx(style[Tag], additional)}>{children}</Tag>;
}

export default Typography;
