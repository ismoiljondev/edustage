import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import style from "@/components/Button/style.module.scss";
interface buttonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "blue" | "yellow";
}

const Button: React.FC<buttonProps> = (props: buttonProps) => {
  const { children, color, ...rest } = props;

  return (
    <button className={style[`${color || "blue"}button`]} {...rest}>
      {children}
    </button>
  );
};

export default Button;
