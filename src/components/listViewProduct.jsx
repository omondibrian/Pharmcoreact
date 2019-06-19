import React, { Component } from 'react';
import{Link} from 'react-router-dom';
class ListVeiwProduct extends Component {
  state = { 
    productimage:this.props.productimage,
    title:this.props.title,
    description:this.props.description,
    price:this.props.price
}

render() { 
        return (
  <div>
    <div className="row">	  
      <div className="span2">
        <img src={this.state.productimage} alt={this.state.title} />
      </div>
      <div className="span4">
          <h3>New | Available</h3>				
          <hr className="soft" />
          <h5>{this.state.title} </h5>
          <p>
            {this.state.description}
          </p>
         <Link className="btn btn-small pull-right"to="/productsdetails">View Details</Link>
          <br className="clr" />
      </div>
      <div className="span3 alignR">
          <form className="form-horizontal qtyFrm">
            <h3> $ {this.state.price}</h3>
            <label className="checkbox">
              <input type="checkbox" />  Adds product to compair
            </label><br />
           <Link to="/productsdetails" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></Link>
           <Link to="/productsdetails" className="btn btn-large"><i className="icon-zoom-in" /></Link>
          </form>
        </div>
      </div>
      <hr className="soft" />
      </div> );
    }
}
 
export default ListVeiwProduct;