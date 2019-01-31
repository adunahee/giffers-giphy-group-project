import React, { Component } from 'react';
import connect from 'react-redux';

class Favorites extends Component {

    componenentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        (this.props.dispatch({type: }))
    }



    render() {
        return (
            <div></div>
        )
    }
}



export default connect()(Favorites);