import styled from "styled-components";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";

function Content(props) {
  return (
    <Container>
      <Left />
      <Right calculator={props.calculator} />
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
`;
export default Content;
