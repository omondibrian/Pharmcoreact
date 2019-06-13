import React, { Component } from 'react';
class ListVeiwProduct extends Component {
  state = { 
    productimage:this.props.productimage,
    title:this.props.title,
    description:this.props.description,
    price:this.props.price
}
componentDidMount(){
  console.log("listProduct mounted")
}
render() { 
        return (
  <div>
    <div className="row">	  
      <div className="span2">
        <img src={this.state.productimage} alt='product' />
      </div>
      <div className="span4">
          <h3>New | Available</h3>				
          <hr className="soft" />
          <h5>{this.state.title} </h5>
          <p>
            {this.state.description}
          </p>
          <a className="btn btn-small pull-right" href="product_details.html">View Details</a>
          <br className="clr" />
      </div>
      <div className="span3 alignR">
          <form className="form-horizontal qtyFrm">
            <h3> $ {this.state.price}</h3>
            <label className="checkbox">
              <input type="checkbox" />  Adds product to compair
            </label><br />
            <a href="product_details.html" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
            <a href="product_details.html" className="btn btn-large"><i className="icon-zoom-in" /></a>
          </form>
        </div>
      </div>
      <hr className="soft" />
      </div> );
    }
}
 
export default ListVeiwProduct;