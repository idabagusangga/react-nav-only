import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div><h6>{this.props.match.params.name}</h6></div>
      
    );
  }
}

export default Details;