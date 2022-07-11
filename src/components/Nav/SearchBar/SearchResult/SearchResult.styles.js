import styled from "styled-components";

export const SearchResultWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom: 2px solid ${({ theme }) => theme.base.mainColor};
  cursor: pointer;
  ${(props) => {
    if (!props.img) return `background: black;`;
    return `background-image: url(${props.img});`;
  }}

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: 0.9;
  }
`;

export const SearchResultContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 1.2em 4px;
`;

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  color: ${({ theme }) => theme.text.primary};
`;
