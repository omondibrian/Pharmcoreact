import React, { Component } from 'react';
import Header from '../components/header';
import Products from '../pages/jsonstorage/products.json';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
class Forgetpass extends Component {
    state = {  }
    Handlechange = (e) => {
      const {name,value} = e.target;
      this.setState({
        [name]:value
      });
    };
      handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
      }
    render() { 
        return ( 
          <div>
             <Header />
            <div id="mainBody">
            <div className="container">
            <div className="row">
              <Sidebar {...Products} />
        <div className="span9">
  <ul className="breadcrumb">
    <li><a href="index.html">Home</a> <span className="divider">/</span></li>
    <li className="active">Forget password?</li>
  </ul>
  <h3> FORGET YOUR PASSWORD?</h3>	
  <hr className="soft" />
  <div className="row">
    <div className="span9" style={{minHeight: 900}}>
      <div className="well">
        <h5>Reset your password</h5><br />
        Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.<br /><br /><br />
        <form onSubmit={this.handleSubmit}>
          <div className="control-group">
            <label className="control-label" htmlFor="email">E-mail address</label>
            <div className="controls">
              <input className="span3" onChange={this.Handlechange} type="text" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="controls">
            <button type="submit" className="btn block">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>	
</div>
</div>
</div>
</div>
<Footer />
</div>

         );
    }
}
 
export default Forgetpass;