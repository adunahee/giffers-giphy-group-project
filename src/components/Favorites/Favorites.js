import React, { Component } from 'react';
import FavoriteItems from './FavoriteItems.js';
import { connect } from 'react-redux';
import './FavoriteItems.css';

// material-ui import statements
import Grid from '@material-ui/core/Grid';

class Favorites extends Component {

    componentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        this.props.dispatch({ type: 'FETCH_FAVORITES'})
    }

    buildCards= () => {
        return (
            this.props.reduxState.favorites.map((item, i) => {
                return <FavoriteItems key={i} item={item} />
            })
        )
    }

    render() {
        return (
                <Grid container spacing={24}>

                    {this.buildCards()}
                </Grid>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
