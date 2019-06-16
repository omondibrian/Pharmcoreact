import React, { Component } from 'react';
class Sidebar extends Component {
  state = { 
    electronics:this.props.electronics,
    healthbeuty:this.props.healthbeuty
 }

    render() { 
     const{electronics}=this.state
     
        return (
      <div id="sidebar" className="span3">
        <div className="well well-small"><a id="myCart" href="/productssummary"><img src="themes/images/ico-cart.png" alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a></div>
        <ul id="sideManu" className="nav nav-tabs nav-stacked">
          <li className="subMenu open"><h5> ELECTRONICS [{this.state.electronics.length}]</h5>
            <ul>
              <li><a className="active" href="/products"><i className="icon-chevron-right" />Cameras ({electronics[0].camera}) </a></li>
              <li><a href="/products"><i className="icon-chevron-right" />Computers, Tablets &amp; laptop ({electronics[3].tablets})</a></li>
              <li><a href="/products"><i className="icon-chevron-right" />Mobile Phone ({electronics[1].mobilephone})</a></li>
              <li><a href="/products"><i className="icon-chevron-right" />Sound &amp; Vision ({electronics[2].soundvision})</a></li>
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
          <li><a href="/products">HEALTH &amp; BEAUTY [{this.state.healthbeuty.length}]</a></li>
          <li><a href="/products">SPORTS &amp; LEISURE [58]</a></li>
          <li><a href="/products">BOOKS &amp; ENTERTAINMENTS [14]</a></li>
        </ul>
        <br />
        <div className="thumbnail">
          <img src="themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera" />
          <div className="caption">
            <h5>Panasonic</h5>
            <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
          </div>
        </div><br />
        <div className="thumbnail">
          <img src="themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
          <div className="caption">
            <h5>Kindle</h5>
            <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
          </div>
        </div><br />
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