import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Infomadal from "./Infomodal";
import UserAvatar from "./Avatar";
import MessgeBox from "./MessgeBox";

let point = 999999;

const InTro = () => {
  return (
    <IntroInfo>
      <IntroUl></IntroUl>
      <UserUl>
        <UserLi>
          <LinkIntro to="#">
            <MessgeBox />
            <UserAvatar />
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

const IntroInfo = styled.div`
  width: 100%;
  background: #23303d;
  height: 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
`;

const LinkIntro = styled.a`
  color: #fff;
  font-size: 15px;
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
  padding-right: 50px;
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

export default InTro;
