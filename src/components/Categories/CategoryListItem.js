import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
          <IconButton onClick={this.handleDelete}>
          <DeleteIcon />
          </IconButton>
          <IconButton onClick={this.handleEdit}>
          <Edit />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }
}

export default connect()(CategoryListItems);
