import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostWrapper = styled(Link)`
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const BaseAbs = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
`;

export const BottomInfo = styled(BaseAbs)`
  bottom: 0;
  padding: 10px;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TopInfo = styled(BaseAbs)`
  top: 0;
  padding: 8px;
`;
