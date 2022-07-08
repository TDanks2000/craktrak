import React from "react";
import useCrack from "../../hooks/useCrack";
import useIsReleased from "../../hooks/useIsReleased";
import CrackStatus from "./Content/CrackStatus";
import {
  BottomInfo,
  Cracked,
  NotCracked,
  PostContainer,
  PostWrapper,
  Title,
  TopInfo,
} from "./Post.styles";

function Post({ data }) {
  const { name, cover, release_dates } = data;
  const isReleased = useIsReleased(release_dates[0].date);

  const { cracked, loading } = useCrack(isReleased ? name : null);

  const ImgUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/";
  const img = data.cover ? data.cover.image_id : "";
  const Img = `${ImgUrl}${img}.png`;

  return (
    <PostWrapper img={Img}>
      <PostContainer>
        <TopInfo>
          {isReleased && <CrackStatus cracked={cracked} loading={loading} />}
        </TopInfo>
        <BottomInfo>
          <Title>{name}</Title>
        </BottomInfo>
      </PostContainer>
    </PostWrapper>
  );
}

export default Post;
