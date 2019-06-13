import React, { Component } from 'react';
class Product extends Component {
    state = {  }
    render() { 
        return ( 
<li className="span3">
  <div className="thumbnail">
    <i className="tag" />
    <a href="product_details.html"><img src="themes/images/products/b2.jpg" alt /></a>
    <div className="caption">
      <h5>Product name</h5>
      <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
    </div>
  </div>
</li>
 );
    }
}
 
export default Product;