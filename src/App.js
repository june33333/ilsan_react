import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Body = styled.body`
  height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;
`
const ContainerHeader = styled.header `
  
`
const span = styled.span`
  display:none;
`

const SubmitButton = styled.button`
  width:150px; height:50px; text-align:center;
  color:#fff; cursor:pointer; border:0px;
  letter-spacing:1px; font-size:18px; border-radius: 5px;
  background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
`
const SignupButton = styled.button`
  width:150px; height:50px; text-align:center;
  color:#fff; cursor:pointer; border:0px;
  letter-spacing:1px; font-size:18px; border-radius: 5px;
  background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
`
function body(){
  return
}

function Header(){
  return <ContainerHeader>
    <h1><a href="#"><img src="img/logo.png" />FirstClub</a></h1>
  </ContainerHeader>
}
function Section(){
  return <section>
    <div className="login_form">
      <div className="input-enter">
          <input type="text" minlength="5" maxlength="13" title="아이디" placeholder="User ID" />
          <span className="miss_id">아이디가 올바르지 않습니다.</span>
      </div>
      <div className="input-enter">
          <input type="password" minlength="5" maxlength="13" title="패스워드" placeholder="Password" />
          <span className="miss_password">비밀번호가 올바르지 않습니다.</span>
          <span className="not_info">정보가 올바르지 않습니다.</span>
      </div>
    </div>
    <div className="btnbox">
        <SubmitButton>로그인</SubmitButton>
        <SignupButton>회원가입</SignupButton>
    </div>
  </section>
}
function App() {
  return (
    <Body>
      <Header></Header>
      <Section></Section>
    </Body>
  );
}

export default App;
