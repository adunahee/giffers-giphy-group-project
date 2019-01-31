import React, { Component } from 'react';
import {connect} from 'react-redux';
import './../Favorites/FavoriteItems.js';
import FavoriteItems from './../Favorites/FavoriteItems.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_CATEGORIES'})
  }
  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <FavoriteItems />
      </div>
    );
  }
  
}

export default connect()(App);
