import React, { useState } from "react";
import styled from "styled-components";

const Blog = () => {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [있음, 있음변경] = useState(["1", "아이디를 입력해주세요"]);
  let [따봉, 따봉변경] = useState("안녕");

  const handlevalue = (e) => {
    const value = e.target.value;
    있음변경(value);
  };

  return (
    <>
      <Container>
        <BlackNav>
          <h4 style={{ color: "white", fontSize: "20px" }}>블로그</h4>
        </BlackNav>
        <TitleList>
          <h4>
            {글제목[0]}
            <span
              onClick={() => {
                따봉변경("반가워");
              }}
            >
              👍
            </span>
            {따봉}
            {있음[1]}
          </h4>
          <input onChange={handlevalue}></input>
          <button>가나다순정렬</button>
          <button
            onClick={() => {
              if (있음변경 === 있음변경[1]) {
                console.log(1);
                있음(true);
              } else {
                있음변경(false);
              }
            }}
          >
            버튼
          </button>
          <p styled={{ padding: "10px" }}>2월 17일 발행</p>
        </TitleList>
        <TitleList1>
          <h4 styled={{ padding: "10px" }}>{글제목[1]}</h4>
          <p styled={{ padding: "10px" }}>2월 17일 발행</p>
        </TitleList1>
        <TitleList2>
          <h4>{글제목[2]}</h4>
          <p styled={{}}>2월 17일 발행</p>
        </TitleList2>
        <h4>{post}</h4>
      </Container>
    </>
  );
};

const Container = styled.div`
  text-align: center;
`;

const BlackNav = styled.div`
  display: flex;
  background: black;
  width: 100%;
  color: white;
  padding: 10px;
`;

const TitleList = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid gray;
`;
const TitleList1 = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid gray;
`;
const TitleList2 = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid gray;
`;
export default Blog;
