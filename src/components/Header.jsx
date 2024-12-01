import React from "react";
import "./Header.css";
import Pati from "../assets/Pati-image.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Pati} alt="Pati" className="logo" />
        <h1 className="site-title">Pati</h1>
      </div>

      <nav className="header-right">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#how-to-buy" className="nav-link">
          How to Buy?
        </a>
      </nav>
    </header>
  );
};

export default Header;
