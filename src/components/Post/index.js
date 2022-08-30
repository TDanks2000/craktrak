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

function Post({
  data,
  convertImg = true,
  preCrackStatus = false,
  LinkTo = false,
}) {
  const { name, cover, release_dates, id } = data;
  const isReleased = useIsReleased(
    release_dates ? release_dates[0].human : null
  );

  const { cracked, loading } = useCrack(isReleased ? name : null);

  console.log("name: " + name);
  const ImgUrl = "https://images.igdb.com/igdb/image/upload/t_cover_big/";
  const img = cover ? cover.image_id : null;
  const Img = convertImg ? `${ImgUrl}${img}.png` : data.cover;

  const To = LinkTo ? LinkTo : `/game/${name}/${id}`;

  console.log(name, LinkTo, "To", To);

  if (preCrackStatus)
    return (
      <PostWrapper img={Img} to={To}>
        <PostContainer>
          <TopInfo>
            <CrackStatus cracked={true} loading={loading} />
          </TopInfo>
          <BottomInfo>
            <Title>{name}</Title>
          </BottomInfo>
        </PostContainer>
      </PostWrapper>
    );

  return (
    <PostWrapper
      img={
        img !== null ? Img : `https://static-cdn.jtvnw.net/ttv-boxart/${id}.jpg`
      }
      to={To}
    >
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
