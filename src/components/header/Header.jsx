import React from "react";
import "./Header.css";

const Header = () => {
  // const [menu, setMenu] = useState();
  return (
    <navbar>
      <div className="inner">
        <a href="/" className="logo">
          <img
            src="http://localhost:3000/image/logo.png"
            alt="WRU DOING CHRISMAS"
          />
        </a>

        <div className="sub-menu">
          <ul className="menu">
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/">Customer Service</a>
            </li>
          </ul>
        </div>

        <div className="main-menu">
          <div className="main__name">
            <a href="/family">FAMILY</a>
          </div>
          <div className="main__name">
            <a href="/couple">COUPLE</a>
          </div>
          <div className="main__name">
            <a href="/single">SINGLE</a>
          </div>
          <div className="main__name">
            <a href="/parents">PARENTS</a>
          </div>
          <div className="main__name red">
            <a href="/posting">ADD POSTING</a>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
