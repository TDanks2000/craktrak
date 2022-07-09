import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { getGame } from "../../utils/api";
import { Block, Desc, GameContainer, Left, Right, Title } from "./game.styles";
import PosterComponent from "./Poster";

function Game() {
  const location = useLocation();
  const { id, title } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    return () => {
      getGame(id).then(({ data }) => setInfo(data[0]));
    };
  }, [id]);

  if (!info) return null;

  const { name, cover, release_dates, summary } = info;

  if (id.toString() !== info.id.toString()) return window.location.reload();

  return (
    <GameContainer>
      <Left>
        <PosterComponent cover={cover} name={name} />
      </Left>
      <Right>
        <Block>
          <Title>{name}</Title>
          <Desc>{summary}</Desc>
        </Block>
      </Right>
    </GameContainer>
  );
}

export default Game;
