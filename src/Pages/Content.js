import styled from "styled-components";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";

function Content(props) {
  return (
    <Container>
      <Left />
      <Right calculator={props.calculator} />
      <h1 className="thanks">
        Awesome, <em>thanks for the visit</em>
        {"     "}!!!
      </h1>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2em;
  padding: 2em 1.5em;
  border-radius: 0.3125rem;
  > * {
    flex-basis: 100%;
    flex-grow: 0;
    min-width: 0;
    min-height: 0;
  }
  .thanks {
    display: none;
  }
  @media (max-width: 1050px) {
    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding:2em 1em;
    .thanks {
      display: block;
    }
    > * {
      font-size: 97%;
    }
  }
`;
export default Content;
