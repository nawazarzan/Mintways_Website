import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <p className="footer-text">© 2025 Mintways Technologies</p>

      <div className="footer-icons">

        <a
          href="https://www.linkedin.com/company/mintways-technlogies-private-limited/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://facebook.com/mintways"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com/mintways"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com/@mintways?si=U78cM0pIONVvJ-MK"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaYoutube />
        </a>

      </div>

    </footer>
  );
}

export default Footer;
