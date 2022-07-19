import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameComponent from "../../components/game";

import { getGame } from "../../utils/api";

function Game() {
  const { id, title } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    return () => {
      if (isNaN(id)) {
        console.log(isNaN(id));
        getGame(title).then(({ data }) => {
          return setInfo(data);
        });
      } else {
        getGame(title, id).then(({ data }) => {
          return setInfo(data);
        });
      }
    };
  }, [title]);

  // return console.log(info);

  if (!info) return null;

  return <GameComponent data={info} />;
}

export default Game;
