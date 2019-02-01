import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
      <TableRow>
        <TableCell>
          {this.props.category.name}
        </TableCell>
        <TableCell>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </TableCell>
      </TableRow>
    )
  }
}

export default connect()(CategoryListItems);
