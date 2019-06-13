import React, { Component } from 'react';
class Register extends Component {
    state = { email:""}
    Handlechange=(e)=>{
      e.preventDefault()
      const {name,value} = e.target;
      this.setState({
        [name]:value
      })}
      handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
      }
    render() { 
        return (  <div className="span4">
        <div className="well">
            <h5>CREATE YOUR ACCOUNT</h5><br />
            <p>
            Enter your e-mail address to create an account.<br /><br /><br />
            </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail address</label>
                    <div className="controls">
                    <input className="span3" type="text"onChange={this.Handlechange} name='email' placeholder="Email" />
                    </div>
                    </div>
                    <div className="controls">
                        <button type="submit" className="btn block">Create Your Account</button>
                    </div>
                </form>
        </div>
    </div> );
    }
}
 
export default Register;