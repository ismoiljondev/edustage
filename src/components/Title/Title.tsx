import style from "@/src/components/Title/style.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

type TitleTagPropsType = {
  children: ReactNode;
  textAlign?: "start" | "center" | "end";
  color?: "colorWhite" | "mainColor";
};

function Title(props: TitleTagPropsType) {
  const { children, textAlign, color } = props;

  return (
    <h2
      className={clsx(
        style.title,
        textAlign ? style[textAlign] : style["title"],
        color ? style[color] : style["title"]
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
