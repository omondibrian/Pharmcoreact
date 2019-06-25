import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr} from '../utils'
import Footer from '../components/footer';

const setupfooter = ()=>{
    let component = shallow(<Footer/>);
    return component;
}
describe('FOOTER COMPONENT',()=>{
    let footer;
    beforeEach(()=>{
    footer=setupfooter();
    })
    it('should renders without error',()=>{
        let wrapper = findByTestAtrr(footer,'footer');
        expect(wrapper.length).toBe(1)
    })
    it('should display the appropriate links tabs',()=>{
        let footerTabs = findByTestAtrr(footer,'links');
        expect(footerTabs.length).toBe(3)
    })
    it('should render the appropriate icons',()=>{
        let icons =  findByTestAtrr(footer,'icons');
        expect(icons.length).toBe(1)
    })
})
