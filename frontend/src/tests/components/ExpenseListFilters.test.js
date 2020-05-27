import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters' 

let wrapper , setTextFilter , sortByDate , sortByAmount;

const filters = {
    text : "",
    sortBy : 'date'
}

const altFilters = {
    text : 'some text',
    sortBy : 'amount'
}

beforeEach( () => {
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setTextFilter={setTextFilter}
        />
    )
} )

test('should render ExpenseListFilters correctly' , () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altFilters correctly' , () =>{
    wrapper.setProps({
        filters : altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

// text change , sortByAmount , sortByDate

test('should call setTextFilter on textChange' , ()=>{
    wrapper.find('input').simulate('change' , {target : { value : 'some str' }});
    expect(setTextFilter).toHaveBeenLastCalledWith('some str')
})

test('should call sortyAmount on selectChange' , () => {
    wrapper.find('select').simulate('change' , {target : {value : 'amount'}});
    expect(sortByAmount).toHaveBeenCalled()
})

test('should call sortyDate on selectChange' , () => {
    wrapper.find('select').simulate('change' , {target : {value : 'date'}})
    expect(sortByDate).toHaveBeenCalled()
})

