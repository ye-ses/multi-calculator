import styled from "styled-components";

export const Anchor = styled.a`
  outline: none;
  text-decoration: none;
  background-color: none;
  width: max-content;
  color: white;
  font-weight: 200;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  &:hover {
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--secondary-dark);
    cursor: pointer;
  }
`;
export const TextTag = styled.p`
  width: 100%;
  text-decoration: none;
  color: rgba(255, 254, 254, 0.889);
  &:hover {
    color: var(--secondary-color);
    cursor: pointer;
  }
`;
export const ActionButton = styled.button``;
