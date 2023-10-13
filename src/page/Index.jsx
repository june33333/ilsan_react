import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/mainlogo.png";

function LinkLogo() {}

const Intro = () => {
  return (
    <IntroInfo>
      <IntroUl>
        <HomeLi>
          <LinkIntro to="#">퍼스트클럽을 시작페이지로</LinkIntro>
        </HomeLi>
        <IntroLi>
          <LinkIntro to="#">즐겨찾기 추가</LinkIntro>
        </IntroLi>
      </IntroUl>
      <YellowUl>
        <IntroLi>
          <YellowLinkIntro to="#">
            퍼스트클럽은 지금까지도 무료 앞으로도 100% 무료 정보 제공 사이트
            입니다 퍼스트클럽은 분점이 없습니다 먹튀
          </YellowLinkIntro>
        </IntroLi>
      </YellowUl>
      <UserUl>
        <UserLi>
          <LinkIntro to="#">코코몽이님</LinkIntro>
        </UserLi>
        <UserLi>
          <LinkIntro to="#">
            쪽지 : <IntroSpan>0</IntroSpan> 통
          </LinkIntro>
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
            <img
              src={process.env.PUBLIC_URL + "/img/mainlogo.png"}
              alt="로고"
            />
          </LinkLogo>
        </li>
      </LogoUl>
      <TelUl>ddd</TelUl>
      <CenterUl>
        <li>
          <Link to="#">신고/협박</Link>
        </li>
        <li>
          <Link to="#">게임</Link>
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
      <MainP>검색시 이름과 전화번호는 필수입력 입니다.</MainP>
      <MainInput type="text" placeholder="예) 출생년도 2자리"></MainInput>
      <MainInput
        type="text"
        placeholder="예) 전화번호 01012345678 형식 = 필수입력"
      ></MainInput>
    </SectionMain>
  );
};

const Total = () => {
  return (
    <TotalValue>
      <ValueUl>
        <ValueLi>
          <ValueLink to="#">890,340</ValueLink>
          <br></br>
          <br></br>
          <span>총 등록건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">150</ValueLink>
          <br></br>
          <br></br>
          <span>오늘등록 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">23,206</ValueLink>
          <br></br>
          <br></br>
          <span>오늘검색 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">8,913</ValueLink>
          <br></br>
          <br></br>
          <span>가입업체수</span>
        </ValueLi>
      </ValueUl>
    </TotalValue>
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

const YellowLinkIntro = styled.a`
  color: Yellow;
  font-size: 13px;
`;

const IntroUl = styled.ul`
  display: inline-flex;
  align-items: center;
  padding-left: 5%;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const YellowUl = styled.ul`
  display: inline-flex;
  align-items: center;
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

const IntroSpan = styled.span`
  color: red;
`;

const HeaderNav = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoUl = styled.div`
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
  background-image: url();
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
  border: 3px solid #f0f8ff;
  border-radius: 17px;
`;

const ValueLink = styled.a`
  font-size: 55px;
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
