import { FETCH_PRODUCTS,ADD_TO_CART,INCREASE_QTY_OF_PRODUCT_IN_CART,
 DECREASE_QTY_OF_PRODUCT_IN_CART,DELETE_PRODUCT_IN_CART} from './types';
import Json from '../jsonstorage/products.json'
///fetch products from the external database  and initialises the redux
///store
export const fetchProducts = () => dispatch =>{
       const products = Json.products;
       const electronics = Json.electronics;
       const healthbeuty = Json.healthbeuty;
        dispatch({
            type:FETCH_PRODUCTS,
            products:products,
            electronics,
            healthbeuty
        })
}
////add the selected product to the cart
export const addToCart = (product) => dispatch =>{
    dispatch({
        type:ADD_TO_CART,
        product:product
    })
}
///add quantity of a product
export const IncreamentProduct = id => dispatch =>{
    dispatch({
        type:INCREASE_QTY_OF_PRODUCT_IN_CART,
        id
    })
}
///decrease quantity of a product
export const decreaseQuantityOfProduct = id => dispatch =>{
    dispatch({
        type:DECREASE_QTY_OF_PRODUCT_IN_CART,
        id
    })
}
///delete the product from the cart
export const deleteProductFromCart = id => dispatch =>{
    dispatch({
        type:DELETE_PRODUCT_IN_CART,
        id
    })
}
