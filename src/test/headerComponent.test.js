import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr} from '../utils';
import Header from '../components/header';

 const setupHeadercomponent = () =>{
     let component = shallow(<Header  />);
     return component;
 }
 describe('HEADER COMPONENT',()=>{
     describe('header with props passed',()=>{
         let header;
         beforeEach(()=>{
             header= setupHeadercomponent();
         })
         it('should render without errors',()=>{
             let headWrapper = findByTestAtrr(header,'wrapper');
             expect(headWrapper.length).toBe(1)
         })
         it('should display the user name',()=>{
             let userName = findByTestAtrr(header,'username');
             expect(userName.length).toBe(1)
         })
     })
 })