import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const cardStyle = {
  'maxWidth': '20rem'
}

class Card extends Component {
  render() {
    return (
      <div className="col-md-3">
      <div className="card text-white bg-primary mb-3" style={cardStyle}>
        <div className="card-header">Comet Name</div>
          <div className="card-header">{this.props.docs.name}</div>
          <div className="card-body">
            <h4 className="card-title">Potential Hazard:</h4>
            <p>Magnitude: {this.props.docs.absolute_magnitude_h}</p>
          </div>
      </div>
    </div>
    );
  }
}

export default Card;