import React, { Component } from 'react';
import ListVeiwProduct from './listViewProduct';

class Listveiw extends Component {
    
    render() { 
        const Listitems =this.props.products.map((product) => <ListVeiwProduct key={product.id} {...product} addtocart={this.props.addToCart} />)
        return ( 
            <div className="tab-pane active" >
               {Listitems}
            </div>
         );
    }
}
 
export default Listveiw;