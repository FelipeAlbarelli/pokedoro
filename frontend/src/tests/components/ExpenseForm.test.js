import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import moment from 'moment'
import expenses from '../fixtures/expenses';


test('should render ExpenseList with empty message' , () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
})

test('should add ExpenseForm with data' , () =>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission' , () =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit' , {
        preventDefault : () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
})

test('shoudl set description on input change' , () =>{
    const value = 'new value'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change' , {
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change' , () =>{
    const value = 'new note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change' , {
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value)
})

test('should change amount with valid input' , () =>{
    const value = '123';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {
        target : {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

// test amount invalid input

test('should NOT change amount with invalid input' , () =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {
        target : { value : 'abc'}
    });
    expect(wrapper.state('amount')).toBe('')
})

test('should NOT change amount with invalid input' , () =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {
        target : { value : '12.122'}
    });
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission' , ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[3]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit' , {preventDefault : () => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[3].description,
        amount : expenses[3].amount,
        note : expenses[3].note,
        createdAt : expenses[3].createdAt
    })
})

test('should set new date on date change' , () =>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendarFocus equal true on calendar focus' , () =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused : true});
    expect(wrapper.state('calendarFocused')).toEqual(true)
})