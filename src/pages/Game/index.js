import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameComponent from "../../components/game";

import useCrack from "../../hooks/useCrack";
import useIsReleased from "../../hooks/useIsReleased";

import { getGame } from "../../utils/api";

function Game() {
  const { id, title } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    return () => {
      getGame(id.toLowerCase() !== "unkown" ? id : title).then(({ data }) => {
        console.log(data);
        return setInfo(data[0]);
      });
    };
  }, [title]);

  // return console.log(info);
  const isReleased = useIsReleased(
    info && info.release_dates ? info.release_dates[0].human : null
  );
  const { cracked, data: crackedData } = useCrack(
    isReleased ? info?.name : null
  );

  if (!info) return null;

  if (!isReleased) return <GameComponent data={info} cracked={null} />;

  return (
    <GameComponent data={info} cracked={cracked} crackedData={crackedData} />
  );
}

export default Game;
