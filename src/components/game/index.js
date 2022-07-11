import React from "react";
import CrackedInfo from "./crackedInfo";

import {
  Block,
  BlockInfo,
  Desc,
  GameContainer,
  Genre,
  GenreContainer,
  Left,
  Right,
  Title,
  Under,
} from "./game.styles";
import Images from "./Images";
import InfoText from "./InfoText";
import PosterComponent from "./Poster";
import Video from "./Video";

function GameComponent({ data, cracked, crackedData }) {
  const {
    name,
    cover,
    release_dates,
    first_release_date,
    summary,
    videos,
    screenshots,
    genres,
  } = data;
  const release_date = release_dates ? release_dates[0] : null;

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
            <InfoText
              explain={`Release date`}
              text={release_date?.human || "TBD"}
            />
            {cracked === null ? (
              <InfoText explain={`crack status`} text={"Unreleased"} />
            ) : (
              <CrackedInfo data={crackedData} cracked={cracked} />
            )}
          </BlockInfo>
        </Block>
        <Block>
          <Title>Genres</Title>
          <GenreContainer>
            {genres && genres.map((genre) => <Genre>{genre.name}</Genre>)}
          </GenreContainer>
        </Block>
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

export default GameComponent;
