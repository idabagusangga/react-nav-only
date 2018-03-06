import React, { Component } from 'react';
import SearchBar from './SearchBar'
import TheList from './theList'

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <TheList></TheList>
      </div>
    );
  }
}

export default Home;