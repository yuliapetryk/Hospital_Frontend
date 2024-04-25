import './App.css'

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import Start from "./Start";

function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <img src="/icon-medicine.png" className="logo" alt=" logo" />
          <img src="/icon-doctor.png" className="logo doctor" alt="doctor logo" />
        </div>
        <h3 className="subtitle">Приватна поліклініка</h3>
        <button onClick={() => {
          <Link to="/start" className="button">ProfiMed</Link>
        }} className="button">ProfiMed</button>
        
        <Routes>
        <Route path="/" element={<Start />} />
          <Route path="/info" element={<UserInfo />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
