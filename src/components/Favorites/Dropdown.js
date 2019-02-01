import React, { Component } from 'react';
import swal from 'sweetalert';
import { connect } from 'react-redux';


class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fav_id: this.props.item.id,
        }
    }

    handleChange = event => {
        // console.log(event.target.value);
        this.setState({ category_id: event.target.value });
    };

    buildSelectInput = () => {
        const options = this.props.categories.map((categoryObj, index) => {
            return (<option key={index}
                value={categoryObj.id}>
                {categoryObj.name}
            </option>
            )
        })
        
        return options;
    }

    handleSetCategory = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: "SET_FAV_CATEGORY", action: this.state });
        swal('new category set');
    }

    render() {
        let defValue;
        if (this.props.item.category_id === null) {
            defValue = '';
        } else {
            defValue = this.props.item.category_id.toString();
        }
        
        return (
            <div>
                {this.props.categories.length > 1 &&
                    <form onSubmit={this.handleSetCategory}>
                        <select defaultValue={defValue} required onChange={this.handleChange}>
                            <option value="" disabled defaultValue>Select your option</option>
                            {this.buildSelectInput()}
                        </select>
                        <button type='submit'>Set Category</button>
                    </form>
                }
            </div>
        )
    }
}
    const mapRStoProps = (reduxStore) => {
        return { categories: reduxStore.categories }
    }

    export default connect(mapRStoProps)(Dropdown);