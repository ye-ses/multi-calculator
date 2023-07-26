import styled from "styled-components";
import { useState } from "react";
import NavBar from "../NavBar";
import Content from "./Content";

function Index() {
  const [selectedCalculator, setSelectedCalclulator] = useState();
  return (
    <Page>
      <NavBar
        calculator={(selectedCalculator) =>
          setSelectedCalclulator(selectedCalculator)
        }
      />
      <Content calculator={selectedCalculator} />
    </Page>
  );
}
const Page = styled.div``;
export default Index;
