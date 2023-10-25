import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const CusTomer: React.FC = () => {
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
    <>
      <Button
        style={{
          background: "none",
          color: "#000",
          fontSize: "20px",
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
        고객센터
      </Button>
      <Modal
        title="관리자 텔레그램"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>관리자 텔레그램 : FristClub@으로 연락주세요.</p>
      </Modal>
    </>
  );
};

export default CusTomer;
