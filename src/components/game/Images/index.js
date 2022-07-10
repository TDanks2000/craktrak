import React from "react";
import { Slides, SlidesContainer } from "./Images.styles";

function Images({ imgs }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlidesContainer>
      src\components\Post\Content\Content.styles.js
      <Slides {...settings}>
        {imgs.map((img) => (
          <img
            key={img.image_id}
            src={`https://images.igdb.com/igdb/image/upload/t_1080p/${img.image_id}.jpg`}
            alt={img.image_id}
          />
        ))}
      </Slides>
    </SlidesContainer>
  );
}

export default Images;
