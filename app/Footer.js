import React from 'react';
import './Footer.css';
import { BiPhoneCall } from 'react-icons/bi';

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="link">
        <a href="https://www.linkedin.com/in/dev-gurjar63" target="_blank">
          <img src="linkdin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/devgurjar-coder" target="_blank">
          <img src="github.png" alt="GitHub" />
        </a>
        <a href="https://twitter.com/@devgurjar_63" target="_blank">
          <img src="twitter.png" alt="Twitter" />
        </a>
        <a href="https://mail.google.com" target="_blank">
          <img src="Gmail.webp" alt="Gmail" />
        </a>
      </div>
      <div className="number">
        <BiPhoneCall />
        <p>6376524316</p>
      </div>
    </div>
  );
};

export default Footer;
