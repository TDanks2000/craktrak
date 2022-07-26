import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.base.navBg};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  color: ${({ theme }) => theme.base.mainColor};
  text-transform: uppercase;
`;

export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.base.SecondColor};
  font-size: 0.75em;
  text-transform: uppercase;
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  width: 30%;
  margin-left: 20px;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.base.SecondColor};
  font-size: 1.7rem;
  font-weight: 300;
  text-transform: uppercase;
  &.active {
    color: ${({ theme }) => theme.base.mainColor};
    font-weight: bold;
    text-decoration: underline;
  }
`;
