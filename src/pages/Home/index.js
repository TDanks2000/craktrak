import React from "react";
import MostAnticipated from "../../components/sections/MostAnticipated";
import Recently from "../../components/sections/RecentlyCracked";
import TopRated from "../../components/sections/TopRated";
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
      <InfoSuccessBlock>
        <InfoLargeParagraph>
          CrakTrak is still under developers, the website may contain bugs. Some
          pages may be slow or give an error
        </InfoLargeParagraph>
      </InfoSuccessBlock>

      <Left>
        <Wrapper>
          <Title>Recently Cracked</Title>
          <PostWrapper>
            <Recently />
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
      </Left>
      <Right>
        <InfoWarningBlock>
          <InfoParagraph>
            We do not host or provide link to any cracks on CRAKTrak website.
            <br />
            We only tell you status of cracks.
          </InfoParagraph>
        </InfoWarningBlock>
      </Right>
    </HomeContainer>
  );
}

export default Home;
