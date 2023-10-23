import React, { Component } from "react";
import styled from "styled-components";
import "antd/dist/antd";
import { InputNumber } from "antd";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSignCode: "", // 입력값을 관리하는 상태
    };
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    // 입력값에서 숫자가 아닌 문자를 제거하여 상태를 업데이트합니다.
    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
    this.setState({ inputSignCode: sanitizedValue });
  };

  render() {
    const { inputSignCode } = this.state;

    return (
      <input
        style={{
          display: "flex",
          width: "293px",
          height: "46px",
          textAlign: "center",
          margin: "0 auto",
          background: "url(../img/code.svg) center right no-repeat",
          backgroundSize: "30px",
          backgroundPositionX: "230px",
          marginTop: "19px",
          marginBottom: "30px",
          lineHeight: "46px",
          borderRadius: "7px",
        }}
        type="text"
        value={inputSignCode}
        minLength="5"
        maxLength="13"
        title="가입코드"
        placeholder="가입코드"
        onChange={this.handleInputChange}
      />
    );
  }
}

const InputComeCode = styled(InputNumber)``;
/*
const StyledInputNumber = styled(InputNumber)`
  display: flex;
  width: 293px;
  height: 46px;
  text-align: center;
  margin: 0 auto;
  background: url(../img/code.svg) center right no-repeat;
  background-size: 30px;
  background-position-x: 230px;
  margin-top: 19px;
  margin-bottom: 30px;
  line-height: 46px;
`;
*/

export default MyComponent;
