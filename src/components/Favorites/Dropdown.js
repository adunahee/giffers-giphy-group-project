import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// material-ui import statements
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fav_id: this.props.item.id,
        }
    }

    handleChange = event => {
        // console.log(event.target.value);
        this.setState({ category_id: event.target.value });
    };

    buildSelectInput = () => {
        const options = this.props.categories.map((categoryObj, index) => {
            return (<option key={index}
                value={categoryObj.id}>
                {categoryObj.name}
            </option>
            )
        })
        
        return options;
    }

    handleSetCategory = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: "SET_FAV_CATEGORY", action: this.state })
    }

    render() {
        console.log(this.props.categories);
        console.log(this.state);
        console.log(this.props.item);
        console.log(this.props.item.category_id);
        
        return (
            <div>
            {this.props.categories.length > 1 && 
            <form onSubmit={this.handleSetCategory}>
                    <select defaultValue={this.props.item.category_id.toString()} required onChange={this.handleChange}>
                {this.buildSelectInput()}
                </select>
                <button type='submit'>Set Category</button>
            </form>
            }
            </div>
        )
    }
}
    const mapRStoProps = (reduxStore) => {
        return { categories: reduxStore.categories }
    }

    export default connect(mapRStoProps)(Dropdown);