import style from "@/src/components/Subtitle/style.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";
type SubtitlePropsType = {
  children: ReactNode;
  additionalStyle?: string;
};
function Subtitle(props: SubtitlePropsType) {
  const { children, additionalStyle: additional } = props;

  return <h2 className={clsx(style.text, additional)}>{children}</h2>;
}

export default Subtitle;
