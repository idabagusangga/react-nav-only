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