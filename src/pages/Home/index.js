import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import MostAnticipated from "../../components/sections/MostAnticipated";
import TopRated from "../../components/sections/TopRated";
import { HomeContainer, PostWrapper, Title, Wrapper } from "./Home.styles";

function Home() {
  return (
    <HomeContainer>
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
