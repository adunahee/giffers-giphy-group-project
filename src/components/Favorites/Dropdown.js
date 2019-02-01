import React, { Component } from 'react';
import axios from 'axios';

// material-ui import statements
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            categoryArray: [],
        }
    }

    componentDidMount() {
        this.getCategory();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    getCategory = () => {
        axios({
          method: 'GET',
          url: '/api/category',
        }).then((response) => {
            // put the data in the local state array galleryItems
            this.setState({
                categoryArray: response.data,
            })
        }).catch((error) => {
            // console log and error alert if there is a problem with GET
          console.log(`Error in GET category: ${error}`);
          alert(`Error in getting categories.`);
        });
    } // end getCategory

    render() {
        return (
            <FormControl variant="filled" className="dropdown-form">
                <InputLabel>Category</InputLabel>
                <Select
                    value={this.state.category}
                    onChange={this.handleChange}
                    input={<FilledInput name="category" id="filled-age-simple" />}
                >
                    {this.state.categoryArray.map(category => (
                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }
}

export default Dropdown;