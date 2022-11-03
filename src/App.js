import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./components/Home/Home";
import Video from "./components/Home/Video";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./app/store";

function App() {
  console.log(store.Videos);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
