import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <h1>
        <a href="/">
          <img src="img/logo.png" alt="Logo" />
          FirstClub
        </a>
      </h1>
    </ContainerHeader>
  );
};

const Section = () => {
  return (
    <BoxSection>
      <div className="login_form">
        <div className="input-enter">
          <LoginidInput
            type="text"
            minLength="5"
            maxLength="13"
            title="아이디"
            placeholder="User ID"
          />
          <IdSpan>아이디가 올바르지 않습니다.</IdSpan>
        </div>
        <div className="input-enter">
          <LoginpwInput
            type="password"
            minLength="5"
            maxLength="13"
            title="패스워드"
            placeholder="Password"
          />
          <PwSpan>비밀번호가 올바르지 않습니다.</PwSpan>
          <InfoSpan>정보가 올바르지 않습니다.</InfoSpan>
        </div>
      </div>
      <BtnBox>
        <SubmitButton>로그인</SubmitButton>
        <SignupButton>회원가입</SignupButton>
      </BtnBox>
    </BoxSection>
  );
};

const Login = () => {
  return (
    <>
      <Container>
        <Header />
        <Section />
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

const BtnBox = styled.div`
  display: flex;
  width: 314px;
  justify-content: space-between;
  align-items: center;
`;

const ContainerHeader = styled.header`
  padding-bottom: 2%;
`;

const BoxSection = styled.section`
  border: 1px solid #eee;
  padding: 30px;
`;

const LoginidInput = styled.input`
  height: 46px;
  margin-bottom: 28px;
  font-size: 15px;
  padding-left: 15px;
  width: 293px;
  background: url("../img/id.svg") center right no-repeat;
  background-size: 30px;
  background-position-x: 260px;
`;

const LoginpwInput = styled.input`
  height: 46px;
  margin-bottom: 28px;
  font-size: 15px;
  padding-left: 15px;
  width: 293px;
  background: url("../img/lock.svg") center right no-repeat;
  background-size: 30px;
  background-position-x: 260px;
`;

const IdSpan = styled.span`
  display: none;
`;

const PwSpan = styled.span`
  display: none;
`;

const InfoSpan = styled.span`
  display: none;
`;

const SubmitButton = styled.button`
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
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const SignupButton = styled.button`
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

export default Login;
