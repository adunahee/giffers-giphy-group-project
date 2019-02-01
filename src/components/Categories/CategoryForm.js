import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
        }
    }

    handleAddCategory = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_CATEGORY', payload: this.state })
        this.setState({category: ''});
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleAddCategory}>
                <TextField
                    required
                    id="category"
                    label="New Category"
                    value={this.state.category}
                    margin="normal"
                    type='text'
                    onChange={this.handleChange}
                />
                <Button variant='contained' type='submit'><SendIcon /></Button>
            </form>
        )
    }
}



export default connect()(CategoryForm);
