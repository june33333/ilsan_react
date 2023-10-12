import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntroInfo>
      <ul>
        <li>
          <Link to="#">퍼스트클럽을 시작페이지로</Link>
        </li>
        <li>
          <Link to="#">즐겨찾기 추가</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="#">
            퍼스트클럽은 지금까지도 무료 앞으로도 100% 무료 정보 제공 사이트
            입니다 퍼스트클럽은 분점이 없습니다 먹튀
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link top="#">코코몽이님</Link>
        </li>
        <li>
          <Link top="#">
            쪽지 : <span>0</span>통
          </Link>
        </li>
        <li>
          <Link top="#">회원정보</Link>
        </li>
        <li>
          <Link top="#">로그아웃</Link>
        </li>
      </ul>
    </IntroInfo>
  );
};

const Header = () => {
  return <HeaderNav></HeaderNav>;
};

const Section = () => {
  return <SectionMain></SectionMain>;
};

const Total = () => {
  return <TotalValue></TotalValue>;
};

const Footer = () => {
  return <FooterForm></FooterForm>;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderNav = styled.div`
  display: block;
`;

const SectionMain = styled.div`
  display: block;
`;

const TotalValue = styled.div`
  display: block;
`;

const FooterForm = styled.div`
  display: block;
`;

export default Index;
