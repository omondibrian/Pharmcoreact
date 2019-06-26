import React, { Component } from 'react';
import SlipContent from './slipContent';
class Slip extends Component {

  render() { 
      console.log('slip props',this.props)
      const productlist=this.props.cart.map( product =><SlipContent key={product.id}
         {...this.props} {...product} />)
      if(productlist.length) 
      return ( 
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity/Update</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
        {productlist}
          <tr>
              <td colSpan={6} style={{textAlign: 'right'}}>Total Price:	</td>
              <td> $228.00</td>
            </tr>
            <tr>
              <td colSpan={6} style={{textAlign: 'right'}}>Total Discount:	</td>
              <td> $50.00</td>
            </tr>
            <tr>
              <td colSpan={6} style={{textAlign: 'right'}}>Total Tax:	</td>
              <td> $31.00</td>
            </tr>
            <tr>
              <td colSpan={6} style={{textAlign: 'right'}}><strong>TOTAL ($228 - $50 + $31) =</strong></td>
              <td className="label label-important" style={{display: 'block'}}> <strong> $155.00 </strong></td>
            </tr>
          </tbody>
        </table>
         )
         else
         return(
           <div>
            <h4> no products selected yet pliz continue shopping</h4>
           </div>
         )
         ;
    }
}
 
export default Slip;