import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App px-10">
      <Home />
    </div>
  );
}

export default App;
