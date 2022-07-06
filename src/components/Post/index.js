import React from "react";
import { BottomInfo, PostContainer, PostWrapper, Title } from "./Post.styles";

function Post({ data }) {
  console.log(data);

  const { name, cover } = data;

  const ImgUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/";
  const img = data.cover ? data.cover.image_id : "";
  const Img = `${ImgUrl}${img}.png`;

  return (
    <PostWrapper img={Img}>
      <PostContainer>
        <BottomInfo>
          <Title>{name}</Title>
        </BottomInfo>
      </PostContainer>
    </PostWrapper>
  );
}

export default Post;
