import React from "react";
import { Button, message, Space } from "antd";
import styled from "styled-components";
import Index from "./Index";

const ReqMessage: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "사용가능한 닉네임입니다.",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "필수입력이 입력되지 않았습니다.",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };

  return (
    <>
      {contextHolder}
      <CheckBox>
        <Button className="button" type="primary" onClick={error}>
          등록
        </Button>
      </CheckBox>

      {/* <Button type="primary" onClick={success}>
          중복체크
        </Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button> */}
    </>
  );
};

const CheckBox = styled.div`
  button {
    margin-top: 38px;
    width: 150px;
    height: 50px;
    text-align: center;
    color: #fff;
    font-size: 19px;
    border: 0px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  }
`;

export default ReqMessage;
