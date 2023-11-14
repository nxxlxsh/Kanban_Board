import React from "react";
import localImage from './img.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // To get the current year

  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          href="https://drive.google.com/file/d/1B9g_XCkn8t-YzJmdeZTi9689lmjZkhFX/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
        src={localImage}
        alt="Neelesh Kumar"
        className="profile-pic"
          />
        </a>
      </div>
      <div className="footer-right">
        <div className="information-section">
          <p>Neelesh Kumar</p>
          <p>22104064 IIT Kanpur</p>
          <p><a href="https://github.com/nxxlxsh" className="footer-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/neeleshk19/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=in" className="footer-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:neeleshk22@iitk.ac.in" id="emailLink" className="footer-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </p>
          <p className="copyright-section">
            © {currentYear} Neelesh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
