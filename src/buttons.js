import styled from "styled-components";

export const NumberButton = styled.button`
  border-radius: 0.5em;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: 1px -2px 2px var(--primary-color),
      1px -1px 1px rgba(46, 46, 46, 0.2);
    background-color: rgba(255, 254, 254, 0.589);
  }
`;
export const OperatorButton = styled(NumberButton)`
  background-color: wheat;
  color: white;
`;
export const ActionButton = styled.button`
  width: max-content;
  outline: none;
  padding: 0.5em;
  background: linear-gradient(120deg, var(--secondary-color), 60%, white);
  border: 1px solid var(--secondary-color);
  border-radius: 0.8em;
  color: white;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
