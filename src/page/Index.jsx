import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd";
import { InputNumber } from "antd";
import Infomadal from "./Infomodal";
import CusTomer from "./CusTomer";
import AddInfo from "./AddInfo";
import AddEm from "./AddEm";
import ViewHistory from "./ViewHistory";
import { HashLink } from "react-router-hash-link";

let note = 0;
let point = 999999;

let total = 1200000;
let today = Math.floor(Math.random() * 101) + 100;
let todayser = Math.floor(Math.random() * 1000) + 1;
let company = 1250;

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
          <LinkIntro to="#">{point.toLocaleString()} 포인트</LinkIntro>
        </UserLi>
        <UserLi>
          <LinkIntro to="Infomadal">
            <Infomadal />
          </LinkIntro>
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
    <HeaderBg>
      <HeaderNav>
        <LogoUl>
          <li>
            <LinkLogo to="../index">
              <LogoImg src="img/logo.png" alt="Logo" />
              FirstClub
            </LinkLogo>
          </li>
        </LogoUl>
        <TelUl></TelUl>
        <CenterUl>
          <li>
            <HashLink to="#CheckForm" smooth>
              조회/등록
            </HashLink>
          </li>
          <li>
            <Link to="../affiliate">제휴업체</Link>
          </li>
          <li>
            <Link to="#">
              <CusTomer />
            </Link>
          </li>
        </CenterUl>
      </HeaderNav>
    </HeaderBg>
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
          <ValueLink to="#">{total.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>총 등록건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{today.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>오늘등록 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{todayser.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>오늘검색 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{company.toLocaleString()}</ValueLink>
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
    <CheckForm id="CheckForm">
      <BannerBox1>
        <img src="img/banner01.png"></img>
      </BannerBox1>
      <Chet>
        <ChetBox>확성기 박스 / 실시간 채팅 박스</ChetBox>
        <DetailBox>
          양** 010-****-3333 <DetailTime>검색시간</DetailTime>
        </DetailBox>
      </Chet>
      <Regis>
        <RegisBtn>
          <RegBtn>
            <RegBtnImg src="img/regispen.png"></RegBtnImg>등록하기
          </RegBtn>
        </RegisBtn>
        <ScheDule>
          <ScheDuleUl>
            <ScheDuleLi>이름</ScheDuleLi>
            <ScheDuleLi>생년월일</ScheDuleLi>
            <ScheDuleLi>
              은행명 <BankBtn>+</BankBtn>
            </ScheDuleLi>
            <ScheDuleLi>
              계좌번호 <Account>+</Account>
            </ScheDuleLi>
            <ScheDuleLi>
              전화번호 <Phone>+</Phone>
            </ScheDuleLi>
            <ScheDuleLi>거주지역</ScheDuleLi>
            <ScheDuleLi>비상연락망</ScheDuleLi>
            <ScheDuleLi>등록일시</ScheDuleLi>
            <ScheDuleLi>등록인</ScheDuleLi>
          </ScheDuleUl>
          <ScheInputUl>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>
              <EmBtn>추가 +</EmBtn>
            </ScheInputLi>
            <ScheInputLi>
              <ScheInput></ScheInput>
            </ScheInputLi>
            <ScheInputLi>히츠블루</ScheInputLi>
          </ScheInputUl>
        </ScheDule>
        <NoteDiv>
          <NoteInput
            type="text"
            placeholder="사고내용을 입력해주세요"
          ></NoteInput>
          <NoteBtnBox>
            <NoteBtn>
              <AddInfo />
            </NoteBtn>
            <AddEm />
            <ViewHistory />
          </NoteBtnBox>
        </NoteDiv>
        <RcBox>
          <RegisCheckButton>등록</RegisCheckButton>
        </RcBox>
      </Regis>
      <BannerBox2>
        <img src="img/banner02.png"></img>
      </BannerBox2>
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
  position: fixed;
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

const OutLi = styled.li``;

const IntroSpan = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: red;
  text-align: center;
  border-radius: 15px;
  color: #fff;
`;

const HeaderBg = styled.div`
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  margin-top: 40px;
`;

const HeaderNav = styled.div`
  width: 1350px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 640px) {
    width: auto;
    height: 50px;
    padding-left: 3%;
    padding-right: 3%;
  }
`;

const LinkLogo = styled(Link)`
  font-weight: bold;
  font-size: 35px;
  vertical-align: sub;
  @media screen and (max-width: 640px) {
    font-size: 0px;
  }
`;
const LogoImg = styled.img`
  vertical-align: sub;
  margin-right: 10px;
  @media screen and (max-width: 640px) {
    width: 50px;
    height: auto;
  }
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
  @media screen and (max-width: 640px) {
    width: 200px;
    font-size: 15px;
  }
`;

const SectionMain = styled.div`
  padding-top: 140px;
  background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
  text-align: center;
  width: auto;
  height: 700px;
  @media screen and (max-width: 640px) {
    padding-top: 50px;
    height: 580px;
  }
`;
const MainH1 = styled.h1`
  padding-top: 100px;
  color: #fff;
  font-size: 65px;
  @media screen and (max-width: 640px) {
    font-size: 38px;
  }
`;
const MainH3 = styled.h3`
  padding-top: 10px;
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
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
  @media screen and (max-width: 640px) {
    width: 300px;
    margin-top: 30px;
    font-size: 13px;
  }
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
  @media screen and (max-width: 640px) {
    width: 100px;
    height: 38px;
  }
`;
const MainP = styled.p`
  color: #fff;
  margin-top: 15px;
  margin-bottom: -30px;
  @media screen and (max-width: 640px) {
    margin-bottom: -20px;
  }
`;
const TotalValue = styled.div`
  margin-top: 35px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    margin-bottom: 50px;
  }
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
  border: 2px solid skyblue;
  border-radius: 17px;
  @media screen and (max-width: 640px) {
    width: auto;
    height: 100px;
    padding-top: 10px;
  }
`;

const ValueLink = styled.a`
  font-size: 55px;
  @media screen and (max-width: 640px) {
    font-size: 25px;
  }
`;
const BannerBox1 = styled.div`
  margin-top: 35px;
  margin-right: 25px;
`;
const BannerBox2 = styled.div`
  margin-top: 35px;
  margin-left: 25px;
`;
const CheckForm = styled.div`
  display: flex;
  justify-content: center;
`;
const Chet = styled.div`
  width: auto;
  height: auto;
`;
const ChetBox = styled.div`
  width: 300px;
  border: 1px solid #eee;
  height: 400px;
  text-align: center;
  background: #eee;
  line-height: 400px;
`;
const DetailBox = styled.div`
  width: 290px;
  border: 1px solid #eee;
  height: 370px;
  margin-top: 5px;
  text-align: center;
  background: #eee;
  display: flex;
  align-items: end;
  padding-bottom: 30px;
  padding-left: 10px;
  @media screen and (max-width: 640px) {
  }
`;

const DetailTime = styled.span`
  margin-left: 90px;
`;
const Regis = styled.div``;

const RegisBtn = styled.div`
  display: flex;
  width: auto;
  height: 40px;
  margin-left: 10px;
`;

const RegBtn = styled.button`
  background: rgb(255, 151, 0);
  border: none;
  width: 100%;
  height: auto;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 1.3px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;

const RegBtnImg = styled.img`
  vertical-align: sub;
  margin-right: 3px;
`;

const ScheDuleUl = styled.ul`
  display: flex;
  border-top: 1px solid #eee;
  width: auto;
  height: auto;
`;
const ScheDuleLi = styled.li`
  display: inline-block;
  text-align: center;
  width: 150px;
  height: auto;
  padding-bottom: 7px;
  padding-top: 17px;
`;

const ScheDule = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
`;

const ScheInputUl = styled.ul`
  display: flex;
  width: auto;
  height: auto;
  align-items: baseline;
`;

const ScheInputLi = styled.li`
  display: inline-block;
  width: 150px;
  height: 30px;
  font-size: 15px;
  padding-top: 15px;
  text-align: center;
  color: #141b34;
`;

const ScheInput = styled.input`
  width: 130px;
  height: auto;
  font-size: 15px;
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 5px;
  display: flex;
  margin-right: 5px;
`;
const BankBtn = styled.button``;
const Account = styled.button``;
const Phone = styled.button``;
const EmBtn = styled.button`
  font-size: 15px;
  width: 70px;
  height: 30px;
`;
const NoteDiv = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  width: auto;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const NoteInput = styled.input`
  width: 800px;
  height: 30px;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
`;
const NoteBtnBox = styled.div``;
const NoteBtn = styled.button`
  width: 110px;
  height: 35px;
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  border: none;
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  margin: 3px;
`;
const RcBox = styled.div`
  text-align: center;
`;

const RegisCheckButton = styled.button`
  margin: 0 auto;
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
