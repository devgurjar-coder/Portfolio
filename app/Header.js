import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main">
      <div className="left">
        <h2>Hello,</h2>
        <h3>I'm a Dev Gurjar</h3>
        {/* <h1 className="hero-text">
          <span>Short-Form</span> Video Editor
        </h1> */}
        <p>
          Your go-to freelance short-form video editor! I may be new to the scene,
          but my creativity knows no bounds. I specialize in crafting engaging
          videos that leave a lasting impression. Let's collaborate and turn your
          vision into captivating content that shines!
        </p>
        <a href="https://www.upwork.com/freelancers/~01434f2094a86cefc9" target="_blank">
          <button>Hire Me</button>
        </a>
        <a href="mailto:gurjarsunny420@gmail.com" target="_blank">
          <button>Email Me</button>
        </a>
      </div>
      <div className="right">
        <img src="mes.png" alt="Your Profile Picture" />
      </div>
    </header>
  );
};

export default Header;
