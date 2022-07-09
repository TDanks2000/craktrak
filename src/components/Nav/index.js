import React from "react";
import { Link, Links, Logo, LogoSpan, Wrapper } from "./Nav.styles";
import SearchBar from "./SearchBar";

function Nav() {
  return (
    <Wrapper>
      <Logo>
        Crak<LogoSpan>Trak</LogoSpan>
      </Logo>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
      </Links>
      <SearchBar />
    </Wrapper>
  );
}

export default Nav;
