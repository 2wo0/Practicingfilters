import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AListAPI } from "../../Config";

export default function PostDetailPage(props) {
  const [detailData, setDetailData] = useState({});
  const history = useHistory();

  const pageMove = () => {
    history.push({
      pathname: `/`,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${AListAPI}${props.location.state}`);
        setDetailData(response.data);
      } catch (e) {
        console.log("Error:", e);
      }
    };
    fetchData();
  }, []);

  return (
    <PostDetailWrap>
      <PostDetail>
        <TitleWrap>
          <Title>{detailData.title}</Title>
        </TitleWrap>
        <ContentWrap>
          <Content>{detailData.content}</Content>
        </ContentWrap>
      </PostDetail>
      <BackwardWrap>
        <Backward onClick={() => pageMove()}>뒤로가기</Backward>
      </BackwardWrap>
    </PostDetailWrap>
  );
}

const PostDetailWrap = styled.section`
  width: 1000px;
  height: 387px;
  margin: 0 auto;
  padding: 100px 35px 35px 35px;
`;

const PostDetail = styled.article`
  width: 930px;
  height: 260px;
  margin-bottom: 15px;
  padding: 35px;
  border: 2px solid ${(props) => props.theme.lightgray};
`;

const TitleWrap = styled.header``;

const Title = styled.h2`
  width: 700px;
  margin: 0 auto;
  margin-bottom: 35px;
  font-size: 32px;
  text-align: center;
`;

const ContentWrap = styled.div``;

const Content = styled.p`
  width: 858px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
`;

const BackwardWrap = styled.footer`
  width: 930px;
`;

const Backward = styled.button`
  width: 105px;
  height: 42px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue};
  border-radius: 5px;
  padding: 10px 28px 10px 28px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.lightblue};
  }
`;
