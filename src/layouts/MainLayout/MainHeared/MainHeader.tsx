"use cleient";
import Container from "@/src/components/Container/Container";
import Logo from "@/src/components/Logo";
import style from "@/src/layouts/MainLayout/MainHeared/styl.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

function MainHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [optionLogo, setOptionLogo] = useState<"optionHome" | "optionOrdinary">(
    "optionHome"
  );

  useLayoutEffect(() => {
    pathname === "/"
      ? setOptionLogo("optionHome")
      : setOptionLogo("optionOrdinary");
  }, [router]);

  return (
    <nav className={style.nav}>
      <Container>
        <Logo logoOption={optionLogo} />
      </Container>
    </nav>
  );
}

export default MainHeader;
