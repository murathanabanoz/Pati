import React from "react";
import "./Header.css";
import Pati from "../assets/pati-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Pati} alt="Pati" className="logo" />
        <h1 className="site-title">PATİ</h1>
      </div>

      <nav className="header-right">
        <a
          href="https://pump.fun/coin/Brg2B6XFDHn1AEMuaaSP9Qj8xazjVibp7GqzpwXjpump"
          className="nav-link"
          target="_blank"
        >
          Satın Al
        </a>
        <a href="#how-to-buy" className="nav-link">
          How to Buy?
        </a>
        <a href="#" className="nav-link">
          Youtube
        </a>
      </nav>
    </header>
  );
};

export default Header;
