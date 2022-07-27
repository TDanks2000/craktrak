import styled from "styled-components";

export const GameContainer = styled.div`
  width: 97%;
  margin: 0 auto;
  padding-top: 1.3em;
`;

const LeftW = "29%";

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
  margin-bottom: 1em;
`;

export const Title = styled.h1`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 0.6em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.text.secondary};
`;

export const BlockInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 1.5em 0;
`;

export const Under = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 1.3em;
  margin-bottom: 0.3em;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 5em;
`;

export const GenreContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const Genre = styled.p`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.text.secondary};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.8em;
  text-transform: uppercase;
`;

export const HltbContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const Hltb = styled.p`
  width: 330px;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.text.secondary};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.9em;
  text-transform: uppercase;
`;

export const Strong = styled.span`
  font-weight: bold;
  float: right;
`;
