import Title from "@/src/components/Title/Title";
import Subtitle from "@/src/components/Subtitle/Subtitle";
function Test() {
  return (
    <div>
      <h1>test</h1>

      <h2>Title-</h2>
      <Title typeTitle="titleMiddle">Awesome Feature</Title>

      <h2>Subtitle-</h2>
      <Subtitle fontStyle="italic" color="tertiaryColor">
        Replenish man have thing gathering lights yielding shall you
      </Subtitle>

      <h2>TitleMiddle-</h2>
      <Title typeTitle="titleMiddle">Welcome to our Institute</Title>

      <h2>TitleLitle-</h2>
      <Title typeTitle="titleLitle">Sell Online Course</Title>

      <p style={{ textAlign: "center" }}>lorem</p>
    </div>
  );
}
export default Test;
