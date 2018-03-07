import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Details from './Details'
import axios from 'axios'
import store from '../store/index'


class Picture extends Component {
  constructor() {
    super()
    this.state = {
      data: store.getState().imageReducer
    }
    store.subscribe( () => {
      this.setState({
        data: store.getState().imageReducer
      })
    })
  }
  getPicture = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=F7OQVxHJR0EakMqdQxQuaM0MRQmIJjSXy7CL8Kug`)
      .then(response => {
        // this.setState({ data: {...this.state.data, pic:response.data.url, info:response.data.explanation}});
        store.dispatch({type: 'GET_IMAGE', payload: {pic: response.data.url, info: response.data.explanation}})
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentWillMount() {
    this.getPicture()
  }
  render() {
    return (
      <div><img src={this.state.data.pic}></img> <br></br>
    <Link to={`${this.props.match.url}/${this.state.data.info}`}>Show Title</Link>
    <Route exact path={`${this.props.match.url}/:name`} component={Details}></Route>
  
</div>
    );
  }
}

export default Picture;