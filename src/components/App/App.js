import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link as RouterLink, Route } from 'react-router-dom';
import Results from './../Search/Results';
import Favorites from './../Favorites/Favorites';
import Categories from './../Categories/Categories'
import './App.css';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CATEGORIES' })
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <header id='app-header'>
              <h1 id='header-h1'>GIPHY APP</h1>
              <nav>
                <Link component={RouterLink} to='/'><Button id='nav-btn' variant='contained'>Search</Button></Link>
                <Link component={RouterLink} to='/favorites'><Button id='nav-btn' variant='contained'>Favorites</Button></Link>
                <Link component={RouterLink} to='/categories'><Button id='nav-btn' variant='contained'>Categories</Button></Link>

              </nav>
            </header>
            {/* <div id="component-div"> */}
            <Route exact path='/' component={Results} />

            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/categories' component={Categories} />
            {/* </div> */}
          </div>
        </Router>
      </div>
    );
  }

}

export default connect()(App);
