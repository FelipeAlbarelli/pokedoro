import React from 'react';
import Header  from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'

// test('should render Header correctly' , () =>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />)
//     console.log(renderer.getRenderOutput())
// })

test('should render Header correctly' , () => {
    const wrapper = shallow(<Header />);
    expect((wrapper)).toMatchSnapshot();
})





