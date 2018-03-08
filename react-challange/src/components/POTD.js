import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Details from './Details'
import { connect } from 'react-redux'


class Picture extends Component {
  render() {
    if (this.props.data === 'Pending') {
      return (
        <div className="loader"></div>
      );  
    } else if ( this.props.data === 'Failed') {
      return (
        <h3>Not Found</h3>
      )
    } else {
      return (
        <div className="container"><img src={this.props.data.pic}></img> <br></br>
          <Link to={`${this.props.match.url}/${this.props.data.info}`}>Show Title</Link>
          <Route exact path={`${this.props.match.url}/:name`} component={Details}></Route>
        </div>
      )
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.imageReducer
  }
}

export default connect(mapStateToProps)(Picture);