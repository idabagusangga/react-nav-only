import React, { Component } from 'react';
// import store from '../store/index'
import { connect } from 'react-redux'


class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      msg : 'nasa',
      name: 'Angga'
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  handleChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name] : value
    })
  }
  submitHandler (e) {
    e.preventDefault()
    console.log('hehehehhe');
    this.props.addMeteor({msg: this.state.msg, name: this.state.name})
    alert('new meteor added')
    e.target.msg.value = ''
    e.target.name.value = ''
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
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

const mapDispatchToProps = (dispatch) => ({
  addMeteor: (value) => dispatch({type: 'ADD_METEOR', payload:value})
})

export default connect(null,mapDispatchToProps)(SearchBar);
