import Container from "@/components/Container";
import style from "@/layouts/MainFooter/style.module.scss";
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
