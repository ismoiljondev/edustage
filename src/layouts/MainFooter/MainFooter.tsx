import Container from "@/src/components/Container/Container";
import style from "@/src/layouts/MainFooter/style.module.scss";
import clsx from "clsx";
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
