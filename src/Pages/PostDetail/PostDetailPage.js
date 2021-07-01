import React from "react";
import styled from "styled-components";

export default function PostDetailPage(props) {
  return (
    <PostDetailWrap>
      <PostDetail>
        <TitleWrap>
          <Title>
            Sequi sapiente quia quidem vero cum et cumque reprehenderit
            consequatur.
          </Title>
        </TitleWrap>
        <ContentWrap>
          <Content>
            Perferendis amet voluptatum. Excepturi nisi tenetur culpa
            consequatur soluta est eaque. Blanditiis quod minima maxime sunt.
            Nobis omnis occaecati aut porro cumque necessitatibus aut illo. Sit
            molestiae aut sed a et illum perferendis. Iusto error error saepe
            eligendi rerum dolore quaerat facere labore. Sit beatae aspernatur
            sit ut ex omnis ipsam numquam. Eos id ut non veniam eos et. Suscipit
            sed cum. Officiis accusantium dolorum voluptatum.
          </Content>
        </ContentWrap>
      </PostDetail>
      <BackwardWrap>
        <Backward>뒤로가기</Backward>
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
