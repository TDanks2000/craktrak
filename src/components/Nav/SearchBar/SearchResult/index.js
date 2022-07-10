import React from "react";
import {
  Name,
  SearchResultContainer,
  SearchResultWrapper,
} from "./SearchResult.styles";
import { Link } from "react-router-dom";

function SearchResult({ data, setResults, setValue }) {
  const { screenshots } = data;

  const img = `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${screenshots[0].image_id}.jpg`;

  const handleClick = (event) => {
    setResults(null);
    return setValue("");
  };

  return (
    <Link to={`/game/${data.name}/${data.id}`} onClick={handleClick}>
      <SearchResultWrapper img={img}>
        <SearchResultContainer>
          <Name>{data.name}</Name>
        </SearchResultContainer>
      </SearchResultWrapper>
    </Link>
  );
}

export default SearchResult;
