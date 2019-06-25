import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr} from '../utils';
import Link from '../components/links';

const setuplatestproducts = () =>{
    let component = shallow(<Link />);
    return component;
}
describe('LATESTPRODUCT',()=>{
    let lproducts;
    beforeEach(()=>{
        lproducts = setuplatestproducts();
    })
    it('should renders without errors',()=>{
        const wrapper =findByTestAtrr(lproducts,'latestproducts');
        expect(wrapper.length).toBe(0)
    })
})
