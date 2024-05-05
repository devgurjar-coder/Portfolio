"use client"
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleButton = () => {
    setToggle(!toggle); // Toggle the state on click
  };

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${
          toggle ? 'menu-open' : ''
        }`}
      >
        <div className="logo">
          <h1>EditWithDev</h1>
        </div>
        <ul className={`menu-items ${toggle ? 'open' : ''}`}>
          <li onClick={() => setToggle(false)}>
            <ScrollLink to="about" smooth={true} duration={500}>
              About Me
            </ScrollLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact Us
            </ScrollLink>
          </li>
        </ul>
        {/* Remove the menu button section */}
        {/* <div className="menu" onClick={toggleButton}>
          {toggle ? <AiFillCloseCircle /> : <AiOutlineBars />}
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
