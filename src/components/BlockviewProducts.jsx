import React, { Component } from 'react';
import BlockProduct from './BlockProduct';
class BlockVeiwProducts extends Component {
    state = { 
        products:this.props.products
     }
    
  
    render() { 
        const {products}=this.state;
        const blockitems= products.map(product => <BlockProduct {...product} />)
         return ( 
            <div className="tab-pane  active" id="blockView">
                <ul className="thumbnails">
                   {blockitems} 
                </ul>
            </div>
         );
    }
}
 
export default BlockVeiwProducts;