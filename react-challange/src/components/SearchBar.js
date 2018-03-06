import React, { Component } from 'react';


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
  render() {
    return (
      <div className="form-group">
        <h3>Test on Change</h3>
        <p>Message</p>
        <input type="text" name="msg" placeholder="search" onChange={this.handleChange}></input>
        <p>Name</p>
        <input type="text" name="name" placeholder="search" onChange={this.handleChange}></input>
      <h1>{this.state.msg}</h1>
      <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default SearchBar;
