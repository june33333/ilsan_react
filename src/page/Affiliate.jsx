import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InTro from "./InTro";
import Header from "./Header";

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
      <InTro />
      <Header />
      <Check />
      <Footer />
    </>
  );
};

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
