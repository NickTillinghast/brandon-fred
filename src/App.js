import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import Logo from './media/Drummersrule.jpg';


import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
          <div className='logo'>
            <Link to="/">
              <img className='logo' src={Logo} alt="drummers-rule" />
            </Link>
          </div>
          <div>
            <div className='free-lesson'>Free Lesson</div>
            <div className='free-lesson'>Best Lessons for the Best Price</div>
          </div>
          <div className="nav-bar" style={{ textDecoration: 'none' }}>
            <ul className='nav-items'>
              <li className='nav-item' >
                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
              </li>
              <li className='nav-item' >
                <Link to="/About" style={{ color: 'black', textDecoration: 'none' }}>About</Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={< Home />} ></Route>
          <Route exact path="/About" element={< About />}></Route>
          {/* <Route exact path=""/></Route> */}
        </Routes>
      </Router>


    );
  }
}

export default App;
