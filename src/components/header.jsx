import React, { Component } from 'react';

import Navbar from './navbar';


class Header extends Component {
 state={
   name:'brian'
 }
    render() { 
        return (
       <div id="header">
  <div className="container">
    <div id="welcomeLine" className="row">
      <div className="span6">Welcome!<strong>{this.state.name}</strong></div>
      <div className="span6">
        <div className="pull-right">
          <a href="product_summary.html"><span className>Fr</span></a>
          <a href="product_summary.html"><span className>Es</span></a>
          <span className="btn btn-mini">En</span>
          <a href="product_summary.html"><span>£</span></a>
          <span className="btn btn-mini">$155.00</span>
          <a href="product_summary.html"><span className>$</span></a>
          <a href="product_summary.html"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white" /> [ 3 ] Itemes in your cart </span> </a> 
        </div>
      </div>
    </div>
  </div>
  <Navbar />
  </div>
 
 );
    }
}
 
export default Header;