import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui import statements
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

class ResultItems extends Component {

    handleFavorite = () => {
        //replace payload with proped img src url
        //this.props.photoObj.image.fixed_width
        this.props.dispatch(
            {
                type: 'ADD_FAVORITE',
                payload: { url: this.props.results.images.downsized_medium.url }
            })
    }

    render() {
        return (
            <Card >
                {/* {JSON.stringify(this.props.results.images.original)} */}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="test"
                        className="item-img"
                        height="340"
                        width="340"
                        src={this.props.results.images.downsized_medium.url}
                        title="Title"
                    />
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Add to favorites">
                        <Button onClick={this.handleFavorite}>Add to favorites</Button>
                    </Tooltip>
                </CardActions>
            </Card>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ResultItems);