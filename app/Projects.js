import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div id='projects' className="pro-heading">
        <h1>Some of My Projects</h1>
      </div>
      <div className="project-section">
        <div className="box">
          <div className="pro-logo">
            <img src="netflix.png" alt="" />
          </div>
          <div className="pro-name">React-Amazon-Clone</div>
          <div className="pro-des">
            React amazon-clone It is a great Amazon clone where you can sign in, sign out, create an Amazon account, and also add products to the cart. The most amazing part is that you can see the total of all items.
          </div>
          <a href="https://react--clone-506ca.web.app" target="_blank">Check it out</a>
        </div>
        <div className="box">
          <div className="pro-logo">
            <img src="amazon.jpg" alt="" />
          </div>
          <div className="pro-name">React-Firebase-netflix-Clone</div>
          <div className="pro-des">
            React amazon-clone It is a great Amazon clone where you can sign in, sign out, create an Amazon account, and also add products to the cart. The most amazing part is that you can see the total of all items.
          </div>
          <a href="https://react-netflix-clone-e99fa.web.app" target="_blank">Check it out</a>
        </div>
      </div>
    </>
  );
};

export default Projects;
