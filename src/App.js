import React from "react";

import './App.css';
import "./style/style.scss";

import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";

import Github from "./images/github.png"
import Linkedin from "./images/linkedin.png"
import Youtube from "./images/youtube.png"


function App() {

  return (
    <div className="App">
      <div className="container">
        <header>
          <Nav />
          <Hero />
          <h6 className="header-bg-text">home</h6>
          <div className="side-social-icons">
            <a href="#"><img src={Github} alt="github"></img></a>
            <a href="#"><img src={Linkedin} alt="linkedin"></img></a>
            <a href="#"><img src={Youtube} alt="youtube"></img></a>
            <div className="line"></div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
