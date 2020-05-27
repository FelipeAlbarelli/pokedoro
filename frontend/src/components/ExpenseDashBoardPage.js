import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = prop => (
    <div>
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
)

export default ExpenseDashboardPage