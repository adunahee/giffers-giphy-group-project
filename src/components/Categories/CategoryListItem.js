import React, { Component } from 'react'
import { connect } from 'react-redux';

class CategoryListItems extends Component {


  handleDelete = () => {
    let confirmation = window.confirm('Are you sure you want to permanently delete this category?')
    if(confirmation) {
      this.props.dispatch({ type: 'DELETE_CATEGORY', payload: this.props.category.id })
    } else {
      alert('Delete aborted.')
    }
  }

  handleEdit = () => {
    let edit = window.prompt('Please edit category name.', this.props.category.name);
    if (edit != null) {
      const action = { type: 'UPDATE_CATEGORY', payload: { id: this.props.category.id, name: edit } }
      this.props.dispatch(action)
    }
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.category.name}
        </td>
        <td>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </td>
      </tr>
    )
  }
}

export default connect()(CategoryListItems);
