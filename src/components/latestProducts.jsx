import React, { Component } from 'react';
import Products from './Products';
class LatestProducts extends Component {
    state = { Productslist:this.props.products }
    render() { 
        const {Productslist} = this.state;
        const latest = Productslist.map( product => <Products {...product} />)
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