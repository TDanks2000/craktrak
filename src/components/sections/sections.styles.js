import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(FaSpinner)`
  color: ${({ theme }) => theme.base.mainColor};
  animation: ${spin} infinite 5s linear;
  font-size: 3em;
`;
