import styled, { ThemeContext } from "styled-components";

export const GameContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 1.3em;
`;

const LeftW = "30%";

export const Left = styled.div`
  width: ${LeftW};
  float: left;
`;

export const Right = styled.div`
  width: calc(100% - ${LeftW} - 3%);
  float: right;
`;

export const Block = styled.div`
  width: 100%;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
`;

export const Title = styled.h1`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.text.secondary};
`;
