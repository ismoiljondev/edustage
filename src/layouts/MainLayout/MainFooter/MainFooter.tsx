import clsx from "clsx";

import Container from "@/src/components/Container/Container";

import style from "@/src/layouts/MainLayout/MainFooter/style.module.scss";

function MainFooret() {
  return (
    <footer className={clsx(style.footer)}>
      <Container>
        <h2>footer</h2>
      </Container>
    </footer>
  );
}
export default MainFooret;
