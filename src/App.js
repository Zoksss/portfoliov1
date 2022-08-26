import React from "react";

import './App.css';
import "./style/style.scss";

import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import Github from "./images/github.png"
import Linkedin from "./images/linkedin.png"
import Youtube from "./images/youtube.png"


function App() {

  return (
    <div className="App">
      <Nav />
      <div className="side-social-icons">
        <a href="#"><img src={Github} alt="github"></img></a>
        <a href="#"><img src={Linkedin} alt="linkedin"></img></a>
        <a href="#"><img src={Youtube} alt="youtube"></img></a>
        <div className="line"></div>
      </div>
      <div className="container">
        <header>
          <Hero />
          <h6 className="header-bg-text">home</h6>
        </header>
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
