import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { HashLink } from "react-router-hash-link";
import CusTomer from "./CusTomer";
import { BrowserRouter, Link } from "react-router-dom";

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

const HeaderBg = styled.div`
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  margin-top: 40px;
  z-index: 1000;
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

export default Header;
