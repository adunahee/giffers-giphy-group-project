import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultItems from './ResultItems';

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class Results extends Component {
    componentDidMount() {
        const action = { type: ''}
    }
}

export default Results;