import styled from "styled-components";

export const Container = styled.div``;

export const ExplainText = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  font-size: 1.2em;
`;
export const Text = styled.h5`
  color: ${({ theme }) => theme.text.secondary};
`;
