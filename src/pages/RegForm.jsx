import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Products from '../pages/jsonstorage/products.json';
class RegistrationForm extends Component {
    state = { title:null,
              firstname:null,
              lastname:null,
              email:null,
              password:null,
              dateofbirth:null,
              company:null,
              address:null,
              address2:null,
              city:null,
              state:null,
              zip_postalcode:null,
              country:null,
              additionalinformation:null,
              homepage:null,
              mobilephone:null,
    }
   
    Onclick=(e)=>{
      console.log(e.target.name+" "+e.target.value);
      const {name,value} = e.target;
      this.setState({
        [name]:value
      })
    }
    Onsubmit =(e) =>{
      console.log('clicked',this.state)
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state)
    }
    render() { 
        return ( 
       <div>
           <Header />
  <div name="mainBody">
    <div classname="container">
      <div classname="row">
          <Sidebar {...Products} />
         <div className="span9">

        <ul className="breadcrumb">
          <li><a href="/">Home</a> <span className="divider">/</span></li>
          <li className="active">Registration</li>
        </ul>
        <h3> Registration</h3>	
        <div className="well">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <h4>Your personal information</h4>
            <div className="control-group">
              <label className="control-label">Title <sup>*</sup></label>
              <div className="controls">
                <select className="span1" name="days">
                  <option value>-</option>
                  <option value={1}>Mr.</option>
                  <option value={2}>Mrs</option>
                  <option value={3}>Miss</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="firstname">First name <sup>*</sup></label>
              <div className="controls">
                <input type="text" name="firstname" placeholder="First Name" onChange={this.Onclick} />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="lastname">Last name <sup>*</sup></label>
              <div className="controls">
                <input type="text" name="lastname" onChange={this.Onclick} placeholder="Last Name" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="email">Email <sup>*</sup></label>
              <div className="controls">
                <input type="text" name="email" onChange={this.Onclick}  placeholder="Email" />
              </div>
            </div>	  
            <div className="control-group">
              <label className="control-label" htmlFor="password">Password <sup>*</sup></label>
              <div className="controls">
                <input type="password" name="password"onChange={this.Onclick} placeholder="Password" />
              </div>
            </div>	  
            <div className="control-group">
              <label className="control-label" >Date of Birth <sup>*</sup></label>
              <div className="controls">
                <select className="span1" name="dateofbirth">
                  <option value>-</option>
                  
                  <option value={1}>1&nbsp;&nbsp;</option>
                  <option value={2}>2&nbsp;&nbsp;</option>
                </select>
                <select className="span1" name="days">
                  <option value>-</option>
                  <option value={1}>1&nbsp;&nbsp;</option>
                  <option value={2}>2&nbsp;&nbsp;</option>
                </select>
                <select className="span1" name="days">
                  <option value>-</option>
                  <option value={1}>1&nbsp;&nbsp;</option>
                  <option value={2}>2&nbsp;&nbsp;</option>
                </select>
              </div>
            </div>
            <div className="alert alert-block alert-error fade in">
              <button type="button" className="close" data-dismiss="alert">×</button>
              <strong>Pharmco Alert</strong>please enter your personal records
            </div>	
            <h4>Your address</h4>
            
            <div className="control-group">
              <label className="control-label" htmlFor="company">Company</label>
              <div className="controls">
                <input type="text" name="company" onChange={this.Onclick} placeholder="company" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="address">Address<sup>*</sup></label>
              <div className="controls">
                <input type="text" name="address" onChange={this.Onclick} placeholder="Adress" /> <span>Street address, P.O. box, company name, c/o</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="address2">Address (Line 2)<sup>*</sup></label>
              <div className="controls">
                <input type="text" name="address2" onChange={this.Onclick} placeholder="Adress line 2" /> <span>Apartment, suite, unit, building, floor, etc.</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="city">City<sup>*</sup></label>
              <div className="controls">
                <input type="text" name="city" onChange={this.Onclick} placeholder="city" /> 
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="state">State<sup>*</sup></label>
              <div className="controls">
                <select name="state">
                  <option value>-</option>
                  <option value>Nairobi</option>
                  <option value>Kisumu</option>
                  <option value>Mombasa</option>
                  <option value>Homabay</option>
                  <option value>Malindi</option>
                  <option value>Kilifi</option>
                  <option value>Watamu</option>
                  <option value>Nakuru</option>
                  <option value>Njoro</option>
                  <option value>Gilgil</option>
                  <option value>Naivasha</option>
                  <option value>limuru</option>
                </select>
              </div>
            </div>		
            <div className="control-group">
              <label className="control-label" htmlFor="postcode">Zip / Postal Code<sup>*</sup></label>
              <div className="controls">
                <input type="text" name="postcode" onChange={this.Onclick} placeholder="Zip / Postal Code" /> 
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="country">Country<sup>*</sup></label>
              <div className="controls">
                <select name="country">
                  <option value>-</option>
                  <option value={1}>Country</option>
                </select>
              </div>
            </div>	
            <div className="control-group">
              <label className="control-label" htmlFor="aditionalInfo">Additional information</label>
              <div className="controls">
                <textarea  name="aditionalInfo" cols={26} rows={3} defaultValue={"Additional information"} />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="phone">Home phone <sup>*</sup></label>
              <div className="controls">
                <input type="text" name="phone" onChange={this.Onclick} placeholder="phone" /> <span>You must register at least one phone number</span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="mobile">Mobile Phone </label>
              <div className="controls">
                <input type="text" onChange={this.Onclick} name="mobile" placeholder="Mobile Phone" /> 
              </div>
            </div>
            <p><sup>*</sup>Required field	</p>
            <div className="control-group">
              <div className="controls">
                <input type="hidden" name="email_create" defaultValue={1} />
                <input type="hidden" name="is_new_customer" defaultValue={1} />
                <input className="btn btn-large btn-success"  type="submit" defaultValue="Register" />
              </div>
            </div>		
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

             );
    }
}
 
export default RegistrationForm;