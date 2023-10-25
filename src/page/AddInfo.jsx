import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AddInfo: React.FC = () => {
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
          color: "#FFF",
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
        추가정보등록
      </Button>
      <Modal
        title="추가정보등록"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input style={{ margin: "3px 0" }} placeholder="은행명" />
        <Input style={{ margin: "3px 0" }} placeholder="계좌번호" />
        <Input style={{ margin: "3px 0" }} placeholder="전화번호" />
      </Modal>
    </>
  );
};

export default AddInfo;
