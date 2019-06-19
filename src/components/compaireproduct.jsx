import React, { Component } from 'react';
class Compaireproduct extends Component {
    state = {  }
    render() { 
        return ( 
        <table id="compairTbl" className="table table-bordered">
        <thead>
            <tr>
            <th>Features</th>
            <th>Product1 name here </th>
            <th>Product2 name here</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>&nbsp;</td>
            <td style={{textAlign: 'center'}}>
            <p className="justify">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quae?
            </p>
            <img src="themes/images/products/1.jpg" alt={Math.random()} />
            <form className="form-horizontal qtyFrm">
            <h3> $222.00</h3><br />
            <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
            <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
            </form>
            </td>
            <td>
            <p className="justify">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam voluptate quasi saepe itaque voluptas.
            </p>
            <img src="themes/images/products/3.jpg" alt={Math.random()} />
            <form className="form-horizontal qtyFrm">
            <h3> $190.00</h3>
            <br />
            <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
            <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
            </form>
        </td>
    </tr>
    <tr>
      <td>Height</td>
      <td>2"</td>
      <td>2"</td>
    </tr>
    <tr>
      <td>Deepth</td>
      <td>5"</td>
      <td>5"</td>
    </tr>
    <tr>
      <td>Dimension</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Width</td>
      <td>6.5"</td>
      <td>6.5"</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>0.5kg</td>
      <td>0.5kg</td>
    </tr>
  </tbody>
</table>
	
         );
    }
}
 
export default Compaireproduct;