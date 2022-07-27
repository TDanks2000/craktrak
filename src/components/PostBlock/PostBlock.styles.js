import styled from "styled-components";

export const PostBlockContainer = styled.div`
  width: 380px;
  height: 230px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;

export const PostBlockWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
`;

export const UnderTitle = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.text.offWhite};
`;
