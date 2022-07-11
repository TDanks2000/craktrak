import React from "react";
import { Poster } from "./Poster.styles";

function PosterComponent({ cover, name }) {
  const ImgUrl = "https://images.igdb.com/igdb/image/upload/t_1080p/";
  const img = cover ? cover.image_id : "";
  const Img = `${ImgUrl}${img}.png`;

  return <Poster src={Img} alt={name} />;
}

export default PosterComponent;
