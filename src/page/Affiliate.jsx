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
    </HeaderBg>
  );
};

const Check = () => {
  return (
    <CheckForm>
      <BannerBox1>
        <img src="img/banner01.png"></img>
      </BannerBox1>
      <Chet>
        <ChetBox>확성기 박스 / 실시간 채팅 박스</ChetBox>
        <DetailBox>
          양** 010-****-3333 <DetailTime>검색시간</DetailTime>
        </DetailBox>
      </Chet>
      <AffiliateBox>
        <BannerUl1>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
        </BannerUl1>
        <BannerUl2>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
        </BannerUl2>
        <BannerUl3>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
          <BannerLi>
            <img src="img/banner03.png"></img>
          </BannerLi>
        </BannerUl3>
      </AffiliateBox>
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

const Affiliate = () => {
  return (
    <>
      <Intro />
      <Header />
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
`;

const LinkLogo = styled(Link)`
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

const BannerBox1 = styled.div`
  margin-top: 35px;
  margin-right: 25px;
`;
const BannerBox2 = styled.div`
  margin-top: 35px;
  margin-left: 25px;
`;
const CheckForm = styled.div`
  padding-top: 170px;
  display: flex;
  justify-content: center;
`;

const AffiliateBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
`;

const BannerUl1 = styled.ul``;
const BannerUl2 = styled.ul``;
const BannerUl3 = styled.ul``;
const BannerLi = styled.li`
  padding: 5px;
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
`;

const DetailTime = styled.span`
  margin-left: 90px;
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

export default Affiliate;
