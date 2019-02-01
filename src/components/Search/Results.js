import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultItems from './ResultItems';
import './Results.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';



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
                <form>
                    <Input id='input' className='search-input' type='text' placeholder='Search for a gif...' onChange={this.handleChangeState}></Input>
                    <Button onClick={this.searchGif} variant='contained' ><SearchIcon /></Button>
                </form>
                <ResultItems />
            </div>


        )
    }
}

export default connect(mapStoreToProps)(Results);

