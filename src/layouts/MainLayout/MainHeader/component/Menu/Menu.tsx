"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import IconSearch from "@/public/icons/iconSearch.svg";
import Typography from "@/src/components/Typography/Typography";
import { menuLinks } from "@/src/layouts/config";

import style from "@/src/layouts/MainLayout/MainHeader/component/Menu/style.module.scss";

type SearchInputPropsType = {
  canditionMenu: boolean;
  buttonClick?: () => void;
  canditionMenuSet: () => void;
};

function Menu(props: SearchInputPropsType) {
  const pathname = usePathname();

  const { buttonClick, canditionMenu, canditionMenuSet } = props;

  function isActive(path: string): boolean {
    return pathname === path;
  }

  return (
    <ul
      className={clsx({
        [style.open__menu]: canditionMenu,
        [style.close__menu]: !canditionMenu,
      })}
    >
      {menuLinks.map((e, i) => (
        <li key={i}>
          <Typography
            as="h6"
            additionalStyle={clsx({
              [style.active]: isActive(e.href),
              [style.not__active]: !isActive(e.href),
            })}
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
              { [style.icon__search]: isActive("/") },
              { [style.header__universal__icon__search]: !isActive("/") }
            )}
          />
        </button>
      </li>
    </ul>
  );
}

export default Menu;
