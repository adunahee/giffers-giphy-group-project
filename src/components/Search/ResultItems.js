import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ResultItems.css';

// material-ui import statements
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
            <Grid item md={3}>
                <Card className="result-card" >
                    {/* {JSON.stringify(this.props.results.images.original)} */}
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="test"
                            className="result-media"
                            height="340"
                            width="340"
                            src={this.props.results.images.downsized_medium.url}
                            title="Title"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Tooltip title="Add to favorites">
                            <Button onClick={this.handleFavorite}><FavoriteIcon color='secondary' /></Button>
                        </Tooltip>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ResultItems);