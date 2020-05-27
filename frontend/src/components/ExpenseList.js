import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {
                props.expenses.length == 0 ? (
                    <p>no expenses :(</p>
                ) : (
                <div>
                    {props.expenses.map(
                        expense => <ExpenseListItem key={expense.id} {...expense} />
                    )}
                </div>
                )
            }
        </div>
    )
}

const ConnectedExpenseList = connect( state => {
    return {
        expenses : selectExpenses(state.expenses , state.filters)
    }
})(ExpenseList);

export {ExpenseList};
export default ConnectedExpenseList