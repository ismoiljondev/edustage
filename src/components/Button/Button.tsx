import { ReactNode } from "react";
import style from "./style.module.scss";
interface buttonProps {
  text: ReactNode;
  color: "blue" | "yellow";
  action?: () => void;
}

const Button: React.FC<buttonProps> = (props: buttonProps) => {
  const { text, color, action } = props;

  return (
    <button className={style[`${color}button`]} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
