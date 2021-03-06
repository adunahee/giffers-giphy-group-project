import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultItems from './ResultItems';
import './Results.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



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
                <Paper id='input-paper'>
                    <form>
                        <Input id='search-input' className='search-input' type='text' placeholder='Search for a gif...' onChange={this.handleChangeState}></Input>
                        <Button onClick={this.searchGif} variant='contained' ><SearchIcon /></Button>
                    </form>
                </Paper>
                <br />
                <Paper id='results-paper' elevation={3}>
                    <Grid container spacing={24}>
                        {this.props.reduxState.giphyResults.map((results, i) => (
                            <ResultItems key={i} results={results} />
                        ))}
                    </Grid>
                </Paper>
            </div>


        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Results);

