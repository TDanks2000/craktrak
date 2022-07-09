import styled from "styled-components";

export const SearchResultWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 10px 5px;
  background-color: white;
  border-bottom: 2px solid ${({ theme }) => theme.base.mainColor};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
`;
