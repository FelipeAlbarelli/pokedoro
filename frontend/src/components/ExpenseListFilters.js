import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter , sortByAmount , sortByDate} from '../actions/filters'

class ExpenseListFilters extends React.Component {

    constructor(props){
        super(props)
    }

    onTextChange = e => {
        this.props.setTextFilter(e.target.value)
    }

    onSortByChange = e => {
        const value = e.target.value;
        if (value == 'date'){
            this.props.sortByDate()
        } else {
            this.props.sortByAmount()
        }
    }

    render(){
        return (
            <div>
                <input type='text' value={this.props.filters.text} 
                onChange={this.onTextChange}
                />
                <select value={this.props.filters.sortBy} 
                onChange={this.onSortByChange} >
                    <option value='date' >Date</option>
                    <option value='amount' >Amount</option> 
                </select>
            </div>
        )
    }
}

const mapDispatchToProps = (dispacth) => ({
    setTextFilter : text => dispacth(setTextFilter(text)),
    sortByDate : () => dispacth(sortByDate()),
    sortByAmount : () => dispacth(sortByAmount())
})


const mapStateToProps = state => ({
    filters : state.filters
})

export {ExpenseListFilters};

export default connect(mapStateToProps ,mapDispatchToProps )(ExpenseListFilters)