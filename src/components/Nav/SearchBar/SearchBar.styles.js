import styled from "styled-components";

export const SearchBarContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const FormContainer = styled.div`
  float: right;
  width: 30%;
  position: relative;
`;

export const SearchBarInput = styled.input`
  float: right;
  color: ${({ theme }) => theme.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.base.mainColor};
  padding: 5px 0;
  width: 100%;
`;
