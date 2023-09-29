import Typography from "@/src/components/Typography/Typography";
import style from "@/src/pages/style.module.scss";
import Container from "../components/Container/Container";

function Test() {
  return (
    <div>
      <h1>test</h1>
      <Container>
        <Typography as="h3">15</Typography>
        <Typography as="h1">ONE STEP AHEAD THIS SEASON</Typography>
      </Container>
      <p style={{ textAlign: "center" }}>lorem</p>
    </div>
  );
}
export default Test;
