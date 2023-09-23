import style from "./style.module.scss";
import variable from "../../variables/colors.module.scss";
interface buttonProps {
  text: string;
  blue: boolean;
}

const Button: React.FC<buttonProps> = (props: buttonProps) => {
  const { text, blue } = props;
  if (!blue) {
    return (
      <div className={style.bluebutton}>
        <button>{text}</button>
      </div>
    );
  } else if (blue) {
    return (
      <div className={style.yellowbutton}>
        <button>{text}</button>
      </div>
    );
  }
};

export default Button;
