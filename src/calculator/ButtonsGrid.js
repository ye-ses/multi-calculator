import styled from "styled-components";
import { NumberButton, OperatorButton } from "../buttons";

const buttons = {
  hFunctions: [
    { value: "AC", id: "clear", class: "screenFunctions" },
    { value: "DEL", id: "delete", class: "screenFunctions" },
    { value: "%", id: "percentage", class: "operator" },
    { value: "()", id: "brackets", class: "operator" },
    { value: "*", id: "multiplication", class: "operator" },
  ],
  vFunctions: [
    { value: "/", id: "divide", class: "operator" },
    { value: "-", id: "minus", class: "operator" },
    { value: "+", id: "plus", class: "operator" },
    { value: "=", id: "equal", class: "operator" },
  ],
  numbers: [
    { value: "7", id: "", class: "number" },
    { value: "8", id: "", class: "number" },
    { value: "9", id: "", class: "number" },
    { value: "4", id: "", class: "number" },
    { value: "5", id: "", class: "number" },
    { value: "6", id: "", class: "number" },
    { value: "1", id: "", class: "number" },
    { value: "2", id: "", class: "number" },
    { value: "3", id: "", class: "number" },
    { value: "+/-", id: "plusMinus", class: "operator" },
    { value: "0", id: "zero", class: "number" },
    { value: ".", id: "period", class: "number" },
  ],
};
function buttonsGrid(props) {
  return (
    <Container>
      <HorizontalComponents>
        {buttons.hFunctions.map((button) => (
          <OperatorButton
            key={button.value}
            onClick={() => props.getButton(button)}
          >
            {button.value}
          </OperatorButton>
        ))}
      </HorizontalComponents>
      <VerticalComponents>
        {buttons.vFunctions.map((button) => (
          <OperatorButton
            key={button.value}
            onClick={() => props.getButton(button)}
          >
            {button.value}
          </OperatorButton>
        ))}
      </VerticalComponents>
      <NumberGrid>
        {buttons.numbers.map((button) => (
          <NumberButton
            key={button.value}
            onClick={() => props.getButton(button)}
          >
            {button.value}
          </NumberButton>
        ))}
      </NumberGrid>
    </Container>
  );
}
const HorizontalComponents = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.3125em;
  margin-bottom: 0.4em;
  > :first-child {
    background-color: var(--primary-color);
    font-weight: 700;
    font-style: bold;
  }

  > :nth-child(2) {
    grid-row-start: 2;
    grid-row-end: 3;
  }

  > :nth-child(3) {
    grid-row-start: 2;
    grid-row-end: 3;
  }

  > :nth-child(4) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
  }

  > :nth-child(5) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 4;
  }
`;
const VerticalComponents = styled.div`
  display: grid;
  grid-template-rows: (5, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  margin-left: 0.19em;
  gap: 5px;
`;
const NumberGrid = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.3125em;
`;
const Container = styled.div`
  position: relative;
  display: grid;
  min-width: 12.8em;
  grid-template-columns: 3fr 1fr;
  background: linear-gradient(
    40deg,
    var(--secondary-color),
    10%,
    var(--primary-color)
  );
  button {
    width: 2.875rem;
    height: 2.5rem;
  }
  box-shadow: 1px -2px 2px var(--primary-color),
    1px -1px 1px rgba(46, 46, 46, 0.2), 2px 2px 10px rgba(46, 46, 46, 0.2);
  border-radius: 5px 0 10px 2px;
  padding: 1em;
  @media (max-width: 550px) {
    width: fit-content;
    button {
      width: 2.87em;
      height: 2.5em;
    }
  }
`;
export default buttonsGrid;
