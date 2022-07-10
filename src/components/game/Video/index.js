import React from "react";
import { VideoStyled } from "./Video.styles";

function Video({ VideoData }) {
  const { video_id } = VideoData;

  return <VideoStyled videoId={video_id} />;
}

export default Video;
