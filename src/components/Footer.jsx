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
            <a href="https://t.me/Patii34" target="_blank">
              Telegram
            </a>
          </p>
        </div>

        <div className="link">
          <a href="https://x.com/coinpati?s=08" target="_blank">
            <FaXTwitter className="icon" />
          </a>
          <p>&nbsp;</p> {}
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
