import styled from "styled-components";
import CalculatorWidget from "../calculator/CalculatorWidget";
import Form from "../currencyConveter/CCForm";
import { useState } from "react";
import DSTForm from "../dst/DSTForm";
import CCForm from "../currencyConveter/CCForm";

function Right(props) {
  const calculator = props.calculator;
  switch (calculator) {
    case "calculator":
      return (
        <Container>
          <CalculatorWidget />
        </Container>
      );
    case "currencyConvertor":
      return (
        <Container>
          <CCForm />
        </Container>
      );
    case "DST":
      return (
        <Container>
          <DSTForm />
        </Container>
      );
    default:
      return (
        <Container>
          <CalculatorWidget />
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
