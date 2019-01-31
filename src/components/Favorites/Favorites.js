import React, { Component } from 'react';
import connect from 'react-redux';

class Favorites extends Component {

    componenentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        (this.props.dispatch({ type: 'FETCH_FAVORITES'}))
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);