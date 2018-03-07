import React, { Component } from 'react';
import '../App.css'
import TheCards from './TheCards'
import axios from 'axios'
import store from '../store/index'


class list extends Component {
  constructor() {
    super()
    this.state = {
      data: store.getState().meteorReducer
    }
    store.subscribe( () => {
      // console.log(store.getState());
      this.setState({
        data: store.getState().meteorReducer
      })
      console.log('hello',this.state.data);
    })
  }

  getNasaData = () => {
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug')
      .then(response => {
        // this.setState({data: response.data.near_earth_objects['2015-09-08']}); 
        // console.log(response.data.near_earth_objects['2015-09-08']);
        store.dispatch({type: 'GET_METEORS', payload: response.data.near_earth_objects['2015-09-08']})
        // console.log('ahahahahaha', store.getstate());
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getNasaData()
  }
  render() {
    return (
    <div className="row">
      {this.state.data.map(dat => {
        return <TheCards docs={dat} key={dat.name}></TheCards>
      })}
    </div>
    );
  }
}

export default list;