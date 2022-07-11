import React from "react";
import { VideoContainer, VideoStyled } from "./Video.styles";

function Video({ VideoData }) {
  const { video_id } = VideoData;

  return (
    <VideoContainer>
      <VideoStyled videoId={video_id} />
    </VideoContainer>
  );
}

export default Video;
