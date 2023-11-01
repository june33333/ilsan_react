import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd";
import { Input, Button } from "antd";
import AddInfo from "./AddInfo";
import AddEm from "./AddEm";
import ViewHistory from "./ViewHistory";
import InTro from "./InTro";
import Header from "./Header";
import AddEmRed from "./AddEmRed";
import ReqMessage from "./ReqMessage";

let total = 1200000;
let today = Math.floor(Math.random() * 101) + 100;
let todayser = Math.floor(Math.random() * 1000) + 1;
let company = 1250;

const Section = () => {
  return (
    <SectionMain>
      <MainH1>사고자 검색</MainH1>
      <MainH3>최상의 검색 조건을 제공하겠습니다</MainH3>
      <Input
        type="text"
        placeholder="예) 이름 검색 = 필수입력"
        className="input"
      />
      <Input type="text" placeholder="예) 출생년도 2자리" className="input" />
      <MainP>검색시 이름과 전화번호는 필수입력 입니다.</MainP>
      <Input
        type="text"
        placeholder="예) 전화번호 01012345678 형식 = 필수입력"
        className="input"
      />
      <CheckButton>조회</CheckButton>
    </SectionMain>
  );
};

const Total = () => {
  return (
    <TotalValue>
      <ValueUl>
        <ValueLi>
          <ValueLink to="#">{total.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>총 등록건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{today.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>오늘등록 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{todayser.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>오늘검색 건수</span>
        </ValueLi>
        <ValueLi>
          <ValueLink to="#">{company.toLocaleString()}</ValueLink>
          <br></br>
          <br></br>
          <span>가입업체수</span>
        </ValueLi>
      </ValueUl>
    </TotalValue>
  );
};

const Check = () => {
  const [inputbank, setInputbank] = useState([""]);
  const [inputaccount, setInputaccount] = useState([""]);
  const [inputphone, setInputphone] = useState([""]);
  const [ReqName, setReqName] = useState("");
  const [ReqBirth, setReqBirth] = useState("");
  const [ReqPhone, setReqPhone] = useState("");
  //
  const [NoneBank, setNoneBank] = useState("");
  const [NoneAccount, setNoneAccount] = useState("");
  const [NoneRegion, setNoneRegion] = useState("");
  const [NoneRegis, setNoneRegis] = useState("");
  // const [inputReqName, setInputReqName] = useState("");
  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    // 가운데 부분을 '*'로 대체
    const maskedPhone = maskPhone(inputPhone);
    setReqPhone(maskedPhone);
  };
  // 전화번호를 가운데 '**'로 가린 문자열로 변환
  const maskPhone = (phone) => {
    const parts = phone.split("-"); // '-'를 기준으로 문자열을 나눕니다
    if (parts.length === 3 && parts[1].length === 4) {
      const middlePart = parts[1];
      const maskedMiddlePart =
        middlePart.substring(0, 1) + "**" + middlePart.substring(3, 4);
      return `${parts[0]}-${maskedMiddlePart}-${parts[2]}`;
    } else {
      // 형식이 맞지 않는 경우, 원래 문자열 그대로 반환
      return phone;
    }
  };
  // const [inputReqBirth, setInputBirth] = useState("");
  // const [inputReqPhone, setInputPhone] = useState("");
  // const [inputReqSubmit, setInputReqSubmit] = useState("");

  // const handleReqNameChange = (e) => {
  //   setReqName(e.target.value);
  // };
  // const handleReqBirthChange = (e) => {
  //   setReqBirth(e.target.value);
  // };
  // const handleReqPhoneChange = (e) => {
  //   setReqPhone(e.target.value);
  // };
  const AddInputBank = () => {
    if (inputbank.length < 5) {
      const newInputsBank = [...inputbank, ""];
      setInputbank(newInputsBank);
    }
  };
  const AddInputAccount = () => {
    if (inputaccount.length < 5) {
      const newInputsAccount = [...inputaccount, ""];
      setInputaccount(newInputsAccount);
    }
  };
  const AddInputPhone = () => {
    if (inputphone.length < 5) {
      const newInputPhone = [...inputphone, ""];
      setInputphone(newInputPhone);
    }
  };

  const RemoveInputBank = (AddBank) => {
    if (inputbank.length > 1) {
      const newInputsBank = [...inputbank];
      newInputsBank.splice(AddBank, 1);
      setInputbank(newInputsBank);
    }
  };
  const RemoveInputAccount = (AddAccount) => {
    if (inputaccount.length > 1) {
      const newInputsaccount = [...inputaccount];
      newInputsaccount.splice(AddAccount, 1);
      setInputaccount(newInputsaccount);
    }
  };
  const RemoveInputPhone = (AddPhone) => {
    if (inputphone.length > 1) {
      const newInputsphone = [...inputphone];
      newInputsphone.splice(AddPhone, 1);
      setInputphone(newInputsphone);
    }
  };
  // const isRequiredInputsEmpty = () => {
  //   return ReqName.trim() === "" || ReqBirth.trim() === "";
  // };
  const ReqSubmit = () => {
    if (
      ReqName.trim() === "" ||
      ReqBirth.trim() === "" ||
      ReqPhone.trim() === "" ||
      NoneBank.trim() === "" ||
      NoneAccount.trim() === "" ||
      NoneRegion.trim() === "" ||
      NoneRegis.trim() === ""
    ) {
      alert("등록 전 선 조회 후 등록바랍니다.");
    }
    if (
      ReqName.trim() === "" ||
      ReqBirth.trim() === "" ||
      ReqPhone.trim() === ""
    ) {
      alert("필수 입력이 입력되지 않았습니다.");
    } else {
      alert("필수 입력이 되었습니다.");
    }

    // 필수 입력이 제대로 입력되었을 때 다음 로직을 실행
  };
  return (
    <CheckForm id="CheckForm">
      <BannerBox1>
        <img src="img/banner01.png"></img>
      </BannerBox1>
      <Chet>
        <ChetBox>확성기 박스 / 실시간 채팅 박스</ChetBox>
        <DetailBox>
          양** 010-****-3333 <DetailTime>검색시간</DetailTime>
        </DetailBox>
      </Chet>
      <Regis>
        <RegisBtn>
          <RegBtn>
            <RegBtnImg src="img/regispen.png"></RegBtnImg>등록하기
          </RegBtn>
        </RegisBtn>
        <ScheDule>
          <ScheDuleUl>
            <ScheDuleLi>이름</ScheDuleLi>
            <ScheDuleLi>생년월일</ScheDuleLi>
            <ScheDuleLi>
              은행명 <Button onClick={AddInputBank}>+</Button>
              {inputbank.length > 1 && (
                <Button onClick={() => RemoveInputBank(0)}>-</Button>
              )}
            </ScheDuleLi>
            <ScheDuleLi>
              계좌번호 <Button onClick={AddInputAccount}>+</Button>
              {inputaccount.length > 1 && (
                <Button onClick={() => RemoveInputAccount(0)}>-</Button>
              )}
            </ScheDuleLi>
            <ScheDuleLi>
              전화번호 <Button onClick={AddInputPhone}>+</Button>
              {inputphone.length > 1 && (
                <Button onClick={() => RemoveInputPhone(Index)}>-</Button>
              )}
            </ScheDuleLi>
            <ScheDuleLi>거주지역</ScheDuleLi>
            <ScheDuleLi>비상연락망</ScheDuleLi>
            <ScheDuleLi>등록일시</ScheDuleLi>
            <ScheDuleLi>등록인</ScheDuleLi>
          </ScheDuleUl>
          <ScheInputUl>
            <ScheInputLi>
              <Input
                className="input"
                placeholder="필수입력"
                value={ReqName}
                onChange={(e) => setReqName(e.target.value)}
              />
            </ScheInputLi>
            <ScheInputLi>
              <Input
                className="input"
                placeholder="필수입력"
                value={ReqBirth}
                onChange={(e) => setReqBirth(e.target.value)}
              />
            </ScheInputLi>
            <ScheInputLi>
              {inputbank.map((input, AddBank) => (
                <Input
                  className="bankinput"
                  key={AddBank}
                  value={NoneBank}
                  onChange={(e) => setNoneBank(e.target.value)}
                />
              ))}
            </ScheInputLi>
            <ScheInputLi>
              {inputaccount.map((input, AddAccount) => (
                <Input
                  className="accountinput"
                  key={AddAccount}
                  value={NoneAccount}
                  onChange={(e) => setNoneAccount(e.target.value)}
                />
              ))}
            </ScheInputLi>
            <ScheInputLi>
              {inputphone.map((input, AddPhone) => (
                <Input
                  type="phone"
                  minlength="5"
                  maxlength="13"
                  className="phoneinput"
                  key={AddPhone}
                  placeholder="필수입력"
                  value={ReqPhone}
                  onChange={(e) => {
                    setReqPhone(e.target.value);
                    handlePhoneChange(e); // 추가 작업을 수행
                  }}
                />
              ))}
            </ScheInputLi>
            <ScheInputLi>
              <Input
                className="input"
                value={NoneRegion}
                onChange={(e) => setNoneRegion(e.target.value)}
              />
            </ScheInputLi>
            <ScheInputLi>
              <AddEmRed />
            </ScheInputLi>
            <ScheInputLi>
              <Input
                className="input"
                value={NoneRegis}
                onChange={(e) => setNoneRegis(e.target.value)}
              />
            </ScheInputLi>
            <ScheInputLi>히츠블루</ScheInputLi>
          </ScheInputUl>
        </ScheDule>
        <NoteDiv>
          <Input
            type="text"
            placeholder="사고내용을 입력해주세요"
            className="input"
          />
          <NoteBtnBox>
            <AddInfo className="button" />
            <AddEm />
            <ViewHistory />
          </NoteBtnBox>
        </NoteDiv>
        <RcBox>
          {/* <ReqMessage onClick={ReqSubmit} /> */}
          <RegisCheckButton onClick={ReqSubmit}>등록</RegisCheckButton>
        </RcBox>
      </Regis>
      <BannerBox2>
        <img src="img/banner02.png"></img>
      </BannerBox2>
    </CheckForm>
  );
};

const Footer = () => {
  return (
    <FooterForm>
      <p>COPYRIGHT © 2023 firstclub ALL RIGHTS RESERVED</p>
    </FooterForm>
  );
};

const Index = () => {
  return (
    <>
      <InTro />
      <Header />
      <Section />
      <Total />
      <Check />
      <Footer />
    </>
  );
};

const SectionMain = styled.div`
  .input {
    width: 700px;
    height: 60px;
    display: flex;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    border-radius: 7px;
    font-size: 18px;
    border-color: #eee;
    background-image: url(img/search.png);
    background-repeat: no-repeat;
    background-position-x: 650px;
    background-position-y: center;
    @media screen and (max-width: 640px) {
      width: 300px;
      margin-top: 30px;
      font-size: 13px;
    }
  }
  padding-top: 140px;
  background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
  text-align: center;
  width: auto;
  height: 700px;
  @media screen and (max-width: 640px) {
    padding-top: 50px;
    height: 580px;
  }
`;
const MainH1 = styled.h1`
  padding-top: 100px;
  color: #fff;
  font-size: 65px;
  @media screen and (max-width: 640px) {
    font-size: 38px;
  }
`;
const MainH3 = styled.h3`
  padding-top: 10px;
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 15px;
  }
`;

const CheckButton = styled.button`
  margin-top: 38px;
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
  @media screen and (max-width: 640px) {
    width: 100px;
    height: 38px;
  }
`;
const MainP = styled.p`
  color: #fff;
  margin-top: 15px;
  margin-bottom: -30px;
  @media screen and (max-width: 640px) {
    margin-bottom: -20px;
  }
`;
const TotalValue = styled.div`
  margin-top: 35px;
  margin-bottom: -50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    margin-bottom: 50px;
  }
`;

const ValueUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;
const ValueLi = styled.li`
  padding-top: 50px;
  margin-left: 10px;
  width: 300px;
  height: 130px;
  text-align: center;
  border: 2px solid skyblue;
  border-radius: 17px;
  @media screen and (max-width: 640px) {
    width: auto;
    height: 100px;
    padding-top: 10px;
  }
`;

const ValueLink = styled.a`
  font-size: 55px;
  @media screen and (max-width: 640px) {
    font-size: 25px;
  }
`;
const BannerBox1 = styled.div`
  margin-top: 35px;
  margin-right: 25px;
`;
const BannerBox2 = styled.div`
  margin-top: 35px;
  margin-left: 25px;
`;
const CheckForm = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
`;
const Chet = styled.div`
  width: auto;
  height: auto;
`;
const ChetBox = styled.div`
  width: 300px;
  border: 1px solid #eee;
  height: 400px;
  text-align: center;
  background: #eee;
  line-height: 400px;
`;
const DetailBox = styled.div`
  width: 290px;
  border: 1px solid #eee;
  height: 370px;
  margin-top: 5px;
  text-align: center;
  background: #eee;
  display: flex;
  align-items: end;
  padding-bottom: 30px;
  padding-left: 10px;
  @media screen and (max-width: 640px) {
  }
`;

const DetailTime = styled.span`
  margin-left: 90px;
`;
const Regis = styled.div``;

const RegisBtn = styled.div`
  display: flex;
  width: auto;
  height: 40px;
  margin-left: 10px;
`;

const RegBtn = styled.button`
  background: rgb(255, 151, 0);
  border: none;
  width: 100%;
  height: auto;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 1.3px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;

const RegBtnImg = styled.img`
  vertical-align: sub;
  margin-right: 3px;
`;

const ScheDuleUl = styled.ul`
  display: flex;
  border-top: 1px solid #eee;
  width: auto;
  height: auto;
`;
const ScheDuleLi = styled.li`
  Button {
    padding: 0px 0px;
    height: 0px;
    width: 25px;
    height: 25px;
    vertical-align: top;
    margin-top: -3px;
  }
  display: inline-block;
  text-align: center;
  width: 150px;
  height: auto;
  padding-bottom: 7px;
  padding-top: 17px;
`;

const ScheDule = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
`;

const ScheInputUl = styled.ul`
  display: flex;
  width: auto;
  height: auto;
  align-items: baseline;
`;

const ScheInputLi = styled.li`
  .input {
    width: 145px;
    height: auto;
    font-size: 15px;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    display: flex;
    margin-right: 5px;
  }
  .bankinput {
    width: 145px;
    height: auto;
    font-size: 15px;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    display: flex;
    margin-right: 5px;
    margin-top: 10px;
  }
  .accountinput {
    width: 145px;
    height: auto;
    font-size: 15px;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    display: flex;
    margin-right: 5px;
    margin-top: 10px;
  }
  .phoneinput {
    width: 145px;
    height: auto;
    font-size: 15px;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 5px;
    display: flex;
    margin-right: 5px;
    margin-top: 10px;
  }
  display: inline-block;
  width: 150px;
  height: auto;
  font-size: 15px;
  padding-top: 5px;
  text-align: center;
  color: #141b34;
`;

const NoteDiv = styled.div`
  .input {
    width: 830px;
    height: 50px;
    font-size: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
  }
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  width: auto;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const NoteBtnBox = styled.div`
  button {
    margin: 3px;
  }
`;
const RcBox = styled.div`
  text-align: center;
`;

const RegisCheckButton = styled.button`
  margin: 0 auto;
  margin-top: 38px;
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
const FooterForm = styled.div`
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 130px;
  background: #eee;
  font-size: 15px;
  color: #888;
  text-align: center;
  line-height: 130px;
`;

export default Index;
