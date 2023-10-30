import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const ViewHistory: React.FC = () => {
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
  /* const AddEm: React.FC = () => <Input placeholder="Basic usage" />; */
  return (
    <>
      <Button
        style={{
          fontSize: "15px",
          border: "0px",
        }}
        className="CusBtn"
        type="primary"
        onClick={showModal}
      >
        조회기록
      </Button>
      <Modal
        title="조회기록"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>0 : 번</p>
        <p>0 : 날</p>
        <p>0 : 일</p>
      </Modal>
    </>
  );
};

export default ViewHistory;
