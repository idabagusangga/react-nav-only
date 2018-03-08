import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import TheList from './components/theList.jsx'
import Potd from './components/POTD'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'
import store from './store/index'
import axios from 'axios'
import EditMeteor from './components/EditMeteor'
import { Provider } from 'react-redux' 
import { GET_METEORS } from './store/actions/meteor'

const linkStyles = {
  'marginLeft' : '8px'
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
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
                      <Route exact path={`/edit/:name`} component={EditMeteor}></Route>
                  </div>
                </BrowserRouter>
              
      </div>
      </Provider>
  
    );
  }
}

export default App;
