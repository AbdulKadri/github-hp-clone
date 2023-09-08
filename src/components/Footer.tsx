import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faDiscord,
  faTiktok,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div>© 2023 GitHub, Inc.</div>
          <a href="#">Terms</a>
          <a href="#">Privacy (Updated 08/2022)</a>
          <a href="#">Sitemap</a>
          <a href="#">What is Git?</a>
        </div>
        <div className="footer-right">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} size="xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} size="xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTiktok} size="xl" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
