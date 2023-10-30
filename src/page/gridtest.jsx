import React from "react";
import styled from "styled-components";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class App extends React.Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                섹션 1
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                섹션 2
              </Link>
            </li>
          </ul>
        </nav>
        <Element name="section1" className="element">
          섹션 1 내용
        </Element>
        <Element name="section2" className="element">
          섹션 2 내용
        </Element>
      </div>
    );
  }
}
export default App;
