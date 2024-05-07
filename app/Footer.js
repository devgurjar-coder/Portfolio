import React from 'react';
import './Footer.css';
import { BiPhoneCall } from 'react-icons/bi';

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="links-container"> {/* Corrected class name */}
        <a href="https://www.linkedin.com/in/dev-gurjar63" target="_blank">
          <img src="linkdin.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/@devgurjar_63" target="_blank">
          <img src="twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/editshifters?utm_source=qr&igsh=c3Q1bWo5YTJwd" target="_blank">
          <img src="instagram-7411557_960_720.webp" alt="" />
        </a>
        <a href="mailto:gurjarsunny420@gmail.com" target="_blank">
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
