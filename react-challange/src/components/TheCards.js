import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import meteor from '../meteor_circle2.png'
import EditMeteor from './EditMeteor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DELETE_METEOR } from '../store/actions/meteor'

const cardStyle = {
  'maxWidth': '20rem'
}
const imgStyle = {
  'maxWidth': '200px'
}
const buttonStyle = {
  'cursor':'pointer'
}

class Card extends Component {
  constructor () {
    super()
    this.state = {
      edit: false
    }
    this.remove = this.remove.bind(this)
  }
  remove = (e) => {
    e.preventDefault()
    this.props.DELETE_METEOR(this.props.docs.name)
  }
  
  edit = (e) => {
    e.preventDefault()
    this.setState({
      edit:true
    })
  }
  
  render() {
    if (this.state.edit === false ) {
      return (
        <div className="col-md-3">
        <div className="card text-white bg-primary mb-3" style={cardStyle}>
          <div className="card-header">Comet Name</div>
            <img src={meteor} alt="logo" style={imgStyle} />
            <div className="card-header">{this.props.docs.name}</div>
            <div className="card-body">
              <h4 className="card-title">Potential Hazard:</h4>
              <p>Magnitude: {this.props.docs.absolute_magnitude_h}</p>
            </div>
            <button onClick={this.edit} style={buttonStyle}>Edit</button>
            <button onClick={this.remove} style={buttonStyle}>Remove</button>
        </div>
      </div>
      )
    } else {
      return (
        <div className="col-md-3">
        <div className="card text-white bg-primary mb-3" style={cardStyle}>
          <div className="card-header">Comet Name</div>
            <img src={meteor} alt="logo" style={imgStyle} />
            <div className="card-header">{this.props.docs.name}</div>
            <div className="card-body">
              <h4 className="card-title">Potential Hazard:</h4>
              <p>Magnitude: {this.props.docs.absolute_magnitude_h}</p>
            </div>
            <EditMeteor meteorName={this.props.docs.name}></EditMeteor>
            <button onClick={this.remove} style={buttonStyle}>Remove</button>
        </div>
      </div>
      );
    }

  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators ({
  DELETE_METEOR
},dispatch)

export default connect(null, mapDispatchToProps)(Card);