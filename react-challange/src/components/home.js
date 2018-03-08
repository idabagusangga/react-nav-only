import React, { Component } from 'react';
import SearchBar from './SearchBar'
import TheList from './theList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GET_METEORS } from '../store/actions/meteor'
import { GET_IMAGE } from '../store/actions/image'

class Home extends Component {
  fetchMeteor = () => {
    this.props.GET_METEORS()
  }
  fetchImage = () => {
    this.props.GET_IMAGE()
  }
  componentWillMount () {
    this.fetchMeteor()
    this.fetchImage()
  }
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <TheList></TheList>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators ({
  GET_METEORS,
  GET_IMAGE
},dispatch)


export default connect(null,mapDispatchToProps)(Home);