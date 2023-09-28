import { Children, ReactNode } from "react";
import style from "./style.module.scss";

interface GridProps {
  children: ReactNode;
  type : "three" | "four"
}

const Grid: React.FC<GridProps> = (props: GridProps) => {
  const { children, type } = props;
  return <div className={`${style[`${type}card`]} ${style.card}`}>{children}</div>;
};

export default Grid;
