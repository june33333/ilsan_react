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
      <h3>가입코드는 텔레그램 : ROYALCLUB8 으로 문의주세요.</h3>
      <div className="login_form">
        <div className="input-enter">
          <SignCodeInput
            type="text"
            minLength="5"
            maxLength="13"
            title="가입코드"
            placeholder="가입코드"
          />
          <IdSpan>아이디가 올바르지 않습니다.</IdSpan>
        </div>
      </div>
      <BtnBox>
        <ClearButton>확인</ClearButton>
        <CancelButton>취소</CancelButton>
      </BtnBox>
    </BoxSection>
  );
};

const SignCode = () => {
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

export default SignCode;
