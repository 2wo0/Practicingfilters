import React from "react";
import styled from "styled-components";

export default function PostList({ content }) {
  return (
    <Post>
      <Title>
        <Id>{content.id}.</Id>
        {content.title}
      </Title>
      <Content>{content.content}</Content>
    </Post>
  );
}

const Post = styled.article`
  width: 893px;
  padding: 17px;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const Id = styled.span`
  color: ${(props) => props.theme.blue};
`;

const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  height: 3.6rem;
  text-overflow: ellipsis;
`;