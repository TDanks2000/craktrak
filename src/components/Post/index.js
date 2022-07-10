import React from "react";
import useCrack from "../../hooks/useCrack";
import useIsReleased from "../../hooks/useIsReleased";
import CrackStatus from "./Content/CrackStatus";
import {
  BottomInfo,
  PostContainer,
  PostWrapper,
  Title,
  TopInfo,
} from "./Post.styles";

function Post({ data }) {
  const { name, cover, release_dates, id } = data;
  const isReleased = useIsReleased(release_dates[0].human);

  const { cracked, loading } = useCrack(isReleased ? name : null);

  const ImgUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/";
  const img = cover ? cover.image_id : "";
  const Img = `${ImgUrl}${img}.png`;

  return (
    <PostWrapper img={Img} to={`/game/${name}/${id}`}>
      <PostContainer>
        <TopInfo>
          {isReleased ? (
            <CrackStatus cracked={cracked} loading={loading} />
          ) : (
            <CrackStatus cracked={null} loading={loading} />
          )}
        </TopInfo>
        <BottomInfo>
          <Title>{name}</Title>
        </BottomInfo>
      </PostContainer>
    </PostWrapper>
  );
}

export default Post;
