import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Posts/Post";
import axios from "axios";
import { AListAPI } from "../../Config";

export default function Search() {
  const [hanbleFocus, sethanbleFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${AListAPI}?page=0`);
        setData(response.data);
      } catch (e) {
        console.log("Error:", e);
      }
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setPageNumber(pageNumber + 1);
      const response = await axios.get(`${AListAPI}?page=${pageNumber}`);
      if (data.length === 0) {
        setLoading(true);
        setData(response.data);
      } else {
        setData([...data, ...response.data]);
        setLoading(true);
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const callback = ([entry], observer) => {
    if (entry.isIntersecting) {
      fetchData();
      observer.observe(target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    const filter = () => {
      setFilterData(
        Object.values(data).filter((object) =>
          object.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    };

    setTimeout(filter, 150);
  }, [inputValue]);

  const getFocus = () => {
    document.getElementById("input").focus();
  };

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <SearchWrap>
        <SubTitle>게시물을 검색해 보세요</SubTitle>
        <InputWrap onClick={() => getFocus()} hanbleFocus={hanbleFocus}>
          <Icon>
            <i className="fas fa-search"></i>
          </Icon>
          <PostSearch
            id="input"
            onFocus={() => sethanbleFocus(true)}
            onBlur={() => sethanbleFocus(false)}
            onChange={(e) => handleValue(e)}
            type="text"
            placeholder="검색어를 입력하세요"
          ></PostSearch>
        </InputWrap>
      </SearchWrap>
      <Post data={filterData[0] ? filterData : data} inputValue={inputValue} />
      <Loding ref={setTarget}>{loading && "Loading..."}</Loding>
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
  border-color: ${(props) => (props.hanbleFocus ? "#3B82F6" : "#6B7280")};
  cursor: text;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  color: ${(props) => props.theme.gray};
`;

const PostSearch = styled.input`
  width: 280px;
  cursor: text;
`;

const Loding = styled.div`
  width: 100px;
`;
