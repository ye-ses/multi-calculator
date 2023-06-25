import styled from "styled-components";
import { useState } from "react";
import { Label, FormInput } from "../inputs";

function CCForm() {
  const [baseCurrency, setBaseCurrency] = useState("yes");
  return (
    <Container>
      <h1>Currency Converter</h1>
      <FormBox>
        <Label>Select currency to convert</Label>
        <select>
          <option value="yes">yes</option>
        </select>
        <Label>Enter the amount to Convert</Label>
        <FormInput width={"5em"} height={"1.2em"} type="number" />
        <Label>Select currency to convert to</Label>
        <select>
          <option value="yes">yes</option>
        </select>
        <Label>{`This is the equivalent amount in ${baseCurrency}`}</Label>
        <FormInput width={"5em"} height={"1.2em"} type="number" />
      </FormBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: max-content;
  border: 2px solid var(--primary-light);
  padding: 1.5em;
  border-radius: 0.8em;
  background: linear-gradient(40deg, var(--secondary-color), 40%, white);
`;
const FormBox = styled.div`
  border-radius: 0.3em;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  gap: 0.5em;
  padding: 0.5em 2em 0.3em 0.5em;
  background-color: whitesmoke;
  h1 {
    margin-bottom: 0.5em;
    color: var(--secondary-color);
    letter-spacing: 0.15em;
  }
  select {
    margin-left: 0.3em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    font-weight: 500;
    color: rgba(24, 24, 24, 0.7);
    padding: 0 0.3em 0 0.3em;
    option {
      width: 3em;
      text-align: center;
      font-weight: 500;
      color: rgba(24, 24, 24, 0.7);
    }
    &:focus {
      outline: none;
    }
  }
  input {
    margin-left: 0.3em;
    border-radius: 0 0.3em 0.3em 0;
    color: rgba(24, 24, 24, 0.7);
  }
`;
export default CCForm;
