import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import GameService from "./routes/GameService";
import Contact from "./routes/Contact";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<GameService/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>  
        
        <Navbar/>
        <Home/>
    </div>
  );
}
