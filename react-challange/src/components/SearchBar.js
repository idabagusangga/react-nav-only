import React, { Component } from 'react';
import store from '../store/index'


class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      msg : 'nasa',
      name: 'Angga'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name] : value
    })
  }
  addMeteor (e) {
    e.preventDefault()
    console.log('ini adalaha eeeeeeeeeeeeeeeeeeeeeeeeeeeeee', e.target.msg.value);
    store.dispatch({type:'ADD_METEOR', payload:{msg: e.target.msg.value, name: e.target.name.value} })
    e.target.msg.value = ''
    e.target.name.value = ''
  }
  render() {
    return (
      <form onSubmit={this.addMeteor}>
      <div className="form-group">
        <h3>Test on Change</h3>
        <p>Message</p>
        <input type="text" name="msg" placeholder="msg" onChange={this.handleChange}></input>
        <p>Name</p>
        <input type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
      <h1>{this.state.msg}</h1>
      <h1>{this.state.name}</h1>
      <button type="Submit">test</button>
      </div>
      </form>
    );
  }
}

export default SearchBar;
