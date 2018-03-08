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
import { GET_METEORS } from './store/actions'

const linkStyles = {
  'marginLeft' : '8px'
}

class App extends Component {
  getNasaData = () => {
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug')
      .then(response => {
        // this.setState({data: response.data.near_earth_objects['2015-09-08']}); 
        // console.log(response.data.near_earth_objects['2015-09-08']);
        store.dispatch(GET_METEORS(response.data.near_earth_objects['2015-09-08']))
        // console.log('ahahahahaha', store.getstate());
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  getPicture = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug`)
      .then(response => {
        // this.setState({ data: {...this.state.data, pic:response.data.url, info:response.data.explanation}});
        store.dispatch({type: 'GET_IMAGE', payload: {pic: response.data.url, info: response.data.explanation}})
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  componentWillMount() {
    this.getNasaData()
    this.getPicture()
  }
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
