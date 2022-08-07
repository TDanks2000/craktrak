import React from "react";
import MostAnticipated from "../../components/sections/MostAnticipated";
import Recently from "../../components/sections/RecentlyCracked";
import TopRated from "../../components/sections/TopRated";
import PopularComp from "../../components/sections/Popular";
import {
  HomeContainer,
  InfoBlock,
  InfoLargeParagraph,
  InfoParagraph,
  InfoSuccessBlock,
  InfoWarningBlock,
  Left,
  PostWrapper,
  Right,
  Title,
  Wrapper,
} from "./Home.styles";

function Home() {
  return (
    <HomeContainer>
      <InfoWarningBlock>
        <InfoLargeParagraph>
          We do not host or provide link to any cracks on CrakTrak website. We
          only tell you status of cracks.
        </InfoLargeParagraph>
      </InfoWarningBlock>
      <InfoSuccessBlock>
        <InfoLargeParagraph>
          CrakTrak is still under development and, the website may contain bugs.
          Some pages may be slow or give an error
        </InfoLargeParagraph>
      </InfoSuccessBlock>

      <Wrapper>
        <Title>Recently Cracked</Title>
        <PostWrapper>
          <Recently />
        </PostWrapper>
      </Wrapper>
      <Wrapper>
        <Title>Popular</Title>
        <PostWrapper>
          <PopularComp />
        </PostWrapper>
      </Wrapper>

      <Wrapper>
        <Title>Top rated</Title>
        <PostWrapper>
          <TopRated />
        </PostWrapper>
      </Wrapper>

      <Wrapper>
        <Title>Most Anticipated</Title>
        <PostWrapper>
          <MostAnticipated />
        </PostWrapper>
      </Wrapper>
    </HomeContainer>
  );
}

export default Home;
