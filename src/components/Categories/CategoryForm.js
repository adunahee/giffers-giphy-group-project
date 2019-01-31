import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <input type='text' required onChange={this.handleChange} value={this.state.category}/>
                <button type='submit'>Add Category</button>
            </form>
        )
    }
}



export default connect()(CategoryForm);
