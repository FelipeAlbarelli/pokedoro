import React from 'react'
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'


class ExpenseForm extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            description : props.expense ? props.expense.description : '',
            amount : props.expense ? (props.expense.amount / 100).toString() : '',
            note : props.expense ? props.expense.note :  '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error : ''
        }
    }
    
    state = {
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };

    onDateChange = createdAt => {
        // console.log(createdAt)
        this.setState( state => ({
            createdAt
        }) )
    }

    onDescriptionChange = e => {
        const description = e.target.value
        this.setState( state => ({
            description
        }) )
    }

    onNoteAreaChange = e => {
        const note = e.target.value;
        this.setState( state => ({
            note
        }) )
    }

    onAmountChange = e => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState( state => ({
                amount
            }) )
        }
    }

    onSubmitChange = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState( () => ({error : 'Provide description and amount'}) )
        } else {
            this.setState( () => ({error : ""}) )
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount)*100,
                note : this.state.note,
                createdAt : this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        // console.log(expense)
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.onSubmitChange} >
                    <input 
                        type='text' 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                    />
                    <input 
                        type='text' 
                        placeholder='Amount'
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteAreaChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm