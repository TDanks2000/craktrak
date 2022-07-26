import React from "react";
import {
  Link,
  Links,
  Logo,
  LogoSpan,
  NavContainer,
  Wrapper,
} from "./Nav.styles";
import SearchBar from "./SearchBar";

function Nav() {
  return (
    <Wrapper>
      <NavContainer>
        <Logo>
          Crak<LogoSpan>Trak</LogoSpan>
        </Logo>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/gamesCalendar">Calendar</Link>
        </Links>
        <SearchBar />
      </NavContainer>
    </Wrapper>
  );
}

export default Nav;
