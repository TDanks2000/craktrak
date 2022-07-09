import React from "react";
import { Name, SearchResultWrapper } from "./SearchResult.styles";
import { Link } from "react-router-dom";

function SearchResult({ data }) {
  return (
    <Link to={`/game/${data.name}/${data.id}`}>
      <SearchResultWrapper>
        <Name>{data.name}</Name>
      </SearchResultWrapper>
    </Link>
  );
}

export default SearchResult;
