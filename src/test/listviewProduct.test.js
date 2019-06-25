import React from 'react';
import {shallow} from 'enzyme';
import ListVeiwProduct from '../components/listViewProduct';
import{findByTestAtrr} from '../utils';
/*
testing the listView product component
*/
const Setup = (props={}) => {
    const Component = shallow(<ListVeiwProduct {...props}/>);
    return Component;
}


describe("LISTVIEW COMPONENT",()=>{
    describe('listView has props',()=>{
        let Component;
        beforeEach(()=>{
            const props = {
                id:1,
                productimage:'themes/images/products/3.jpg',
                title:'Fujifilm FinePix S2950 Digital Camera',
                description:"14 Megapixels. 18.0 x Optical Zoom. 3.0-inch LCD Screen.",
                price:100,
                discount:150,
                tax:200,
            };
            Component= Setup(props);
        })
        it('should render without errors',()=>{
            const wrapper = findByTestAtrr(Component,'listview');
            expect(wrapper.length).toBe(1);
        });
        it('should render an image',() =>{
            const wrapper = findByTestAtrr(Component,'imgTest');
            expect(wrapper.length).toBe(1); 
        })
        it('should render a title',() =>{
            const wrapper = findByTestAtrr(Component,'title');
            expect(wrapper.length).toBe(1); 
        })
        it('should render a description of the product',() =>{
            const wrapper = findByTestAtrr(Component,'desc');
            expect(wrapper.length).toBe(1); 
        })
        it('should render the price',() =>{
            const wrapper = findByTestAtrr(Component,'price');
            expect(wrapper.length).toBe(1); 
        })
    });

    describe('listView has No props',()=>{
        let Component;
        beforeEach(() => {
            Component= Setup();
        });
        it('should render null',()=>{
            const wrapper = findByTestAtrr(Component,'listview');
            expect(wrapper.length).toBe(0);
        });

    });
   

});
 
   