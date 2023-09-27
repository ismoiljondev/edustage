import style from "@/src/components/Subtitle/style.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";
type SubtitlePropsType = {
  children: ReactNode;
  textAlign?: "start" | "center" | "end";
  color?: "colorWhite" | "tertiaryColor";
  fontStyle?: "italic" | "normal";
};
function Subtitle(props: SubtitlePropsType) {
  const { children, textAlign, color, fontStyle } = props;

  return (
    <h2
      className={clsx(
        style.text,
        textAlign ? style[textAlign] : style["text"],
        color ? style[color] : style["text"],
        fontStyle ? style[fontStyle] : style["text"]
      )}
    >
      {children}
    </h2>
  );
}

export default Subtitle;
