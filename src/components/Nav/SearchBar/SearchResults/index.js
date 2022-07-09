import React from "react";
import SearchResult from "../SearchResult";
import { SearchResultsContainer } from "./SearchResults.styles";

function SearchResults({ results }) {
  const { data } = results;

  console.log(data);

  if (!data.length) return null;

  return (
    <SearchResultsContainer>
      {data.map((r) => (
        <SearchResult key={r.id} data={r} />
      ))}
    </SearchResultsContainer>
  );
}

export default SearchResults;
