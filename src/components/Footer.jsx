import "./Footer.css";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <h1>Links</h1>
      </div>
      <div className="footer-bottom">
        <div className="link">
          <FaTelegram className="icon" />
          <p>
            <a href="">Telegram</a>
          </p>
        </div>

        <div className="link">
          <p>
            <a href="">
              <FaXTwitter className="icon" />
            </a>
          </p>
        </div>

        <div className="link">
          <FaYoutube className="icon" />
          <p>
            <a href="">Youtube</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
