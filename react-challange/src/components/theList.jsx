import React, { Component } from 'react';
import '../App.css'
import TheCards from './TheCards'
import axios from 'axios'

const data = [1,2,3]



class list extends Component {
  constructor() {
    super()
    this.state = {
      data: [1,2,3]
    }
  }
  getNasaData = () => {
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug')
      .then(response => {
        this.setState({data: response.data.near_earth_objects['2015-09-08']}); 
        console.log(response.data.near_earth_objects['2015-09-08']);
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