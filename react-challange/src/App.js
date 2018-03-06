import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import TheList from './components/theList.jsx'
import Potd from './components/POTD'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'

const linkStyles = {
  'margin-left' : '8px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
                <BrowserRouter>
                  <div>
                    <Link to="/" style={linkStyles}>Home</Link>
                    <Link to="/potd" style={linkStyles}>Picture of The Day</Link>   
                    <Route exact path="/" component={Home}></Route>   
                    <Route path="/potd" component={Potd}></Route>
                  </div>
                </BrowserRouter>
              
      </div>

  
    );
  }
}

export default App;
