import React, { Component } from 'react'
import CategoryForm from './../Categories/CategoryForm';
import CategoryListItem from './../Categories/CategoryListItem';
import { connect } from 'react-redux';


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
                <CategoryForm />
                <h2>Current Categories</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Modify Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.buildCategoryList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapRStoProps = (reduxStore) => {
    return { categories: reduxStore.categories }
}

export default connect(mapRStoProps)(Categories);