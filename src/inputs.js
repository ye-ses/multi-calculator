import styled from "styled-components";

export const CalculatorScreen = styled.input`
  width: 95%;
  border: none;
  border-radius: 0.1875em;
  height: 5em;
  text-align: right;
  color: rgba(0, 0, 0, 0.671);
  box-shadow: 1px 1px 3px rgba(46, 46, 46, 0.2);
  font-size: 1.2rem;
  margin: 0;
  &:active {
    border: none;
  }
  &:focus {
    outline: none;
  }
`;

export const FormInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0.2em;
  font-size: 0.8em;
  background-color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgba(24, 24, 24, 0.4);
  border: 2px solid var(--secondary-color);
  border-radius: 0.5em;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  text-align: start;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: rgba(24, 24, 24, 0.4);
`;
