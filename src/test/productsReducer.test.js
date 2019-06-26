import { FETCH_PRODUCTS,ADD_TO_CART,INCREASE_QTY_OF_PRODUCT_IN_CART,
    DECREASE_QTY_OF_PRODUCT_IN_CART,DELETE_PRODUCT_IN_CART} from '../redux/actions/types';

import productsReducer from '../redux/reducers/productsReducer';
import productsjson from '../redux/jsonstorage/products.json';
describe('ProductsReducer',()=>{
    it('should return default state',()=>{
        const newstate = productsReducer(undefined,{});
        expect(newstate).toEqual({
            products:[],
            electronics:[],
            healthbeuty:[],
            cart:[]
               
        });
    })
    it('should return products when fetch product is fired',()=>{
        const products = productsjson.products;
        const electronics = productsjson.electronics;
        const healthbeuty = productsjson.healthbeuty;
    
        const newstate = productsReducer(undefined,{
            type:FETCH_PRODUCTS,
            products,
            electronics,
            healthbeuty,
        });
        expect(newstate).toEqual({
            products,
            electronics,
            healthbeuty,
            cart:[]
        })

    })
    const product =    {   
        id:1,
        productimage:"themes/images/products/3.jpg",
        title:" techno",
        description:"  I'm a paragraph. Click here ",
        price:222.00,
        qtyinstock:100,
        discount:25,
        tax:15,
        category:"electronics",
        subcategory:"mobile phone"
    }   
    it('should add a new product when triggered to the cart',()=>{
        
        const qty = 1
        const newProduct = {...product,qty}
        const newstate = productsReducer(undefined,{
            type:ADD_TO_CART,
            product
        })
        expect(newstate).toEqual({
            products:[],
            electronics:[],
            healthbeuty:[],
            cart:[newProduct]
            
        })
})  
 let qty=1;     
 const newProduct = {...product,qty}
 const currentState={
        products:[],
        electronics:[],
        healthbeuty:[],
        cart:[newProduct]     
    }

    it('should increament a product qty when triggered',()=>{
        const newstate = productsReducer(currentState,{
            type:INCREASE_QTY_OF_PRODUCT_IN_CART,
            id:1
        })
        const updatedproduct = {...newProduct,qty:newProduct.qty +1}
        expect(newstate).toEqual({
            products:[],
            electronics:[],
            healthbeuty:[],
            cart:[updatedproduct]
                  
        })
    })
})