import React from "react";
import styled from "styled-components";
import Search from "../Search/Search";

export default function MainPage() {
  return (
    <Main>
      <Search />
    </Main>
  );
}

const Main = styled.body`
  width: 1000px;
  height: auto;
  margin: 0 auto;
  padding: 35px 35px 35px 35px;
`;
