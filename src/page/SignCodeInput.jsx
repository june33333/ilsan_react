import React, { Component } from "react";
import { Input } from "antd";

class InputApp extends Component {
  handleInputChange = (e) => {
    const { value } = e.target;
    // 숫자만 남기고 모든 한글을 제거합니다.
    const cleanedValue = value.replace(/[^0-9]/g, "");
    this.props.onChange(cleanedValue);
  };

  render() {
    return (
      <Input
        placeholder="숫자를 입력하세요"
        value={this.props.value}
        onChange={this.handleInputChange}
      />
    );
  }
}

class InputApp extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (value) => {
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <div>
        <InputApp
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <p>입력된 값: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default InputApp;
