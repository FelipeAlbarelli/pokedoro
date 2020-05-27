import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense , removeExpense} from '../actions/expenses'

export const EditExpensePage = props => {
    // console.log(props.expense)
    return (<div>
        <h1>Edit Expense</h1>
        <ExpenseForm
            expense={props.expense}
            onSubmit={ (expense) => {
                props.editExpense({ id : props.expense.id , updates : expense});
                props.history.push('/')
            } }
        />
        <button
            onClick={ () => {
                props.removeExpense({id : props.expense.id})
                props.history.push('/')
            } }
        >Remove</button>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    editExpense : expense => dispatch(editExpense(expense)),
    removeExpense : expense => dispatch(removeExpense(expense))
})

const mapStateToProps = (state , props) => ({
    expense : state.expenses.find( expense => expense.id == props.match.params.id)
})

export default connect( mapStateToProps , mapDispatchToProps )(EditExpensePage);