import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryForm extends Component {

    handleAddCategory = () => {
        this.props.dispatch({type: 'ADD_CATEGORY', payload: this.state})
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            category: event.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleAddCategory}>
                <input type='text' required onChange={this.handleChange}/>
                <button type='submit'>Add Category</button>
            </form>
        )
    }
}



export default connect()(CategoryForm);
