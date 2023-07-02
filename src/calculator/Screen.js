import styled from "styled-components";
import { CalculatorScreen } from "../inputs";

function Screen() {
  return (
    <Display>
      <CalculatorScreen type="text" name="calcDisplay" disabled id="screen" />
    </Display>
  );
}
const Display = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  @media (max-width: 550px) {
    width: 14.3em;
  }
`;

export default Screen;
