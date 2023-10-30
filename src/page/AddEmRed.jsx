import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AddEmRed: React.FC = () => {
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
  const AddEmRed: React.FC = () => <Input placeholder="Basic usage" />;
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
        danger
      >
        추가 +
      </Button>
      <Modal
        title="비상연락망 조회"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input style={{ margin: "3px 0" }} placeholder="이름" />
        <Input style={{ margin: "3px 0" }} placeholder="연락처" />
        <Input style={{ margin: "3px 0" }} placeholder="관계" />
      </Modal>
    </>
  );
};

export default AddEmRed;
