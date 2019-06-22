import React, { Component } from 'react';
import BlockProduct from './BlockProduct';
class BlockVeiwProducts extends Component {
    
  
    render() { 
        
        const blockitems=this.props.products.map(product => <BlockProduct key={product.id} {...product} {...this.props} />)
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