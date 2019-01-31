import React, { Component } from 'react';
import axios from 'axios';
import './FavoriteItems.css';

// material-ui import statements
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

class FavoriteItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            testArray: [],
        }
    }

    componentDidMount() {
        this.getTestData();
    }

    getTestData = () => {
        axios({
          method: 'GET',
          url: '/api/favorite',
        }).then((response) => {
            // put the data in the local state array galleryItems
            this.setState({
                testArray: response.data,
            })
        }).catch((error) => {
            // console log and error alert if there is a problem with GET
          console.log(`Error in GET: ${error}`);
          alert(`Error in getting favorites.`);
        });
    } // end getTestData

    render() {
        return(
            <div className="item-div">
                <GridList cellHeight={180} className="grid-list">
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Favorite</ListSubheader>
                    </GridListTile>
                        {this.state.testArray.map(array => (
                            <GridListTile key={array.id}>
                                <img src={array.url} alt="Picture" />
                                <GridListTileBar
                                    title="title"
                                    subtitle={<span>by: Kye</span>}
                                    // actionIcon={
                                    //     <button>Button</button>
                                    // }
                                />
                            </GridListTile>
                        ))}
                </GridList>
                {/* {this.state.testArray.map((array) => ( <img key={array.id} src={array.url} />))} */}
            </div>
        )
    }
}

export default FavoriteItems;