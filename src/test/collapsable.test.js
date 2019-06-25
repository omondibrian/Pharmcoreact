import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr} from '../utils';
import Collapsable from '../components/collapsable';

const setupCollapsableComponent = (props={}) =>{
    let component = shallow(<Collapsable {...props}/>);
    return component;
}

describe('COLLAPSABLE COMPONENT',()=>{
    describe('collapsable component is passed props',()=>{
        let Collapse ;
        beforeEach(()=>{
            const props ={
                quiz:'niaje baby girl',
                answer:'ninapenda kuzurura'
            }
            Collapse=setupCollapsableComponent(props);
        })
        it('should render without errors',()=>{
            const wrapper = findByTestAtrr(Collapse,'wrapper');
            expect(wrapper.length).toBe(1)
        })
        it('should render the quiz',()=>{
            const quiz = findByTestAtrr(Collapse,'quiz');
            expect(quiz.length).toBe(1)
        })
        it('should render the answer',()=>{
            const answer = findByTestAtrr(Collapse,'answer');
            expect(answer.length).toBe(1)
        })
    })
})