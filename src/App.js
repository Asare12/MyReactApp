import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar";
import TopContent from "./components/top-content";
import About from "./components/about";

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
    </div>
  );
}

export default App;
