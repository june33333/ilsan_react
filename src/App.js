import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
    <h1><a href="#"><img src="img/logo.png" />FirstClub</a></h1>
  </header>
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
        <button type="submit">로그인test</button>
        <button type="sign-up">회원가입</button>
    </div>
  </section>
}
function App() {
  return (
    <div>
      <Header></Header>
      <Section></Section>
    </div>
  );
}

export default App;
