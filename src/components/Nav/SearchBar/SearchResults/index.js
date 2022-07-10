import React from "react";
import SearchResult from "../SearchResult";
import { SearchResultsContainer } from "./SearchResults.styles";

function SearchResults({ results, setResults, setValue }) {
  const { data } = results;

  if (!data.length) return null;

  return (
    <SearchResultsContainer>
      {data.map((r) => (
        <SearchResult
          key={r.id}
          data={r}
          setResults={setResults}
          setValue={setValue}
        />
      ))}
    </SearchResultsContainer>
  );
}

export default SearchResults;
