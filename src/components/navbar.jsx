import React, { Component } from 'react';
import LoginForm from './login';
import{Link} from 'react-router-dom';
class Navbar extends Component {
    
    render() { 
        return ( 
        <div id="logoArea" className="navbar">
 <Link to="/" id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </Link>
  <div className="navbar-inner">
   <Link className="brand" to="/">PHARMCO</Link>
    <form className="form-inline navbar-search" method="post" action="products.html">
      <input id="srchFld" className="srchTxt" type="text" />
      <select className="srchTxt">
        <option>All</option>
        <option>CLOTHES </option>
        <option>FOOD AND BEVERAGES </option>
        <option>HEALTH &amp; BEAUTY </option>
        <option>SPORTS &amp; LEISURE </option>
        <option>BOOKS &amp; ENTERTAINMENTS </option>
      </select> 
      <button type="submit" id="submitButton" className="btn btn-primary">Go</button>
    </form>
    <ul id="topMenu" className="nav pull-right">
      <li ><Link to="/specialoffer">Specials Offer</Link></li>
      <li ><Link to="/contact">Contact</Link></li>
      <li >
       <Link to="#login" role="button" data-toggle="modal" style={{paddingRight: 0}}><span className="btn btn-large btn-success">Login</span></Link>
        <div id="login" className="modal hide fade in" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="false">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h3>Login Block</h3>
          </div>
          <div className="modal-body">
           <LoginForm />	
            <button type="submit" className="btn btn-success">Sign in</button>
            <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
 );
    }
}
 
export default Navbar;
