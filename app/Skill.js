import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <>
      <div className="all-skill">
        <h1>My Top Skills</h1>
        <div className="first">
          <img className="html" src="html.png" alt="" />
          <img src="css.png" alt="" />
          <img src="js.png" alt="" />
        </div>
        <div className="second">
          <img src="react1.png" alt="" />
          <img src="mongodb.jpg" alt="" />
          <img src="expressjs_logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Skill;
