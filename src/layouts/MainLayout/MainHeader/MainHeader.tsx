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
    setOptionHeader(pathname === "/");
  }, [pathname]);

  return (
    <nav
      className={clsx(
        {
          [style.header__home]: optionHeader,
          [style.header__universal]: !optionHeader,
        },
        {
          [style.search__input__open]: openSearch,
          [style.search__input__close]: !openSearch,
        },
        {
          [optionHeader ? style.scroll__home : style.scroll__universal]:
            isScroll,
          [style.scroll__off]: !isScroll,
        }
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
