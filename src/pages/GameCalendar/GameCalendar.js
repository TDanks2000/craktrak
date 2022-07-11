import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
`;

export const MonthTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
  margin: 1em 0;
  margin-top: 1.5em;
  width: 100%;
  padding: 10px;
  padding-left: 0.8em;
  background-color: ${({ theme }) => theme.base.navBg};
  border-radius: 5px;
  border-left: 5px solid ${({ theme }) => theme.base.mainColor};
  &:first-of-type {
    margin-top: 10px;
  }
  position: relative;
`;

export const GamesComingMonth = styled.span`
  color: ${({ theme }) => theme.text.offWhite};
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  font-size: 0.7em;
`;

export const Wrapper = styled.div`
  padding: 1em 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
