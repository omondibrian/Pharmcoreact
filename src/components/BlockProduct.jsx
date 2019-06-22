import React, { Component } from 'react';
import{Link} from 'react-router-dom';
class BlockProduct extends Component {
    state = { 
        productimage:this.props.productimage,
        title:this.props.title,
        description:this.props.description,
        price:this.props.price,
        discount:this.props.discount,
        tax:this.props.tax,
        id:this.props.id
    }
    render() { 
       
        return (   
     <li className="span3">
        <div className="thumbnail">
         <Link to="/productsdetails"><img src={this.state.productimage} alt={this.state.title}/></Link>
          <div className="caption">
            <h5>{this.state.title}</h5>
            <p> 
            {this.state.description}
            </p>
            <h4 style={{textAlign: 'center'}}><Link className="btn"
             to="/productdetails"> <i className="icon-zoom-in" /></Link><button className="btn" onClick={()=>this.props.addToCart(this.state)} >Add to <i className="icon-shopping-cart" /></button><button className="btn btn-primary"
             >€{this.state.price}</button></h4>
          </div>
        </div>
      </li> );
    }
}
 
export default BlockProduct;