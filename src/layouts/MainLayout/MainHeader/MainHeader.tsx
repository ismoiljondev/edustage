"use client";
import { usePathname } from "next/navigation";

import { useLayoutEffect, useState } from "react";

import clsx from "clsx";

import Logo from "@/src/components/Logo";
import Menu from "@/src/layouts/MainLayout/MainHeader/component/Menu/Menu";
import Container from "@/src/components/Container/Container";
import ButtonMenu from "@/src/layouts/MainLayout/MainHeader/component/ButtonMenu/ButtonMenu";
import SearchInput from "@/src/layouts/MainLayout/MainHeader/component/SearchInput/SearchInput";

import style from "@/src/layouts/MainLayout/MainHeader/style.module.scss";

type MainHeaderPropsType = {
  isScroll: boolean;
};

function MainHeader(props: MainHeaderPropsType) {
  const { isScroll } = props;

  const pathname = usePathname();
  const [optionHeader, setOptionHeader] = useState<boolean>(true);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useLayoutEffect(() => {
    pathname === "/" ? setOptionHeader(true) : setOptionHeader(false);
  }, [pathname]);

  return (
    <nav
      className={clsx(
        optionHeader ? style.header__home : style.header__universal,
        openSearch ? style.search__input__open : style.search__input__close,
        isScroll
          ? optionHeader
            ? style.scroll__home
            : style.scroll__universal
          : style.scroll__off
      )}
    >
      <SearchInput click={() => setOpenSearch(!openSearch)} />

      <Container>
        <div className={clsx(style.header__in)}>
          <Logo logoOption={optionHeader ? "optionHome" : "optionOrdinary"} />

          <ButtonMenu
            canditionMenu={openMenu}
            click={() => setOpenMenu(!openMenu)}
          />

          <Menu
            canditionMenu={openMenu}
            buttonClick={() => setOpenSearch(!openSearch)}
            canditionMenuSet={() => setOpenMenu(!openMenu)}
          />
        </div>
      </Container>
    </nav>
  );
}

export default MainHeader;
