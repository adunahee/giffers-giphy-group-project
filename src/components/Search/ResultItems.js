import React, { Component } from 'react';
import {connect} from 'react-redux';

class ResultItems extends Component {

    handleFavorite = () => {
        //replace payload with proped img src url
        this.props.dispatch(
            { type: 'ADD_FAVORITE', 
            payload: {url: 'https://media.giphy.com/media/l44QjyG9FS0cFImVG/giphy.gif'}
        })
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect()(ResultItems)
