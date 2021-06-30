import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostList from "./PostList";
import axios from "axios";
import { AListAPI } from "../../Config";

export default function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(AListAPI);
        setData(response.data);
      } catch (e) {
        console.log("Error:", e);
      }
    };
    fetchData();
  }, []);

  return (
    <PostWrap>
      <ButtonWrap>
        <Aposts>A Posts</Aposts>
        <Bposts>B Posts</Bposts>
      </ButtonWrap>
      <PostListWrap>
        {data.map((content, idx) => {
          return <PostList key={idx} content={content} />;
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
`;

const Bposts = styled(Aposts)``;

const PostListWrap = styled.section`
  width: 930px;
  margin-top: 10px;
  padding: 17px;
  border: 1px solid black;
  border-color: rgba(229, 231, 235);
  border-radius: 5px;
`;
