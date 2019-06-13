import React, { Component } from 'react';
import Products from './Products';
class LatestProducts extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h4>Latest Products </h4>
                <ul class="thumbnails">
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                </ul>	
            </div>
         );
    }
}
 
export default LatestProducts;