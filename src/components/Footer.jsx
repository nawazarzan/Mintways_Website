import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <p>
            At MintWays, we possess expertise in various technologies which helps us
            serve our clients with a high degree of accountability. We understand
            the needs of our clients’ business, and have developed and adopted robust
            processes to give a fillip to their growth. Our domain experience and
            technological expertise has resulted in innumerable tangible benefits for
            our clients.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-middle">
          <h3>COMPANY</h3>

          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            <ul>
              <li>Germany</li>
              <li><Link to="/privacy">Privacy Notice</Link></li>
            </ul>
          </div>

          <p className="copyright">
            © 2025 Mintways Technologies
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>SOCIAL</h3>

          <ul>
  <li>
    <a
      href="https://www.linkedin.com/company/mintways-technlogies-private-limited"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  </li>

  <li>
    <a
      href="https://www.facebook.com/profile.php?id=100094526083015"
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
  </li>

  <li>
    <a
      href="https://youtube.com/@mintways?si=U78cM0pIONVvJ-MK"
      target="_blank"
      rel="noopener noreferrer"
    >
      Youtube
    </a>
  </li>
</ul>
        </div>

      </div>

    </footer>
  );
}

export default Footer;