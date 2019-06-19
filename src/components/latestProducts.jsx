import React, { Component } from 'react';
import Products from './Products';
class LatestProducts extends Component {
    state = { Productslist:this.props.products }
    render() { 
        const {Productslist} = this.state;
        console.log(Productslist)
        const latest = Productslist.map( product => <Products key={product.id} {...product} />)
        return ( 
            <div>
                <h4>Latest Products </h4>
                <ul class="thumbnails">
                    {latest}
                </ul>	
            </div>
         );
    }
}
 
export default LatestProducts;