import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={< Home />}></Route>
          <Route exact path="/About" element={< About />}></Route>
          {/* <Route exact path=""/></Route> */}
        </Routes>
      </Router>


    );
  }
}

export default App;
