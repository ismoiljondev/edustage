import clsx from "clsx";

import IconX from "@/public/icons/iconX.svg";
import IconBars from "@/public/icons/iconBars.svg";

import style from "@/src/layouts/MainLayout/MainHeader/component/ButtonManu/style.module.scss";

type ButtonMenuPropsType = {
  click?: () => void;
  canditionMenu: boolean;
};

function ButtonMenu(props: ButtonMenuPropsType) {
  const { click, canditionMenu } = props;
  return (
    <button className={clsx(style.button__menu)} onClick={click}>
      {canditionMenu ? (
        <IconX className={clsx(style.search__icon)} />
      ) : (
        <IconBars className={clsx(style.search__icon)} />
      )}
    </button>
  );
}

export default ButtonMenu;
