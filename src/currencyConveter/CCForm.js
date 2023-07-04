import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Label, FormInput } from "../inputs";

function CCForm() {
  useEffect(() => {
    fetchSymbols();
  }, []);
  const [symbols, setSymbols] = useState(false);
  const [fromCurrency, setFromCurrency] = useState(false);
  const [toCurrency, setToCurrency] = useState(false);
  const [rate, setRate] = useState(false);
  const [amount, setAmount] = useState("0");
  const [date, setDate] = useState(false);
  const fetchSymbols = async () => {
    let arr = [];
    await axios.get(`https://api.exchangerate.host/symbols`).then((res) => {
      for (const iterator of Object.entries(res.data.symbols)) {
        arr.push([iterator[1].code, iterator[1].description]);
      }
      setSymbols(Array.from(arr));
    });
  };
  const convert = async (fromCurrency, toCurrency) => {
    fromCurrency = fromCurrency.toString().split(",")[0];
    toCurrency = toCurrency.toString().split(",")[0];
    await axios
      .get(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
      )
      .then((res) => {
        setRate(res.data.info.rate);
        setDate(res.data.date);
      });
  };
  const message = {
    conversionRate: `The rate of conversion from ${fromCurrency[0]} to ${toCurrency[0]} is ${rate},
    i.e. you multiply the amount in ${fromCurrency[1]} by ${rate} to convert`,
    conversionAmount: `${amount} ${fromCurrency[1]} amounts to ${parseFloat(
      (amount * rate).toFixed(5)
    )} ${toCurrency[1]} as of ${date}`,
    disclaimer: `Rates can change at any second`,
  };
  return (
    <Container>
      <h1>Currency Converter</h1>
      <FormBox>
        <Label>Select currency to convert from</Label>
        <select
          defaultValue={"USD"}
          onChange={(e) => {
            setFromCurrency(e.target.value.toString().split(","));
            convert(e.target.value, toCurrency);
          }}
        >
          {Array.from(symbols).map((symbol) => (
            <option value={symbol} key={symbol[0]}>
              {symbol[0]}
            </option>
          ))}
        </select>
        <Label>Select currency to convert to</Label>
        <select
          defaultValue={"ZAR"}
          onChange={(e) => {
            setToCurrency(e.target.value.toString().split(","));
            convert(fromCurrency, e.target.value);
          }}
        >
          {Array.from(symbols).map((symbol) => (
            <option value={symbol} key={symbol[0]}>
              {symbol[0]}
            </option>
          ))}
        </select>
        <Label htmlFor="cur1">Enter the amount to Convert</Label>
        <FormInput
          width={"5em"}
          height={"1.2em"}
          type="number"
          id="cur1"
          defaultValue={0}
          onChange={(e) => {
            setAmount(e.target.value);
            convert(fromCurrency, toCurrency);
          }}
        />
        {fromCurrency && toCurrency && rate && date && (
          <div className="message">
            <h2>Results,</h2>
            <br />
            <p>{message.conversionRate}</p>
            <br />
            <p>{message.conversionAmount}</p>
            <br />
            <p>{message.disclaimer}</p>
            <br />
          </div>
        )}
      </FormBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: none;
  gap: 1em;
  width: 90%;
  border: 2px solid var(--primary-light);
  padding: 1.5em;
  border-radius: 0.8em;
  background: linear-gradient(40deg, var(--secondary-color), 40%, white);
`;
const FormBox = styled.div`
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 98%;
  overflow: none;
  padding: 0.5em 2em 0.3em 0.5em;
  background: linear-gradient(20deg, plum, 60%, white, pink);
  h1 {
    margin-bottom: 0.5em;
    color: var(--secondary-color);
    letter-spacing: 0.15em;
  }
  h2 {
    margin-bottom: 0.5em;
    color: var(--primary-light);
    letter-spacing: 0.15em;
  }
  p {
    color: var(--secondary-color);
  }
  select {
    margin-left: 0.3em;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    padding: 0 0.3em 0 0.3em;
    width: 6em;
    color: rgba(24, 24, 24, 0.6);
    option {
      width: 3em;
      text-align: center;
    }
    &:focus {
      outline: none;
      color: rgba(24, 24, 24, 0.6);
    }
  }
  input {
    margin-left: 0.3em;
    border-radius: 0 0.3em 0.3em 0;
    color: rgba(24, 24, 24, 0.6);
  }
  > * {
    flex-shrink: 1;
  }
  @media (max-width: 920px) {
    p {
      font-size: 96%;
    }
    input {
      font-size: 90%;
    }
  }

  @media (max-width: 330px) {
    P {
      font-size: 80%;
    }
    select {
      width: 4em;
    }
  }
`;

export default CCForm;
