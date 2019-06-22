import { FETCH_PRODUCTS,ADD_TO_CART,INCREASE_QTY_OF_PRODUCT_IN_CART,
    DECREASE_QTY_OF_PRODUCT_IN_CART,DELETE_PRODUCT_IN_CART} from '../actions/types';
const initialstate={
    products:[],
    electronics:[],
    healthbeuty:[],
    cart:[]
       
}

export default function (state=initialstate,action){
switch(action.type){
    case FETCH_PRODUCTS:
        return{
            ...state,
            products:action.products,
            electronics:action.electronics,
            healthbeuty:action.healthbeuty
        }
    case ADD_TO_CART:
            let existingProduct=state.cart.filter( product => product.id === action.product.id);
            if(existingProduct.length > 0){
                let withoutExistingProduct = state.cart.filter(
                    product => product.id !== action.product.id
                )
                let updatedProduct ={
                    ...existingProduct[0],
                    qty:existingProduct[0].qty +1
                }
                return{
                    ...state,
                    cart:[...withoutExistingProduct,updatedProduct]
                }
            }
            else{
                const NewProduct = {
                    ...action.product,
                    qty:1
                }
                const new_cart = [...state.cart,NewProduct]
                return{
                    ...state,
                    cart:new_cart
                }
            }
       
    case INCREASE_QTY_OF_PRODUCT_IN_CART:
             existingProduct=state.cart.filter( product => product.id === action.id);
            if(existingProduct.length > 0){
                const withoutExistingProduct = state.cart.filter(
                    product => product.id !== action.id
                )
                const updatedProduct ={
                    ...existingProduct[0],
                    qty:existingProduct[0].qty +1
                }
                return{
                    ...state,
                    cart:[...withoutExistingProduct,updatedProduct]
                }
            }
        case DECREASE_QTY_OF_PRODUCT_IN_CART:
                existingProduct=state.cart.filter( product => product.id === action.id);
                if(existingProduct.length > 0){
                    const withoutExistingProduct = state.cart.filter(
                        product => product.id !== action.id
                    )
                    const updatedProduct ={
                        ...existingProduct[0],
                        qty:existingProduct[0].qty -1
                    }
                    return{
                        ...state,
                        cart:[...withoutExistingProduct,updatedProduct]
                    }
                }
        case DELETE_PRODUCT_IN_CART:
            const updatedProductFromCart = state.cart.filter( product => product.id !== action.id);
            return{
                updatedProductFromCart
            }
        default:
            return state;
        }
    }






