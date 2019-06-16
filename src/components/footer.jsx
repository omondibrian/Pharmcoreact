import React, { Component } from 'react';

class Footer extends Component {
  
    render() { 
        return ( 
           
<div id="footerSection">
  <div className="container">
    <div className="row">
      <div className="span3">
        <h5>ACCOUNT</h5>
        <a href="/login">YOUR ACCOUNT</a>
        <a href="login.html">PERSONAL INFORMATION</a>  
        <a href="/products">ORDER HISTORY</a>
      </div>
      <div className="span3">
        <h5>INFORMATION</h5>
        <a href="/contact">CONTACT</a>  
        <a href="/registration">REGISTRATION</a>  
        <a href="/faq">FAQ</a>
      </div>
      <div className="span3">
        <h5>OUR OFFERS</h5>
        <a href="/products">NEW PRODUCTS</a> 
        <a href="/specialoffer">SPECIAL OFFERS</a>  
        <a href="#">SUPPLIERS</a> 
      </div>
      <div id="socialMedia" className="span3 pull-right">
        <h5>SOCIAL MEDIA </h5>
        <a href="#"><img width={60} height={60} src="themes/images/facebook.png" title="facebook" alt="facebook" /></a>
        <a href="#"><img width={60} height={60} src="themes/images/twitter.png" title="twitter" alt="twitter" /></a>
        <a href="#"><img width={60} height={60} src="themes/images/youtube.png" title="youtube" alt="youtube" /></a>
      </div> 
    </div>
    <p className="pull-right">© Pharmco</p>
  </div></div>

         );
    }
}
 
export default Footer;