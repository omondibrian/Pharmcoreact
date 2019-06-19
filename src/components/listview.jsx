import React, { Component } from 'react';
import ListVeiwProduct from './listViewProduct';

class Listveiw extends Component {
    state = { 
       products:this.props.products
    }
   
    render() { 
        const {products}=this.state;
        const Listitems = products.map((product) => <ListVeiwProduct key={product.id} {...product} />)
        return ( 
            <div className="tab-pane active" >
               {Listitems}
            </div>
         );
    }
}
 
export default Listveiw;