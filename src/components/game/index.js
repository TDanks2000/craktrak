import React from "react";
import { useParams } from "react-router-dom";
import useCrack from "../../hooks/useCrack";
import useIsReleased from "../../hooks/useIsReleased";
import CrackedInfo from "./crackedInfo";

import {
  Block,
  BlockInfo,
  Desc,
  GameContainer,
  Genre,
  GenreContainer,
  Hltb,
  HltbContainer,
  Left,
  Right,
  Strong,
  Title,
  Under,
} from "./game.styles";
import Images from "./Images";
import InfoText from "./InfoText";
import PosterComponent from "./Poster";
import Video from "./Video";

function GameComponent({ data }) {
  let { title } = useParams();
  const igdbData = data[0];
  const hltbData = data[1];
  const {
    name,
    cover,
    release_dates,
    first_release_date,
    summary,
    videos,
    screenshots,
    genres,
    total_rating,
  } = igdbData;

  const release_date = release_dates ? release_dates[0] : null;

  const isReleased = useIsReleased(release_date ? release_date.human : null);

  const {
    cracked,
    loading,
    data: crackedData,
  } = useCrack(isReleased ? decodeURI(title) : null);

  return (
    <GameContainer>
      <Title>{name}</Title>
      <Left>
        <PosterComponent cover={cover} name={name} />
      </Left>
      <Right>
        <Block>
          <Desc>{summary}</Desc>
          <BlockInfo>
            {isReleased && (
              <InfoText
                explain={`Rating`}
                text={
                  Math.round((total_rating / 10 + Number.EPSILON) * 10) / 10
                }
              />
            )}
            <InfoText
              explain={`Release date`}
              text={release_date?.human || "TBD"}
            />
            {cracked === null ? (
              <InfoText explain={`crack status`} text={"Unreleased"} />
            ) : (
              <CrackedInfo data={crackedData} cracked={cracked} />
            )}
            {crackedData?.Info && (
              <InfoText
                explain={`Protection`}
                text={JSON.parse(crackedData.Info.protections)[0]}
              />
            )}
          </BlockInfo>
        </Block>
        <Block>
          <Title>Genres</Title>
          <GenreContainer>
            {genres && genres.map((genre) => <Genre>{genre.name}</Genre>)}
          </GenreContainer>
        </Block>
        {hltbData.gameplayMain > 0 && (
          <Block>
            <Title>How long to beat</Title>
            <HltbContainer>
              {hltbData.gameplayMain > 0 && (
                <Hltb>
                  story: <Strong>{timeConvert(hltbData.gameplayMain)}</Strong>
                </Hltb>
              )}
              {hltbData.gameplayMainExtra > 0 && (
                <Hltb>
                  story + extras:{" "}
                  <Strong>{timeConvert(hltbData.gameplayMainExtra)}</Strong>
                </Hltb>
              )}
              {hltbData.gameplayCompletionist > 0 && (
                <Hltb>
                  100%:{" "}
                  <Strong>{timeConvert(hltbData.gameplayCompletionist)}</Strong>
                </Hltb>
              )}
            </HltbContainer>
          </Block>
        )}
      </Right>
      <Under>
        <Title>Visuals</Title>
        {videos && <Video VideoData={videos[0]} />}
        {/* {videos.map((video) => {
          if (!video.name.toLowerCase().includes("trailer")) return null;
          return <Video VideoData={video} />;
        })} */}
        {screenshots && <Images imgs={screenshots} />}
      </Under>
    </GameContainer>
  );
}

const timeConvert = (n) => {
  var num = (n * 3600) / 60;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return `${rhours} hours ${rminutes} minutes`;
};

export default GameComponent;
