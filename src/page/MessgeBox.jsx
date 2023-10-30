import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Avatar from "antd";

const MessgeBox: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <LineSpan>
      <Button
        style={{
          background: "none",
          color: "#fff",
          fontSize: "15px",
          boxShadow: "none",
          height: "0px",
          padding: "0px",
          border: "0px",
          borderRadius: "0px",
        }}
        className="CusBtn"
        type="primary"
        onClick={showModal}
      >
        코코몽이님
      </Button>
      <Modal
        title="쪽지함"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          <span>23-10-27</span>관리자 메세지 : 안녕하세요 FristClub입니다.
        </p>
        <hr />
        <p>
          <span>23-10-27</span>관리자 메세지 : 안녕하세요 FristClub입니다.{" "}
        </p>
        <hr />
        <p>
          <span>23-10-27</span>관리자 메세지 : 안녕하세요 FristClub입니다.{" "}
        </p>
        <hr />
        <p>
          <span>23-10-27</span>관리자 메세지 : 안녕하세요 FristClub입니다.{" "}
        </p>
        <hr />
        <p>
          <span>23-10-27</span>관리자 메세지 : 안녕하세요 FristClub입니다.{" "}
        </p>
        <hr />
      </Modal>
    </LineSpan>
  );
};
const LineSpan = styled.div`
  span {
    overflow: hidden;
    vertical-align: sub;
  }
  display: flex;
`;
export default MessgeBox;
