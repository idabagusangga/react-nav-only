import React, { Component } from 'react';
import '../App.css'
import TheCards from './TheCards'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    if (this.props.data === 'PLEASE WAIT') {
      return (
        <div><div className="loader"></div></div>
      )
    }
    else if (this.props.data === 'ERROR'){
      return (
        <div><h1>Rusak nih</h1></div>
      );
    }
    else {
      return (
        <div className="row">
          {this.props.data.map(dat => {
            return <TheCards docs={dat} key={dat.name}></TheCards>
          })}
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.meteorReducer
  }
}

export default connect(mapStateToProps)(List);