// import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import React from 'react';
import Navbar from './Navbar';
import Header from './Header'
import Skill from './Skill'
import Projects from './Projects';
import Footer from './Footer'
import './globals.css'
const App = () => {
  
  return (
    <>
    <Navbar/>
    <Header/>
    <Projects/>
    <Skill/>
    <Footer/>
    </>
  );
};

export default App;
