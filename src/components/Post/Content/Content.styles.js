import styled from "styled-components";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export const CrackStatusContainer = styled.div`
  float: right;
`;

const fontSize = ".7rem";

export const defaultCrackStatus = styled.span`
  overflow: hidden;
  padding: 5px 12px;
  font-size: ${fontSize};
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${fontSize};
`;

export const Cracked = styled(defaultCrackStatus)`
  background: ${({ theme }) => theme.text.success};
`;

export const NotCracked = styled(defaultCrackStatus)`
  background: ${({ theme }) => theme.text.warning};
`;
