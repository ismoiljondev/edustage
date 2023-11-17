"use  client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import Container from "@/src/components/Container/Container";
import Typography from "@/src/components/Typography/Typography";

import style from "@/src/components/Sowcase/style.module.scss";

type ShowcaseTypeProps = {
  title: string;
  pageName: string;
};

function Showcase(props: ShowcaseTypeProps) {
  const { title, pageName } = props;
  const pathname = usePathname();

  return (
    <div className={clsx(style.showcase)}>
      <div className={clsx(style.showcase__in)}>
        <Container>
          <Typography as="h2" additionalStyle={style.title}>
            {title}
          </Typography>
          <div className={clsx(style.breadcrumbs)}>
            <Link href={"/"}>
              <Typography as="p" additionalStyle={style.page__name}>
                Home
              </Typography>
            </Link>
            <Typography as="p" additionalStyle={style.page__name}>
              /
            </Typography>
            <Link href={pathname}>
              <Typography as="p" additionalStyle={style.page__name}>
                {pageName}
              </Typography>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Showcase;
