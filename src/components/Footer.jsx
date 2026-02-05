import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <p className="footer-text">© 2025 Mintways Technologies</p>

      <div className="footer-icons">
        <div className="icon"><FaLinkedinIn /></div>
        <div className="icon"><FaFacebookF /></div>
        <div className="icon"><FaInstagram /></div>
        <div className="icon"><FaYoutube /></div>
      </div>

    </footer>
  );
}

export default Footer;
