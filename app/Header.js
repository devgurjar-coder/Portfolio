import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="main">
      <div className="left">
        <h2>Hello</h2>
        <h3>Dev Here</h3>
        <h1>
          <span>FrontEnd</span> developer
        </h1>
        <p>
        "Welcome! I'm a self-taught web developer passionate about crafting intuitive digital experiences. Seeking an internship to learn, grow, and contribute. Explore my portfolio for a glimpse of my dedication to clean code and user-centric design. Let's connect and create something amazing together!"
        </p>
        <a href="https://drive.google.com/file/d/13PhHsCAs9FlGB1MT7RgoO23I_y1eHpAt/view" target="_blank">
  <button>Get My Resume</button>
</a>

      </div>
      <div className="right">
        <img src="mes.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
