import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
// import Results from './../Search/Results';
import Favorites from './../Favorites/Favorites';
import Categories from './../Categories/Categories'


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CATEGORIES' })
  }
  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          <div>
            <nav>
              <li>
                <Link to='/'>Search</Link>
              </li>
              <li>
                <Link to='/favorites'>Favorites</Link>
              </li>
              <li>
                <Link to='/categories'>Categories</Link>
              </li>
            </nav>
            {/* <Route exact path='/' component={Results} /> */}
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/categories' component={Categories} />
          </div>
        </Router>
      </div>
    );
  }

}

export default connect()(App);
