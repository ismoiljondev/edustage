import style from "@/src/components/Title/style.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

type TitleTagPropsType = {
  children: ReactNode;
  textAlign?: "start" | "center" | "end";
  color?: "colorWhite" | "mainColor";
  typeTitle?: "titleBig" | "titleMiddle" | "titleLitle";
};

function Title(props: TitleTagPropsType) {
  const { children, textAlign, color, typeTitle } = props;

  return (
    <h2
      className={clsx(
        typeTitle ? style[typeTitle] : "titleBig",
        textAlign ? style[textAlign] : style["title"],
        color ? style[color] : style["title"]
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
