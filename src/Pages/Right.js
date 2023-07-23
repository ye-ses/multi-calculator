import styled from "styled-components";
import CalculatorWidget from "../calculator/CalculatorWidget";
import DistanceForm from "../dst/DistanceForm";
import CCForm from "../currencyConveter/CCForm";
import About from "./About";
import DSTForm from "../dst/DSTForm";

function Right(props) {
  const calculator = props.calculator;
  switch (calculator) {
    case "calculator":
      return (
        <Container id="right">
          <CalculatorWidget />
        </Container>
      );
    case "currencyConvertor":
      return (
        <Container id="right">
          <CCForm />
        </Container>
      );
    case "Distance":
      return (
        <Container id="right">
          <DistanceForm />
        </Container>
      );
    case "DST":
      return (
        <Container id="right">
          <DSTForm />
        </Container>
      );
    case "about":
      return (
        <Container id="right">
          <About />
        </Container>
      );
    default:
      return (
        <Container id="right">
          <p>
            {" "}
            You are the sum total of everything you've ever seen, heard, eaten,
            smelled, been told, forgot - it's all there
          </p>
        </Container>
      );
  }
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 0.1em 0.2em 1em 0;
  background-color: rgba(240, 240, 240, 0.9);
  padding: 1.2em;
`;
export default Right;
