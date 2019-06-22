import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Link from './links';
class Sidebar extends Component {
  
  
    render() { 
      const links = this.props.electronics.map( (product,index) =><Link key={index} {...product}/>);
     
        return (
      <div id="sidebar" className="span3">
           <div className="well well-small">
              <NavLink id="myCart" to="/productssummary">
                <img src="themes/images/ico-cart.png" alt="cart" />
               [{this.props.cart.length}]Items in your cart 
                <span className="badge badge-warning pull-right">$155.00</span>
              </NavLink>
           </div>
        <ul id="sideManu" className="nav nav-tabs nav-stacked">
          <li className="subMenu open"><h5> ELECTRONICS [{this.props.electronics.length}]</h5>
            <ul>
             {links} 
            </ul>
          </li>
          <li className="subMenu"><h5> CLOTHES [840] </h5>
            <ul style={{display: 'none'}}>
              <li><a href="/products"><i className="icon-chevron-right" />Women's Clothing (45)</a></li>
              <li><a href="/products"><i className="icon-chevron-right" />Women's Shoes (8)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />Women's Hand Bags (5)</a></li>	
              <li><a href="/products"><i className="icon-chevron-right" />Men's Clothings  (45)</a></li>
              <li><a href="/products"><i className="icon-chevron-right" />Men's Shoes (6)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />Kids Clothing (5)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />Kids Shoes (3)</a></li>												
            </ul>
          </li>
          <li className="subMenu"><h5>FOOD AND BEVERAGES [1000]</h5>
            <ul style={{display: 'none'}}>
              <li><a href="/products"><i className="icon-chevron-right" />Angoves  (35)</a></li>
              <li><a href="/products"><i className="icon-chevron-right" />Bouchard Aine &amp; Fils (8)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />French Rabbit (5)</a></li>	
              <li><a href="/products"><i className="icon-chevron-right" />Louis Bernard  (45)</a></li>
              <li><a href="/products"><i className="icon-chevron-right" />BIB Wine (Bag in Box) (8)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />Other Liquors &amp; Wine (5)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />Garden (3)</a></li>												
              <li><a href="/products"><i className="icon-chevron-right" />Khao Shong (11)</a></li>												
            </ul>
          </li>
          <li><a href="/products">HEALTH &amp; BEAUTY [{this.props.healthbeuty.length}]</a></li>
          <li><a href="/products">SPORTS &amp; LEISURE [58]</a></li>
          <li><a href="/products">BOOKS &amp; ENTERTAINMENTS [14]</a></li>
        </ul>
        <br />
        
        <div className="thumbnail">
          <img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods" />
          <div className="caption">
            <h5>Payment Methods</h5>
          </div>
        </div>
      </div>
        );
    }
}



export default Sidebar;