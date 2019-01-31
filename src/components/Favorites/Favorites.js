import React, { Component } from 'react';
import FavoriteItems from './FavoriteItems.js';
import { connect } from 'react-redux';

// material-ui import statements
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class Favorites extends Component {

    componentDidMount() {
        this.getFavorites();
    }

    getFavorites = () => {
        console.log('Its happening');
        
        this.props.dispatch({ type: 'FETCH_FAVORITES'})
    }


    render() {
        return (
            <div className="item-div">
                <GridList cellHeight={180} className="grid-list">
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Favorite</ListSubheader>
                    </GridListTile>
                        {this.props.reduxState.favorites.map((item, i) => (
                            <FavoriteItems key={i} item={item} />
                        ))}
                </GridList>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
