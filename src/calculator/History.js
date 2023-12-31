import styled from "styled-components";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";

function History(props) {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <HistoryContainer>
      <HistoryIcon>
        <FaHistory
          onClick={() => {
            setShowHistory(!showHistory);
          }}
        />
      </HistoryIcon>
      {showHistory && (
        <HistoryBox id="hBox">
          {/* {props.history.map((expression) => {
            <p>{expression}</p>;
          })} */}
        </HistoryBox>
      )}
    </HistoryContainer>
  );
}
const HistoryContainer = styled.div`
  position: absolute;
  font-size: 0.9375em;
  color: rgb(46, 46, 46);
  top: 4;
  left: 0;
  cursor: pointer;
`;
const HistoryBox = styled.p`
  margin-left: -1em;
  margin-top: 1rem;
  height: fit-content;
  font-size: 0.6em;
  font-weight: 550;
  text-align: left;
  padding: 0.5em 0.5em 0.5em 0.5em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: rgba(0, 0, 0, 0.671);
  border-radius: 0.5rem;
  background-color: var(--primary-color);
  color: rgba(0, 0, 0, 0.671);
  line-height: 1.6;
`;
const HistoryIcon = styled.i`
  position: relative;
  padding: 0.5em;
  font-size: 0.9375em;
  color: rgba(46, 46, 46, 0.5);
  top: 0.6em;
  left: 1.2em;
  cursor: pointer;
`;
export default History;
