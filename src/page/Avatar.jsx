import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Badge, Space } from "antd";
import styled from "styled-components";

const UserAvatar: React.FC = () => (
  <Space size={24}>
    <Badge
      count={6}
      style={{
        marginLeft: "0px",
        lineHeigh: "0px",
        transform: "translate(67px, -5px)",
      }}
    ></Badge>
  </Space>
);

export default UserAvatar;
