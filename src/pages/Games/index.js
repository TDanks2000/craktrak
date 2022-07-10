import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { getAllGames } from "../../utils/api";
import { GamesContainer, GamesWrapper, Title } from "./Games.styles";

function Games() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    return () => {
      getAllGames().then(({ data }) => setInfo(data));
    };
  }, []);

  console.log(info);

  return (
    <GamesContainer>
      <Title>Games</Title>
      <GamesWrapper>
        {info.map((res) => (
          <Post data={res} key={res.id} />
        ))}
      </GamesWrapper>
    </GamesContainer>
  );
}

export default Games;
