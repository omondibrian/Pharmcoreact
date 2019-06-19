import { FETCH_PRODUCTS } from "../actions/types";

const initialstate = {
    products:null,
    electronics:null,
    healthbeuty:null
    
}

export default function  (state = initialstate,action) {
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
                ...state,
                products:action.products,
                
            }
        default:
            return state;
    }
}