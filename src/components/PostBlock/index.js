import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import React from "react";
import CrackStatus from "../Post/Content/CrackStatus";
import { BottomInfo, Title, TopInfo } from "../Post/Post.styles";
import {
  PostBlockContainer,
  PostBlockWrapper,
  UnderTitle,
} from "./PostBlock.styles";

dayjs.extend(advancedFormat);
function PostBlock({ data }) {
  const { release_date, title, teaser_link, full_image } = data;

  const rd = dayjs(release_date).format("dddd, Do MMMM YYYY");

  return (
    <PostBlockContainer img={full_image}>
      <PostBlockWrapper>
        <TopInfo>
          <CrackStatus cracked={null} loading={false} />
        </TopInfo>
        <BottomInfo>
          <Title>{title}</Title>
          <UnderTitle>{rd}</UnderTitle>
        </BottomInfo>
      </PostBlockWrapper>
    </PostBlockContainer>
  );
}

export default PostBlock;
