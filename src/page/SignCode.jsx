import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <h1>
        <a href="/">
          <LogoImg src="img/logo.png" alt="Logo" />
          FirstClub
        </a>
      </h1>
    </ContainerHeader>
  );
};

const Section = () => {
  const [inputSignCode, setInputSignCode] = useState("");
  const [isOk, setIsOk] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputSignCode(value);
  };
  const handleOkClick = () => {
    if (inputSignCode === "3333") {
      setIsOk(true);
    } else {
      setIsOk(false);
      alert("가입코드가 틀립니다. 텔레그램으로 문의주세요.");
    }
  };
  return (
    <BoxSection>
      {!isOk && (
        <>
          <div className="SignCode">
            <h3>가입코드는 텔레그램 : ROYALCLUB8 으로 문의주세요.</h3>
            <div className="login_form">
              <div className="input-enter">
                <SignCodeInput
                  type="number"
                  minLength="5"
                  maxLength="13"
                  title="가입코드"
                  placeholder="가입코드"
                  onChange={handleInputChange}
                />
                <IdSpan>아이디가 올바르지 않습니다.</IdSpan>
              </div>
            </div>
            <BtnBox>
              <ClearButton onClick={handleOkClick}>확인</ClearButton>

              <CancelButton>취소</CancelButton>
            </BtnBox>
          </div>
        </>
      )}
      {isOk && (
        <div className="joinform">
          <div className="inputenter">
            <JoinInput
              type="text"
              minlength="5"
              maxlength="13"
              title="아이디"
              placeholder="아이디를 입력해주세요"
            ></JoinInput>
            <AlertId>아이디를 입력해주세요.</AlertId>
          </div>
          <div className="inputenter">
            <JoinInput
              type="password"
              minlength="5"
              maxlength="13"
              title="패스워드"
              placeholder="비밀번호를 입력해주세요"
            ></JoinInput>
          </div>
          <AlertPw>비밀번호를 입력해주세요.</AlertPw>
          <div className="inputenter">
            <JoinInput
              type="password"
              minlength="5"
              maxlength="13"
              title="패스워드"
              placeholder="비밀번호를 재 입력해주세요"
            ></JoinInput>
            <AlertRepw>비밀번호를 다시한번 입력해주세요.</AlertRepw>
          </div>
          <div className="inputenter">
            <JoinInput
              type="text"
              minlength="5"
              maxlength="13"
              title="닉네임"
              placeholder="닉네임을 입력해주세요"
            ></JoinInput>
            <AlertName>닉네임을 입력해주세요.</AlertName>
          </div>
          <div className="inputenter">
            <JoinInput
              type="telegram"
              minlength="5"
              maxlength="13"
              title="패스워드"
              placeholder="텔레그램 ID를 입력해주세요"
            ></JoinInput>
            <AlertTel>텔레그램 ID를 입력해주세요.</AlertTel>
          </div>
          <SubmitClear>회원가입</SubmitClear>
        </div>
      )}
    </BoxSection>
  );
};

const LoginForm = () => {
  <Form>
    <h1>First Clubdddddddd</h1>
  </Form>;
};

const SignCode = () => {
  return (
    <>
      <Container>
        <Header />
        <Section />
        <LoginForm />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LogoImg = styled.img`
  vertical-align: sub;
  margin-right: 10px;
`;
const BtnBox = styled.div`
  display: flex;
  width: 314px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const ContainerHeader = styled.header`
  padding-bottom: 2%;
`;

const BoxSection = styled.section`
  border: 1px solid #eee;
  padding: 30px;
`;

const SignCodeInput = styled.input`
  height: 46px;
  font-size: 15px;
  padding-left: 15px;
  width: 293px;
  background: url(../img/code.svg) center right no-repeat;
  background-size: 30px;
  background-position-x: 260px;
  display: flex;
  text-align: center;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 38px;
`;

const IdSpan = styled.span`
  display: none;
`;

const ClearButton = styled.button`
  width: 150px;
  height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border: 0px;
  letter-spacing: 1px;
  font-size: 18px;
  border-radius: 5px;
  background-color: #4dccc6;
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const CancelButton = styled.button`
  width: 150px;
  height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border: 0px;
  letter-spacing: 1px;
  font-size: 18px;
  border-radius: 5px;
  background: linear-gradient(
    0deg,
    rgba(96, 9, 240, 1) 0%,
    rgba(129, 5, 240, 1) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const JoinInput = styled.input`
  display: flex;
  margin: 0 auto;
  font-size: 15px;
  padding-left: 15px;
  width: 293px;
  height: 46px;
  border: 1px solid #2a2a2a;
`;

const AlertId = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: blue;
`;
const AlertPw = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: blue;
`;
const AlertRepw = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: blue;
`;
const AlertName = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: blue;
`;
const AlertTel = styled.span`
  margin-top: 5px;
  font-size: 13px;
  padding-left: 10px;
  color: blue;
`;
const SubmitClear = styled.button`
  width: 310px;
  height: 46px;
  text-align: center;
  margin-top: 15px;
  background-color: #1348d5;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  border: 0px;
  letter-spacing: 1px;
`;

const Form = styled.div``;
export default SignCode;
