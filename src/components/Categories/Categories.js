import React, { Component } from 'react'
import CategoryForm from './../Categories/CategoryForm';
import CategoryListItem from './../Categories/CategoryListItem';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Categories.css';



class Categories extends Component {

    buildCategoryList = () => {
        return this.props.categories.map((category, index) => {
            return <CategoryListItem key={index} category={category} />
        })
    }


    render() {
        return (
            <div>
                <h2>Manage Categories</h2>
                <h3>Add New Category</h3>
                <CategoryForm />
                <h3>Current Categories</h3>
                <Table className="category-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category Name</TableCell>
                            <TableCell>Modify Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.buildCategoryList()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const mapRStoProps = (reduxStore) => {
    return { categories: reduxStore.categories }
}

export default connect(mapRStoProps)(Categories);