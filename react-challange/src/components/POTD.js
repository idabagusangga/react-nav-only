import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Details from './Details'
import { connect } from 'react-redux'




const Picture = (props) => (
  <div className="container"><img src={props.data.pic}></img> <br></br>
    <Link to={`${props.match.url}/${props.data.info}`}>Show Title</Link>
    <Route exact path={`${props.match.url}/:name`} component={Details}></Route>
  </div>
)

const mapStateToProps = (state) => {
  return {
    data: state.imageReducer
  }
}

export default connect(mapStateToProps)(Picture);