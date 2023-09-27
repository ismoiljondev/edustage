"use cleient";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import style from "@/layouts/MainHeared/styl.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function MainHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [optionLogo, setOptionLogo] = useState<"optionHome" | "optionOrdinary">(
    "optionHome"
  );

  useEffect(() => {
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
