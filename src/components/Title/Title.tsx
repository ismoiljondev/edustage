import style from "@/src/components/Title/style.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

type TitleTagPropsType = {
  children: ReactNode;
  typeTitle?: "big" | "middle" | "litle";
  additionalStyle?: string;
};

function Title(props: TitleTagPropsType) {
  const { children, typeTitle, additionalStyle: additional } = props;

  return (
    <h2 className={clsx(typeTitle ? style[typeTitle] : "big", additional)}>
      {children}
    </h2>
  );
}

export default Title;
