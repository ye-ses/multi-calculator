import styled from "styled-components";
import { useState } from "react";
import { FormInput, Label } from "../inputs";
import DSTClass from "./DSTClass";

function DSTForm() {
  const [distance, setDistance] = useState("0");
  const units = ["mm", "cm", "inch", "feet", "yard", "m", "km", "miles"];
  const [unit, setUnit] = useState("mm");
  const [convertedUnits, setConvertedUnits] = useState([
    "0",
    "0",
    "0",
    0,
    0,
    0,
    0,
    0,
  ]);
  let converter = new DSTClass(distance, unit);
  return (
    <Container>
      <h1>Distance unit converter</h1>
      <FormBox>
        <Label>Enter the distance to convert and select unit </Label>
        <FormInput
          width={"5em"}
          height={"1em"}
          type="number"
          defaultValue={"0"}
          min={"0"}
          onChange={(e) => {
            setDistance(e.target.value);
            converter.distance = e.target.value;
            converter.unit = unit;
            converter.convert();
            setConvertedUnits([
              converter.mm,
              converter.cm,
              converter.inch,
              converter.feet,
              converter.yards,
              converter.m,
              converter.km,
              converter.miles,
            ]);
          }}
        ></FormInput>
        <select
          onChange={(e) => {
            setUnit(e.target.value);
            converter.distance = distance;
            converter.unit = e.target.value;
            converter.convert();
            setConvertedUnits([
              converter.mm,
              converter.cm,
              converter.inch,
              converter.feet,
              converter.yards,
              converter.m,
              converter.km,
              converter.miles,
            ]);
          }}
          defaultValue={"mm"}
        >
          {units.map((unit) => (
            <option value={unit} key={unit}>
              {unit}
            </option>
          ))}
        </select>
      </FormBox>
      <Answers>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[0]}
          <sub>mm</sub>
          <br />
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[1]}
          <sub>cm</sub>
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[2]}
          <sub>inch</sub>
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[3]}
          <sub>feet.</sub>
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[4]}
          <sub>yards.</sub>
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[5]}
          <sub>m.</sub>
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[6]}
          <sub>km.</sub>
        </p>
        <p>
          {distance}
          <sub>{unit}</sub> is equivalent to {convertedUnits[7]}
          <sub>miles.</sub>
        </p>
      </Answers>
    </Container>
  );
}

export default DSTForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: inherit;
  border: 2px solid var(--primary-light);
  padding: 1.5em;
  border-radius: 0.8em;
  background: linear-gradient(40deg, var(--secondary-color), 40%, white);
`;
const FormBox = styled.div`
  border-radius: 0.3em;
  display: flex;
  align-self: flex-start;
  gap: 0.5em;
  padding: 0.5em 2em 0.3em 0.5em;
  background-color: wheat;
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
    max-width: 6em;
    max-height: 1.5em;
    padding: 0 0.3em 0 0.3em;
    option {
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
const Answers = styled(FormBox)`
  flex-direction: column;
  align-self: flex-start;
  min-width: 20em;
  padding-left: 3em;
  line-height: 0;
  background-color: rgba(73, 122, 185, 0.4);
`;
