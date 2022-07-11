import React, { useEffect, useState } from "react";
import PostBlock from "../../components/PostBlock";
import { getGamesCalender } from "../../utils/api";
import {
  Container,
  GamesComingMonth,
  MonthTitle,
  Wrapper,
} from "./GameCalendar";

function GamesCalendar() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    return () => {
      getGamesCalender().then(({ data }) => setInfo(data));
    };
  }, []);

  if (!info) return null;

  return (
    <Container>
      {Object.entries(info).map((r, i) => {
        return (
          <>
            <MonthTitle>
              {r[0]} <GamesComingMonth>{r[1].length} Games</GamesComingMonth>
            </MonthTitle>
            <Wrapper>
              {r[1].map((game, i) => (
                <PostBlock key={game.id} data={game} />
              ))}
            </Wrapper>
          </>
        );
      })}
    </Container>
  );
}

export default GamesCalendar;
