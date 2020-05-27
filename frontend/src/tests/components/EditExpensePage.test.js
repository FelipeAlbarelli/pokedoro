import React from 'react'
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExepensePage';
import expenses from '../fixtures/expenses' 

let editExpense , history , wrapper , removeExpense;
const expense = expenses[0]

beforeEach(() =>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(<EditExpensePage expense={expense} removeExpense={removeExpense} editExpense={editExpense} history={history}  />);
})

test('should render EditExpensePage correctly' , () =>{
    expect(wrapper).toMatchSnapshot()
});

test('should handle onSubmit' , () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith({
        id : expense.id,
        updates : { ...expense }
    })
});

test('button click should call removeExpense' , () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id : expense.id})
})