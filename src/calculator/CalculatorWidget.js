import styled from "styled-components";
import ButtonsGrid from "./ButtonsGrid";
import Screen from "./Screen";
import { FaHistory } from "react-icons/fa";
import { useState, useEffect } from "react";
import Calculator from "./Calculator.class";
import History from "./History";

function CalculatorWidget() {
  let textBox = "",
    hBox = "",
    expression = "";
  let calculator = new Calculator(expression, textBox);
  let history = ["ergver", "gsdegv"];
  useEffect(() => {
    textBox = document.getElementById("screen");
    calculator = new Calculator(expression, textBox);
  }, []);
  const getButton = (button) => {
    calculator.switcher(button);
    if (button.id === "equal") {
      history = calculator.history;
    }
  };

  return (
    <Container>
      <Device>
        <Screen />
        {/* <History calculator={history} /> */}
        <ButtonsGrid getButton={getButton} />
      </Device>
      <Words>
        <p>
          To see your history,
          <br /> you just toggle the history icon on the text-box
          <br />
          <FaHistory />
        </p>
      </Words>
    </Container>
  );
}
const Words = styled.div`
  width: 30ch;
`;
const Device = styled.div`
  position: relative;
  padding: 1em;
  max-width: fit-content;
  background-color: var(--primary-light);
  border-radius: 15px 0px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-shadow: 1px 1px 30px rgba(46, 46, 46, 0.2),
    1px 1px 20px var(--primary-dark);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.2em;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
export default CalculatorWidget;
