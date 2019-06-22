import React, { Component } from 'react';
import {connect} from 'react-redux'
import {  fetchProducts   } from '../redux/actions/productsaction'
class Product extends Component {
  componentWillMount(){
    this.props.fetchProducts();
 }
   
    render() { 
      
        return ( 
<li className="span3">
  <div className="thumbnail">
    <i className="tag" />
    <a href="/productsdetails"><img src={this.props.productimage} alt={this.props.title} /></a>
    <div className="caption">
      <h5>{this.props.title}</h5>
      <h4><a className="btn" href="/productsdetails">VIEW</a>
       <span className="pull-right">ksh.{this.props.price}</span></h4>
    </div>
  </div>
</li>
 );
    }
}
 //all the required props are maped from the current state of the store
const MapStateToProps = (state) =>({
  products:state.products.products,
  electronics:state.products.electronics,
   healthbeuty:state.products.healthbeuty
})
export default connect(MapStateToProps,{fetchProducts})( Product);