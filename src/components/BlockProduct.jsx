import React, { Component } from 'react';
class BlockProduct extends Component {
    state = { 
        productimage:this.props.productimage,
        title:this.props.title,
        description:this.props.description,
        price:this.props.price
    }
    render() { 
       
        return (   
     <li className="span3">
        <div className="thumbnail">
          <a href="product_details.html"><img src={this.state.productimage} alt='image' /></a>
          <div className="caption">
            <h5>{this.state.title}</h5>
            <p> 
            {this.state.description}
            </p>
            <h4 style={{textAlign: 'center'}}><a className="btn"
             href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary"
             href="#">€{this.state.price}</a></h4>
          </div>
        </div>
      </li> );
    }
}
 
export default BlockProduct;