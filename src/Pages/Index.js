import styled from "styled-components";
import { useState } from "react";
import NavBar from "../NavBar";
import Content from "./Content";

function Index() {
  const [selectedCalculator, setSelectedCalclulator] = useState();
  return (
    <div>
      <NavBar
        calculator={(selectedCalculator) =>
          setSelectedCalclulator(selectedCalculator)
        }
      />
      <Content calculator={selectedCalculator} />
    </div>
  );
}

export default Index;
