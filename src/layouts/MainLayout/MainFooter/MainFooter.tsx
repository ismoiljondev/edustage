"use client";

import clsx from "clsx";

import Container from "@/src/components/Container/Container";

import style from "@/src/layouts/MainLayout/MainFooter/style.module.scss";

import { footerData } from "@/src/layouts/MainLayout/MainFooter/config";

import Typography from "@/src/components/Typography/Typography";
import Link from "next/link";

function MainFooter() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <footer className={clsx(style.footer)}>
      <Container>
        <div className={clsx(style.footer__in)}>
          <div className={clsx(style.footer__links)}>
            {footerData.Footer_links_page.map((e, i) => {
              return (
                <div className={clsx(style.footer__links__in)} key={i}>
                  <Typography
                    as="h4"
                    additionalStyle={style.footer__links__in__title}
                  >
                    {e.categories}
                  </Typography>
                  <ul className={clsx(style.footer__links__in__ul)}>
                    {e.data.map((li, j) => {
                      return (
                        <li key={j}>
                          <Link href={li.url}>
                            <Typography
                              as="p"
                              additionalStyle={
                                style.footer__links__in__ul__text
                              }
                            >
                              {li.name}
                            </Typography>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          {/* ---------------------------------- */}
          <div className={clsx(style.footer__newsletter)}>
            <Typography
              as="h4"
              additionalStyle={style.footer__links__in__title}
            >
              Newsletter
            </Typography>
            <div className={clsx(style.footer__newsletter__in)}>
              <Typography
                as="p"
                additionalStyle={style.footer__links__in__ul__text}
              >
                You can trust us. we only send promo offers,
              </Typography>
              <div className={style.inputEmail}>
                <div className={style.bac_div}></div>
                <form action="#" onSubmit={(e) => onSubmit(e)}>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Your Email Address"
                  />
                  <button type="submit">subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className={clsx(style.footer__creation)}></div>
          <div className={clsx(style.footer__social)}></div>
        </div>
      </Container>
    </footer>
  );
}
export default MainFooter;
