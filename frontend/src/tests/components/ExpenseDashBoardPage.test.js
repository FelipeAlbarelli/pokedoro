import {shallow} from 'enzyme'
import React from 'react'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';

test("should render ExpenseDashBoardPage" , () => {
    const wrapped = shallow(<ExpenseDashBoardPage />)
    expect(wrapped).toMatchSnapshot()
})