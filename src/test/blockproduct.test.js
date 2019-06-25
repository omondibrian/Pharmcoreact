import React from 'react';
import {shallow} from 'enzyme';

import{findByTestAtrr} from '../utils';
import BlockProduct from '../components/BlockProduct';

 const setupblock = (props={}) =>{
     let componet = shallow(<BlockProduct {...props}/>)
     return componet;
 }

 describe('BlockVeiwProduct',()=>{
     describe('BlockVeiwProduct has props',()=>{
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
            Component= setupblock(props);
        });
        it('should render without errors',()=>{
            const BlocProductWrapper = findByTestAtrr(Component,'blockproduct');
            expect(BlocProductWrapper.length).toBe(1);
        });
        it('should render a product image',()=>{
            const proImage = findByTestAtrr(Component,'productimage');
            expect(proImage.length).toBe(1);
        })
        it('should render the title',()=>{
            const proTitle = findByTestAtrr(Component,'title');
            expect(proTitle.length).toBe(1);
        })
        it('should render the description',()=>{
            const proDesc= findByTestAtrr(Component,'desc');
            expect(proDesc.length).toBe(1);
        })
        it('should render the price',()=>{
            const proPrice = findByTestAtrr(Component,'price');
            expect(proPrice.length).toBe(1);
        })
     });
     describe('BlockView product has no props passed',()=>{
         let Component;
         beforeEach(()=>{
            Component = setupblock();
         })
         it('should not render anything',()=>{
             const wrapper = findByTestAtrr(Component,'blockproduct');
             expect(wrapper.length).toBe(0);
         })
     })

 });