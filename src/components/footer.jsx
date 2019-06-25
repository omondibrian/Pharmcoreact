import React, { Component } from 'react';
import {Link} from "react-router-dom";
/**
|--------------------------------------------------
| footer component
|--------------------------------------------------
*/
class Footer extends Component {
  
    render() { 
        return ( 
           
<div id="footerSection" data-test='footer'>
  <div className="container">
    <div className="row">
      <div className="span3" data-test='links'>
        <h5>ACCOUNT</h5>
        <Link to="/login">YOUR ACCOUNT</Link>
        <Link to="login.html">PERSONAL INFORMATION</Link>  
        <Link to="/products">ORDER HISTORY</Link>
      </div>
      <div className="span3"data-test='links'>
        <h5>INFORMATION</h5>
        <Link to="/contact">CONTACT</Link>  
        <Link to="/registration">REGISTRATION</Link>  
        <Link to="/faq">FAQ</Link>
      </div>
      <div className="span3" data-test='links'>
        <h5>OUR OFFERS</h5>
        <Link to="/products">NEW PRODUCTS</Link> 
        <Link to="/specialoffer">SPECIAL OFFERS</Link>  
        <Link to='/'>SUPPLIERS</Link> 
      </div>
      <div id="socialMedia" className="span3 pull-right" data-test='icons'>
        <h5>SOCIAL MEDIA </h5>
        <Link to='/' ><img width={60} height={60} src="themes/images/facebook.png" title="facebook" alt="facebook" /></Link>
        <Link to='/'><img width={60} height={60} src="themes/images/twitter.png" title="twitter" alt="twitter" /></Link>
        <Link to='/'><img width={60} height={60} src="themes/images/youtube.png" title="youtube" alt="youtube" /></Link>
      </div> 
    </div>
    <p className="pull-right">© Pharmco</p>
  </div></div>

         );
    }
}
 
export default Footer;