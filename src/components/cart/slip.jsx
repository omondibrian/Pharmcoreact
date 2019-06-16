import React, { Component } from 'react';
class Slip extends Component {
    state = {  }
    render() { 
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
    <tr>
      <td> <img width={60} src="themes/images/products/4.jpg" alt /></td>
      <td>MASSA AST<br />Color : black, Material : metal</td>
      <td>
        <div className="input-append"><input className="span1" style={{maxWidth: 34}} placeholder={1} id="appendedInputButtons" size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
      </td>
      <td>$120.00</td>
      <td>$25.00</td>
      <td>$15.00</td>
      <td>$110.00</td>
    </tr>
    <tr>
      <td> <img width={60} src="themes/images/products/8.jpg" alt /></td>
      <td>MASSA AST<br />Color : black, Material : metal</td>
      <td>
        <div className="input-append"><input className="span1" style={{maxWidth: 34}} placeholder={1} size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
      </td>
      <td>$7.00</td>
      <td>--</td>
      <td>$1.00</td>
      <td>$8.00</td>
    </tr>
    <tr>
      <td> <img width={60} src="themes/images/products/3.jpg" alt /></td>
      <td>MASSA AST<br />Color : black, Material : metal</td>
      <td>
        <div className="input-append"><input className="span1" style={{maxWidth: 34}} placeholder={1} size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
      </td>
      <td>$120.00</td>
      <td>$25.00</td>
      <td>$15.00</td>
      <td>$110.00</td>
    </tr>
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


         );
    }
}
 
export default Slip;