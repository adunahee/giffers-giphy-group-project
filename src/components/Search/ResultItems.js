import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultItems extends Component {

    handleFavorite = () => {
        //replace payload with proped img src url
        //this.props.photoObj.image.fixed_width
        this.props.dispatch(
            {
                type: 'ADD_FAVORITE',
                payload: { url: 'https://media.giphy.com/media/l44QjyG9FS0cFImVG/giphy.gif' }
            })
    }

    render() {
        return (
            <div>
                {/* replace src with this.props.photoObj.image.fixed_width */}
                <img src={`https://media.giphy.com/media/l44QjyG9FS0cFImVG/giphy.gif`} />
                <button onClick={this.handleFavorite}>Add to Favorites</button>
            </div>
        )
    }
}

export default connect()(ResultItems)
