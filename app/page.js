// import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import React from 'react';
import Navbar from './Navbar';
import Header from './Header'
import Projects from './Projects';
import Footer from './Footer'
import './globals.css'
const App = () => {
  
  return (
    <>
    <Navbar/>
    <Header/>
    <Projects/>
    <Footer/>
    </>
  );
};

export default App;
