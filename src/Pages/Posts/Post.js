import React, { useState } from "react";
import styled from "styled-components";
import PostList from "./PostList";

export default function Post({ data, inputValue }) {
  const [hanbleClick, setHanbleClick] = useState(true);

  return (
    <PostWrap>
      <ButtonWrap>
        <Aposts onClick={() => setHanbleClick(true)} hanbleClick={hanbleClick}>
          A Posts
        </Aposts>
        <Bposts onClick={() => setHanbleClick(false)} hanbleClick={hanbleClick}>
          B Posts
        </Bposts>
      </ButtonWrap>
      <PostListWrap>
        {data &&
          data.map((content, idx) => {
            return (
              <PostList key={idx} content={content} inputValue={inputValue} />
            );
          })}
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
  color: ${(props) => (props.hanbleClick ? "#3B82F6" : "#6B7280")};

  &:hover {
    background-color: ${(props) => props.theme.lightgray};
    color: ${(props) => props.theme.lightblue};
  }
`;

const Bposts = styled(Aposts)`
  color: ${(props) => (props.hanbleClick ? "#6B7280" : "#3B82F6")};
`;

const PostListWrap = styled.section`
  width: 930px;
  margin-top: 10px;
  padding: 17px;
  border: 1px solid black;
  border-color: rgba(229, 231, 235);
  border-radius: 5px;
`;
