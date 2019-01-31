import React, { Component } from 'react';
// import FavoriteItems from './FavoriteItems.js';
import { connect } from 'react-redux';

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
            <div>
                {/* {this.props.reduxState.favorites.map((item, i) => {
                    <FavoriteItems key={i} item={item}/>
                })} */}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
