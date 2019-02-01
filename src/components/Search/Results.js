import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultItems from './ResultItems';

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

class Results extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    handleChangeState = (event) => {
        this.setState({
            query: event.target.value,
        })
    }

    searchGif = (event) => {
        event.preventDefault();
        const action = { type: 'FETCH_GIPHY_RESULTS', payload: this.state.query };
        this.props.dispatch(action);
        this.setState({
            query: '',
        })
    }



    render() {
        return (
            <div>
                <h3>Search</h3>
                <form onSubmit={this.searchGif} >
                    <input type='text' onChange={this.handleChangeState}></input>
                    <button onClick={this.searchGif}>Search</button>
                </form>
                {this.props.reduxState.giphyResults.map((results, i) => (
                            <ResultItems key={i} results={results} />
                        ))}
            </div>


        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Results);

