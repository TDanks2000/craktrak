import styled from "styled-components";
import YouTube from "react-youtube";

export const VideoContainer = styled.div`
  float: right;
  width: 47%;
  height: 490px;
  overflow: hidden;
`;

export const VideoStyled = styled(YouTube)`
  width: 100%;
  height: 100%;
  & * {
    width: 100%;
    height: 100%;
  }
`;
