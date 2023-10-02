"use cleient";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import IconSearch from "@/public/icons/iconSearch.svg";
import Typography from "@/src/components/Typography/Typography";
import { menuLinks } from "@/src/layouts/config";

import style from "@/src/layouts/MainLayout/MainHeader/component/Manu/style.module.scss";

type SearchInputPropsType = {
  canditionMenu: boolean;
  buttonClick?: () => void;
  canditionMenuSet: () => void;
};

function Menu(props: SearchInputPropsType) {
  const pathname = usePathname();

  const { buttonClick, canditionMenu, canditionMenuSet } = props;

  function isActive(path: string): boolean {
    return pathname === path ? true : false;
  }

  return (
    <ul className={clsx(canditionMenu ? style.open__menu : style.close__menu)}>
      {menuLinks.map((e, i) => (
        <li key={e.key}>
          <Typography
            as="h6"
            additionalStyle={clsx(
              isActive(e.href) ? style.active : style.not__active
            )}
          >
            <Link href={e.href} onClick={canditionMenuSet}>
              {e.localeKey}
            </Link>
          </Typography>
        </li>
      ))}

      <li>
        <button className={clsx(style.button__search)} onClick={buttonClick}>
          <IconSearch
            className={clsx(
              isActive("/")
                ? style.icon__search
                : style.header__universal__icon__search
            )}
          />
        </button>
      </li>
    </ul>
  );
}

export default Menu;
