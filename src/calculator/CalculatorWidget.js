import styled from "styled-components";
import ButtonsGrid from "./ButtonsGrid";
import Screen from "./Screen";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";

function CalculatorWidget() {
  let expression = "";
  const getButton = (button) => {
    expression += button.value;
    console.log(expression);
  };
  const getScreen = (screen) => {
    console.log(screen);
  };
  return (
    <Container>
      <Device>
        <Screen getScreen={getScreen} expression={expression} />
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
  padding: 1em;
  min-width: 16em;
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
`;
export default CalculatorWidget;
