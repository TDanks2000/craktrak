import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 10px;
`;

export const Wrapper = styled.div`
  padding: 1em;
`;

export const Title = styled.h1`
  padding-bottom: 1em;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;
