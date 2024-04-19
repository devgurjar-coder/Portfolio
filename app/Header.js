import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="main">
      <div className="left">
        <h2>Hello</h2>
        <h3>Dev Here</h3>
        <h1>
          <span>SHORT FORM</span> Video Editor
        </h1>
        <p>Your go-to freelace short-form video edior! I may be new to the scene, but my creativity knows no bounds. I specialize in crafting engaging video that leaves a lasting impression Let's collaborate and turn your vision into captivating content that shines!</p>
        <a href="https://www.upwork.com/freelancers/~01434f2094a86cefc9" target="_blank">
  <button>Hire Me</button>
</a>

      </div>
      <div className="right">
        <img src="mes.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
