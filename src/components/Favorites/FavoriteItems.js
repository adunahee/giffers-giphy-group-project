import React, { Component } from 'react';
import './FavoriteItems.css';
import Dropdown from './Dropdown.js';

// material-ui import statements
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

//cart styling imports
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';



class FavoriteItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            testArray: [],
        }
    }

    render() {

        // console.log(this.props.item.url);
        return (
                <Grid item md={3}>
                <Card className="result-card">
                    <CardMedia
                        component="img"
                        alt="test"
                        className="result-media"
                        height="340"
                        width="340"
                        src={this.props.item.url}
                        title="Title"
                    />
                    <CardActions>
                        <Dropdown item={this.props.item} />
                    </CardActions>
                </Card>
                </Grid>
            // <div className="item-div">
            //     <GridList cellHeight={180} className="grid-list">
            //         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            //             <ListSubheader component="div">Favorite</ListSubheader>
            // </GridListTile>
            //     {this.state.testArray.map(array => (

            //kye's final code
            // <GridListTile>
            //     <img src={this.props.item.url} alt="Picture" />
            //     <GridListTileBar
            //         title="title"
            //         subtitle={<span>by: Kye</span>}
            //         actionIcon={
            //             <Dropdown item={this.props.item}/>
            //         }
            //     />
            // </GridListTile>




                        // ))}
            //     </GridList>
            //     {/* {this.state.testArray.map((array) => ( <img key={array.id} src={array.url} />))} */}
            // </div>
        )
    }
}

export default FavoriteItems;