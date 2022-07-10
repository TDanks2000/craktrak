import styled from "styled-components";

export const GamesContainer = styled.div`
  width: 100%;
  padding: 1em;
`;

export const Title = styled.h1`
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;

export const GamesWrapper = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2em;
  margin: 0 auto;
`;
