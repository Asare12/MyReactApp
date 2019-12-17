import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar";
import TopContent from "./components/top-content";
import About from "./components/about";
import Service from "./components/service";
import Team from "./components/team";
import Membership from "./components/membership";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
        <TopContent />
      </header>
      <div className="about">
        <About />
      </div>
      <div className="service">
        <Service />
      </div>
      <div className="team">
        <Team />
      </div>
      <div className="membership">
        <Membership />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
