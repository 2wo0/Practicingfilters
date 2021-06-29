import React from "react";
import styled from "styled-components";

export default function Post() {
  return (
    <PostWrap>
      <ButtonWrap>
        <Aposts>A Posts</Aposts>
        <Bposts>B Posts</Bposts>
      </ButtonWrap>
      <PostListWrap>
        <PostList>ddd</PostList>
        <PostList>ddd</PostList>
        <PostList>ddd</PostList>
        <PostList>ddd</PostList>
      </PostListWrap>
    </PostWrap>
  );
}

const PostWrap = styled.div``;

const ButtonWrap = styled.header`
  margin-top: 50px;
  border-bottom: 1px solid ${(props) => props.theme.gray};
`;

const Aposts = styled.button`
  width: 72px;
  height: 42px;
  padding: 10px 10px 10px 10px;
  background-color: ${(props) => props.theme.white};
`;

const Bposts = styled(Aposts)``;

const PostListWrap = styled.section`
  width: 930px;
  margin-top: 10px;
  padding: 17px 17px 17px 17px;
  border: 1px solid black;
  border-color: rgba(229, 231, 235);
  border-radius: 5px;
`;

const PostList = styled.article`
  width: 893px;
  height: 122px;
  padding: 17px 17px 17px 17px;
  margin-bottom: 17px;
  border: 1px solid black;
`;
