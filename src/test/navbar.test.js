import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr} from '../utils';
import Navbar from '../components/navbar';


const setupnavbar =()=>{
    let componet = shallow(<Navbar/>)
    return componet;
}
describe('NAVIGATION BAR COMPONENT',()=>{
    describe('navbar has props',()=>{
        let Component;
        beforeEach(()=>{
            Component = setupnavbar();
        })
        it('should render the navbar without errors',()=>{
            const navwrapper = findByTestAtrr(Component,'navbar');
            expect(navwrapper.length).toBe(1)
        })
        it('should render the links',()=>{
            const navLinks =findByTestAtrr(Component,'links');
            expect(navLinks.length).toBe(1)
        })
        it('should render the brand logo',()=>{
            const brandLogo = findByTestAtrr(Component,'brand');
            expect(brandLogo.length).toBe(1)
        })
        it('should render the form',()=>{
            const NavForm = findByTestAtrr(Component,'form');
            expect(NavForm.length).toBe(1);
        })
        it('should render the speial and contact links',()=>{
            const navSpecial = findByTestAtrr(Component,'specialandcontact');
            expect(navSpecial.length).toBe(1)
        })
        it('should render the log in button',()=>{
            const login = findByTestAtrr(Component,'login');
            expect(login.length).toBe(1)
        })
    })
})