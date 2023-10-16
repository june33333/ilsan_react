import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let note = 0;
let point = 999999;

let total = "1,200,000";
let today = Math.floor(Math.random() * 101) + 100;
let todayser = Math.floor(Math.random() * 1000) + 1;
let company = "1,250";

const Intro = () => {
  return (
    <IntroInfo>
      <IntroUl></IntroUl>
      <UserUl>
        <UserLi>
          <LinkIntro to="#">
            <IntroSpan>{note}</IntroSpan> 코코몽이님
          </LinkIntro>
        </UserLi>
        <UserLi>
          <LinkIntro to="#">{point} 포인트</LinkIntro>
        </UserLi>
        <UserLi>
          <LinkIntro to="#">회원정보</LinkIntro>
        </UserLi>
        <OutLi>
          <LinkIntro to="#">로그아웃</LinkIntro>
        </OutLi>
      </UserUl>
    </IntroInfo>
  );
};

const Header = () => {
  return (
    <HeaderNav>
      <LogoUl>
        <li>
          <LinkLogo to="#">
            <LogoImg src="img/logo.png" alt="Logo" />
            FirstClub
          </LinkLogo>
        </li>
      </LogoUl>
      <TelUl></TelUl>
      <CenterUl>
        <li>
          <Link to="#">조회/등록</Link>
        </li>
        <li>
          <Link to="#">제휴업체</Link>
        </li>
        <li>
          <Link to="#">고객센터</Link>
        </li>
      </CenterUl>
    </HeaderNav>
  );
};

const Section = () => {
  return (
    <SectionMain>
      <MainH1>사고자 검색</MainH1>
      <MainH3>최상의 검색 조건을 제공하겠습니다</MainH3>
      <MainInput type="text" placeholder="예) 이름 검색 = 필수입력"></MainInput>
      <MainInput type="text" placeholder="예) 출생년도 2자리"></MainInput>
      <MainP>검색시 이름과 전화번호는 필수입력 입니다.</MainP>
      <MainInput
        type="text"
        placeholder="예) 전화번호 01012345678 형식 = 필수입력"
      ></MainInput>
      <CheckButton>조회</CheckButton>
    </SectionMain>
  );
};

const Total = () => {
  return (
    <TotalValue>
      <ValueUl>
        <ValueLi>
          <ValueLink to="#">{total}</ValueLink>
          <br></br>
          <br></br>
          <span>총 등록건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{today}</ValueLink>
          <br></br>
          <br></br>
          <span>오늘등록 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{todayser}</ValueLink>
          <br></br>
          <br></br>
          <span>오늘검색 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{company}</ValueLink>
          <br></br>
          <br></br>
          <span>가입업체수</span>
        </ValueLi>
      </ValueUl>
    </TotalValue>
  );
};

const Check = () => {
  return (
    <CheckForm>
      <Chet>
        <ChetBox>확성기 박스 / 실시간 채팅 박스</ChetBox>
        <DetailBox>실시간 검색내용 박스 양** 010-****-3333</DetailBox>
      </Chet>
      <Regis></Regis>
    </CheckForm>
  );
};

const Footer = () => {
  return (
    <FooterForm>
      <p>COPYRIGHT © 2023 firstclub ALL RIGHTS RESERVED</p>
    </FooterForm>
  );
};

const Index = () => {
  return (
    <>
      <Intro />
      <Header />
      <Section />
      <Total />
      <Check />
      <Footer />
    </>
  );
};

const IntroInfo = styled.div`
  width: 100%;
  background: #23303d;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const LinkIntro = styled.a`
  color: #fff;
  font-size: 13px;
`;

const IntroUl = styled.ul`
  display: inline-flex;
  align-items: center;
  padding-left: 5%;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const UserUl = styled.ul`
  display: inline-flex;
  align-items: center;
  padding-right: 5%;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const UserLi = styled.li`
  padding-right: 30px;
`;

const HomeLi = styled.li`
  padding-right: 30px;
`;

const OutLi = styled.li``;

const IntroLi = styled.li``;

const IntroSpan = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: red;
  text-align: center;
  border-radius: 15px;
  color: #fff;
`;

const HeaderNav = styled.div`
  width: 1350px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkLogo = styled.a`
  font-weight: bold;
  font-size: 35px;
  vertical-align: sub;
`;
const LogoImg = styled.img`
  vertical-align: sub;
  margin-right: 10px;
`;
const LogoUl = styled.ul`
  display: inline-flex;
  align-items: center;
`;

const TelUl = styled.ul`
  display: inline-flex;
  align-items: center;
`;
const CenterUl = styled.ul`
  width: 300px;
  justify-content: space-between;
  display: inline-flex;
  align-items: center;
  font-size: 20px;
`;

const SectionMain = styled.div`
  background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
  text-align: center;
  width: auto;
  height: 700px;
`;
const MainH1 = styled.h1`
  padding-top: 100px;
  color: #fff;
  font-size: 65px;
`;
const MainH3 = styled.h3`
  padding-top: 10px;
  font-size: 20px;
  color: #fff;
`;

const MainInput = styled.input`
  width: 500px;
  height: 50px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
  border-radius: 7px;
  font-size: 18px;
  border-color: #eee;
  background-image: url(img/search.png);
  background-repeat: no-repeat;
  background-position-x: 455px;
  background-position-y: center;
`;
const CheckButton = styled.button`
  margin-top: 38px;
  width: 150px;
  height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border: 0px;
  letter-spacing: 1px;
  font-size: 18px;
  border-radius: 5px;
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;
const MainP = styled.p`
  color: #fff;
  margin-top: 15px;
  margin-bottom: -25px;
`;
const TotalValue = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ValueUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;
const ValueLi = styled.li`
  padding-top: 50px;
  margin-left: 10px;
  width: 300px;
  height: 130px;
  text-align: center;
  border: 3px solid skyblue;
  border-radius: 17px;
`;

const ValueLink = styled.a`
  font-size: 55px;
`;
const CheckForm = styled.div`
  display: flex;
`;
const Chet = styled.div`
  width: 1350px;
  height: auto;
`;
const ChetBox = styled.div`
  width: 300px;
  border: 1px solid #eee;
  height: 400px;
  margin: 0 auto;
  margin-top: 5px;
  text-align: center;
  background: #eee;
  line-height: 400px;
`;
const DetailBox = styled.div`
  width: 300px;
  border: 1px solid #eee;
  height: 400px;
  margin: 0 auto;
  margin-top: 5px;
  text-align: center;
  background: #eee;
  line-height: 400px;
`;
const Regis = styled.div``;
const FooterForm = styled.div`
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 130px;
  background: #eee;
  font-size: 15px;
  color: #888;
  text-align: center;
  line-height: 130px;
`;

export default Index;
