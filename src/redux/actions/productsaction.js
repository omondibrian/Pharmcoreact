import { FETCH_PRODUCTS } from "./types";

import Productsjson from '../jsonstorage/products.json'

export const fetchProducts = () => dispatch => {
   
        //make http calls to backend system
        dispatch({
            type:FETCH_PRODUCTS,
            products:Productsjson.products,
            electronics:Productsjson.electronics,
            healthbeuty:Productsjson.healthbeuty
       
        })
    
}