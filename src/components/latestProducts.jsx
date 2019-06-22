import React, { Component } from 'react';
import Products from './Products';
class LatestProducts extends Component {
    
    render() { 
        
        const latest = this.props.products.map( product => <Products key={product.id} {...product} />)
        return ( 
            <div className='span9'>
                <h4>Latest Products </h4>
                <ul className="thumbnails">
                    {latest}
                </ul>	
            </div>
         );
    }
}
 
export default LatestProducts;