import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HomeScreen from "./Components/landingPage/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
