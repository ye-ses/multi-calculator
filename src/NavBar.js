import styled from "styled-components";
import { useState } from "react";
import { ActionButton, Anchor, TextTag } from "./Tags";
import { FaCaretDown, FaCalculator } from "react-icons/fa";

function NavBar(props) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <NavContainer>
      <LogoBox>
        <div>
          <i>Multi</i>
          -calulator
          <span>
            <FaCalculator />
          </span>
        </div>
      </LogoBox>
      <NavMenu>
        <Anchor>About</Anchor>
        <Anchor onMouseEnter={() => setDropDown(!dropDown)}>
          Calculators
          <FaCaretDown />
          {dropDown && (
            <CalculatorsDrop onMouseLeave={() => setDropDown(!dropDown)}>
              <TextTag onClick={() => props.calculator("calculator")}>
                calculator
              </TextTag>
              <TextTag onClick={() => props.calculator("currencyConvertor")}>
                currency-converter
              </TextTag>
              <TextTag onClick={() => props.calculator("DST")}>
                distance,speed,time
              </TextTag>
            </CalculatorsDrop>
          )}
        </Anchor>
        <Anchor>Contact</Anchor>
      </NavMenu>
    </NavContainer>
  );
}
const CalculatorsDrop = styled.div`
  position: absolute;
  background: linear-gradient(40deg, var(--secondary-color), 40%, white);
  border-radius: 0 0 0.3em 0.3em;
  padding: 0.5em;
  margin-left: -1.1em;
  font-size: 0.8em;
  &:hover {
    font-weight: 0;
  }
`;
const LogoBox = styled.div`
  background-color: rgba(46, 46, 46, 0.2);
  border-radius: 0 0.5em 0.9em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 3em 0 3em;
  color: aliceblue;
  font-weight: 900;
  i {
    margin-top: -0.01em;
    padding: 0;
    font-size: 1.3em;
  }
  span {
    margin-left: 1em;
    font-size: 1.1em;
  }
`;
const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3em;
  max-width: max-content;
`;
const NavContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 4rem;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  background-color: var(--secondary-color);
  border-radius: 0 0.3em 0em 0.1em;
  background: linear-gradient(
    40deg,
    var(--secondary-color),
    20%,
    var(--secondary-dark)
  );
  box-shadow: -1px 2px 30px var(--primary-color),
    5px 1px 30px var(--primary-light);
`;
export default NavBar;
