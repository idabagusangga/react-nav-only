import React, { Component } from 'react';
import '../App.css'
import TheCards from './TheCards'
import { connect } from 'react-redux'


const List = (props) => (
  <div className="row">
    {props.data.map(dat => {
      return <TheCards docs={dat} key={dat.name}></TheCards>
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    data: state.meteorReducer
  }
}

export default connect(mapStateToProps)(List);