import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameComponent from "../../components/game";

import useCrack from "../../hooks/useCrack";
import useIsReleased from "../../hooks/useIsReleased";

import { getGame } from "../../utils/api";

function Game() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    return () => {
      getGame(id).then(({ data }) => setInfo(data[0]));
    };
  }, [id]);

  const isReleased = useIsReleased(info?.release_dates[0].human);
  const { cracked, data: crackedData } = useCrack(
    isReleased ? info?.name : null
  );
  if (!info) return null;

  if (id.toString() !== info.id.toString()) return window.location.reload();

  if (!isReleased) return <GameComponent data={info} cracked={null} />;
  return (
    <GameComponent data={info} cracked={cracked} crackedData={crackedData} />
  );
}

export default Game;
