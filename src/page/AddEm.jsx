import React, { useState } from "react";
import { Button, Modal, Input, Alert, Space } from "antd";
import styled from "styled-components";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import AlertPoint from "./Alertpoint";

const AlertPointt = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Accept
          </Button>
          <Button size="small" danger ghost>
            Decline
          </Button>
        </Space>
      }
      closable
    />
  </Space>
);

const AddEm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenn, setIsModalOpenn] = useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const showModal = () => {
    if (window.confirm("비상연락망 조회 시 1000포인트가 차감됩니다.")) {
      setIsModalOpen(true);
    } else {
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const AddEm: React.FC = () => <Input placeholder="Basic usage" />;
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
        비상연락망 조회
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

export default AddEm;
