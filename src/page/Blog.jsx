import React, { useState } from "react";
import styled from "styled-components";

const Blog = () => {
  const post = "강남 우동 맛집";
  const [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남우동 맛집",
    "파이썬 독학",
  ]);
  const [inputSignCode, setInputSignCode] = useState("");
  const [up, setup] = useState("");
  const inputplus = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputSignCode(value);
  };
  function 함수() {
    if (inputValue === "") {
      setup("아이디를 입력해주세요");
    } else {
      setup("");
    }
  }
  const 정렬가나다 = () => {
    const 정렬된글제목 = [...글제목];
    정렬된글제목.sort();
    글제목변경(정렬된글제목);
  };
  return (
    <>
      <H1 className="H1">하이</H1>
      <Container>
        <BlackNav>
          <h4 style={{ color: "white", fontSize: "20px" }}>블로그</h4>
        </BlackNav>
        <TitleList>
          <h4>
            {글제목[0]}
            <span> 좋아요👍 {up}</span>
          </h4>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button onClick={정렬가나다}>가나다순정렬</button>
          <button onClick={함수}>버튼</button>
          <p styled={{ padding: "10px" }}>2월 17일 발행</p>
          <hr />
        </TitleList>
        <TitleList1>
          <h4 styled={{ padding: "10px" }}>{글제목[1]}</h4>
          <p styled={{ padding: "10px" }}>2월 17일 발행</p>
          <hr />
        </TitleList1>
        <TitleList2>
          <h4>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
          <hr />
        </TitleList2>
        <Modal />
      </Container>
    </>
  );
};

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

const Container = styled.div`
  text-align: center;
  .modal {
    margin-top: 20px;
    padding: 20px;
    background: #eee;
    text-align: left;
  }
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
`;
const TitleList1 = styled.div`
  padding-left: 20px;
  text-align: left;
`;
const TitleList2 = styled.div`
  padding-left: 20px;
  text-align: left;
`;

const H1 = styled.h1`
  display: block;
`;

export default Blog;
