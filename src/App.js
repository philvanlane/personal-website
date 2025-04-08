import React from 'react';
import Home from './components/Home';
import Research from './components/Research';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-title">
            <a href="/#/">Phil Van-Lane
            </a>
          </div>
          <div className="nav-links">
            <div className="route-link">
              <a className="link" href="/#/about">About</a>
            </div>
            <div className="route-link">
              <a className="link" href="/#/research">Research</a>
            </div>
            <div className="route-link">
              CV
            </div>
          </div>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Home/>} />
          <Route path="/research" element={<Research/>} />
        </Routes>
    </Router>
    <div className="footer">
    &copy; Phil Van-Lane 2025. All rights reserved.
    <br></br>
    Background image credit: Westend61 / Andreas Strauß
      </div>
    </div>
  );
}

export default App;
