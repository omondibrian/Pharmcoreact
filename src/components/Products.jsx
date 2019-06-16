import React, { Component } from 'react';
class Product extends Component {
    state = {
      productimage:this.props.productimage,
      title:this.props.title,
      price:this.props.price
      }
   
    render() { 
        return ( 
<li className="span3">
  <div className="thumbnail">
    <i className="tag" />
    <a href="/productsdetails"><img src={this.state.productimage} alt /></a>
    <div className="caption">
      <h5>{this.state.title}</h5>
      <h4><a className="btn" href="/productsdetails">VIEW</a>
       <span className="pull-right">ksh.{this.state.price}</span></h4>
    </div>
  </div>
</li>
 );
    }
}
 
export default Product;