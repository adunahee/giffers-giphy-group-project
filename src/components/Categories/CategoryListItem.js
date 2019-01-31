import React, { Component } from 'react'
import { connect } from 'react-redux';

class CategoryListItems extends Component {


  handleDelete = () => {
    this.props.dispatch({ type: 'DELETE_CATEGORY', payload: this.props.category.id })
  }

  render() {
    return (
        <li>
            {this.props.category.name}
        <button onClick={this.handleDelete}>Delete</button>
        </li>
    )
  }
}

export default connect()(CategoryListItems);
