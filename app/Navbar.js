'use client'
import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineBars, AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };

  const closeMenu = () => {
    setToggle(false);
    setMenu(false);
  };

  return (
    <>
      <div className={`navbar ${menu ? 'menu-open' : ''}`}>
        <div className="logo">
          <h1>Dev Gurjar</h1>
        </div>
        <ul className={`menu-items ${menu ? 'open' : ''}`}>
          <li onClick={closeMenu}>
            <Link to="about" smooth={true} duration={500}>About me</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="contact" smooth={true} duration={500}>Contact us</Link>
          </li>
        </ul>
        <div className="menu" onClick={toggleButton}>
          {toggle ? <AiFillCloseCircle /> : <AiOutlineBars />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
