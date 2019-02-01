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
        this.setState({category_id: event.target.value });
    };

    buildSelectInput = () => {
        return this.props.categories.map((categoryObj, index) => {
            return (<option key={index}
                value={categoryObj.id}>
                {categoryObj.name}
            </option>
            )
        })
    }

    handleSetCategory = (event) => {
        event.preventDefault();
        this.props.dispatch({type: "SET_FAV_CATEGORY", action: this.state})
    }

    render() {
        console.log(this.props.categories);
        console.log(this.state);
        
        return (
            <form onSubmit={this.handleSetCategory}>
                <select required onChange={this.handleChange}>
                    <option value="" disabled defaultValue>Select your option</option>
                    {this.buildSelectInput()}
                </select>
                <button type='submit'>Set Category</button>
            </form>
            //kyes material ui styling
            // <FormControl variant="filled" className="dropdown-form">
            //     <InputLabel>Category</InputLabel>
            //     <Select
            //         value={this.state.category}
            //         onChange={this.handleChange}
            //         input={<FilledInput name="category" id="filled-age-simple" />}
            //     >
            //         {this.state.categoryArray.map(category => (
            //             <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
            //         ))}
            //     </Select>
            // </FormControl>
        )
    }
}

const mapRStoProps = (reduxStore) => {
    return { categories: reduxStore.categories }
}

export default connect(mapRStoProps)(Dropdown);