import React, { useState } from "react";
import { search } from "../../../utils/api";
import {
  FormContainer,
  SearchBarContainer,
  SearchBarInput,
} from "./SearchBar.styles";
import SearchResults from "./SearchResults";

function SearchBar() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState(null);

  const handleChange = (event) => {
    return setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length < 3) return setResults(null);
    return search(value).then((r) => setResults(r));
  };

  return (
    <SearchBarContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <SearchBarInput
            placeholder="Search for a game..."
            value={value}
            onChange={handleChange}
          />
        </form>
        {results && <SearchResults results={results} />}
      </FormContainer>
    </SearchBarContainer>
  );
}

export default SearchBar;
