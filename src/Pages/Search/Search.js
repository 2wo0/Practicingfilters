import React from "react";
import styled from "styled-components";
import Post from "../Posts/Post";

export default function Search() {
  return (
    <>
      <SearchWrap>
        <SubTitle>게시물을 검색해 보세요</SubTitle>
        <InputWrap>
          <Icon>
            <i className="fas fa-search"></i>
          </Icon>
          <PostSearch
            type="text"
            placeholder="검색어를 입력하세요"
          ></PostSearch>
        </InputWrap>
      </SearchWrap>
      <Post />
    </>
  );
}

const SearchWrap = styled.header``;

const SubTitle = styled.p`
  font-size: 21px;
  padding: 20px;
  color: ${(props) => props.theme.gray};
  text-align: center;
`;

const InputWrap = styled.article`
  ${(props) => props.theme.flexStart};
  width: 336px;
  height: 51px;
  line-height: 25px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 14px 14px 14px 14px;
  border: 1px solid rgba(229, 231, 235);
  border-radius: 5px;

  &:hover {
    border-color: blue;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  color: ${(props) => props.theme.gray};
`;

const PostSearch = styled.input`
  width: 280px;
`;
